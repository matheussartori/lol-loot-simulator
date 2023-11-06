import { Either, left, right } from '@/core/either'
import { UserCapsuleRepository } from '../repositories/user-capsule-repository'
import { CapsuleNotFoundError } from './errors/capsule-not-found-error'
import { ForbiddenCapsuleError } from './errors/forbidden-capsule-error'
import { CapsuleRepository } from '../repositories/capsule-repository'
import { WrongCapsuleTypeError } from './errors/wrong-capsule-type-error'
import { ItemRepository } from '../repositories/item-repository'
import { UserItem } from '@/domain/enterprise/entities/user-item'
import { UserItemRepository } from '../repositories/user-item-repository'

interface OpenChampionCapsuleUseCaseParams {
  userCapsuleId: string
  userId: string
}

type OpenChampionCapsuleUseCaseResult = Either<
  ForbiddenCapsuleError | CapsuleNotFoundError | WrongCapsuleTypeError,
  {
    earnedItems: UserItem[]
  }
>

export class OpenChampionCapsuleUseCase {
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

    const capsule = await this.capsuleRepository.findById(
      userCapsule.capsuleId.toString(),
    )

    if (!capsule) {
      return left(new CapsuleNotFoundError())
    }

    if (capsule.type !== 'CHAMPION_CAPSULE') {
      return left(new WrongCapsuleTypeError())
    }

    const minChampionFragments = 2
    const maxChampionFragments = 3

    const maxQuantity =
      Math.floor(
        Math.random() * (maxChampionFragments - minChampionFragments + 1),
      ) + minChampionFragments

    const champions = await this.itemRepository.findRandomByTypeAndRarity(
      'CHAMPION',
      'STANDARD',
      maxQuantity,
    )

    const earnedItems: UserItem[] = []

    for (const champion of champions) {
      const userItem = UserItem.create({
        itemId: champion.id,
        type: 'CHAMPION_FRAGMENT',
        userId: userCapsule.userId,
        userCapsuleId: userCapsule.id,
      })

      await this.userItemRepository.create(userItem)
      earnedItems.push(userItem)
    }

    return right({
      earnedItems,
    })
  }
}
