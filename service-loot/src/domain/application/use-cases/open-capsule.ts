import { Either, left, right } from '@/core/either'
import { UserCapsuleRepository } from '../repositories/user-capsule-repository'
import { CapsuleNotFoundError } from './errors/capsule-not-found-error'
import { ForbiddenCapsuleError } from './errors/forbidden-capsule-error'
import { CapsuleRepository } from '../repositories/capsule-repository'
import { ItemRepository } from '../repositories/item-repository'
import { UserItem } from '@/domain/enterprise/entities/user-item'
import { UserItemRepository } from '../repositories/user-item-repository'
import { CapsuleAlreadyOpenedError } from './errors/capsule-already-opened'

interface OpenChampionCapsuleUseCaseParams {
  userCapsuleId: string
  userId: string
}

type OpenChampionCapsuleUseCaseResult = Either<
  ForbiddenCapsuleError | CapsuleAlreadyOpenedError | CapsuleNotFoundError,
  {
    earnedItems: UserItem[]
  }
>

export class OpenCapsuleUseCase {
  constructor(
    private userCapsuleRepository: UserCapsuleRepository,
    private capsuleRepository: CapsuleRepository,
    private itemRepository: ItemRepository,
    private userItemRepository: UserItemRepository,
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

    const champions = await this.itemRepository.findRandomByTypeAndRarity(
      'CHAMPION',
      'STANDARD',
      capsule.rollRewardedItemsQuantity(),
    )

    const earnedItems: UserItem[] = []

    for (const champion of champions) {
      const userItem = UserItem.create({
        itemId: champion.id,
        type: 'CHAMPION_SHARD',
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
