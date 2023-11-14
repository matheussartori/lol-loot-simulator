import { Either, left, right } from '@/core/either'
import { UserCapsuleRepository } from '../repositories/user-capsule-repository'
import { CapsuleNotFoundError } from './errors/capsule-not-found-error'
import { ForbiddenCapsuleError } from './errors/forbidden-capsule-error'
import { CapsuleRepository } from '../repositories/capsule-repository'
import { UserItem } from '@/domain/enterprise/entities/user-item'
import { UserItemRepository } from '../repositories/user-item-repository'
import { CapsuleAlreadyOpenedError } from './errors/capsule-already-opened'
import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'
import { CapsuleOddRepository } from '@/domain/application/repositories/capsule-odd-repository'
import { Item } from '@/domain/enterprise/entities/item'
import { Rarity } from '@/domain/enterprise/entities/rarity'
import { CapsuleWithNoRewardFoundError } from '@/domain/application/use-cases/errors/capsule-with-no-reward-found-error'

interface OpenChampionCapsuleUseCaseParams {
  userCapsuleId: string
  userId: string
}

type OpenChampionCapsuleUseCaseResult = Either<
  | ForbiddenCapsuleError
  | CapsuleAlreadyOpenedError
  | CapsuleNotFoundError
  | CapsuleWithNoRewardFoundError,
  {
    earnedItems: UserItem[]
  }
>

export class OpenCapsuleUseCase {
  constructor(
    private userCapsuleRepository: UserCapsuleRepository,
    private capsuleRepository: CapsuleRepository,
    private capsuleItemRepository: CapsuleItemRepository,
    private userItemRepository: UserItemRepository,
    private capsuleOddRepository: CapsuleOddRepository,
  ) {}

  async execute({
    userCapsuleId,
    userId,
  }: OpenChampionCapsuleUseCaseParams): Promise<OpenChampionCapsuleUseCaseResult> {
    const userCapsule = await this.userCapsuleRepository.findById(userCapsuleId)

    if (!userCapsule) {
      return left(new CapsuleNotFoundError())
    }

    if (userCapsule.userId.toString() !== userId) {
      return left(new ForbiddenCapsuleError())
    }

    if (userCapsule.openedAt) {
      return left(new CapsuleAlreadyOpenedError())
    }

    const capsule = await this.capsuleRepository.findById(
      userCapsule.capsuleId.toString(),
    )

    if (!capsule) {
      return left(new CapsuleNotFoundError())
    }

    const rewardItemsQuantity = capsule.rollRewardedItemsQuantity()

    const capsuleOdds = await this.capsuleOddRepository.findByCapsuleId(
      capsule.id.toString(),
    )

    const earnedItems: UserItem[] = []
    const items: Item[] = []

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of Array(rewardItemsQuantity)) {
      let rarityTier = capsule.rollRarity(capsuleOdds)
      let item: Item | null = null

      while (!item) {
        item = await this.capsuleItemRepository.findRandomByCapsuleIdAndRarity(
          capsule.id.toString(),
          rarityTier,
        )

        if (!item) {
          const newRarity = Rarity.lowerRarity(rarityTier)

          if (!newRarity) {
            return left(new CapsuleWithNoRewardFoundError())
          }

          rarityTier = newRarity
        } else {
          items.push(item)
        }
      }
    }

    for (const item of items) {
      const userItem = UserItem.create({
        itemId: item.itemId,
        userId: userCapsule.userId,
        userCapsuleId: userCapsule.id,
      })

      await this.userItemRepository.create(userItem)

      earnedItems.push(userItem)
    }

    userCapsule.setAsOpened()
    await this.userCapsuleRepository.save(userCapsule)

    return right({
      earnedItems,
    })
  }
}
