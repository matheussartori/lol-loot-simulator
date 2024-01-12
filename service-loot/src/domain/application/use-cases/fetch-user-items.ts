import { Either, right } from '@/core/either'
import { UserItemRepository } from '../repositories/user-item-repository'
import { UserItem } from '@/domain/enterprise/entities/user-item'
import { UserCapsuleRepository } from '../repositories/user-capsule-repository'
import { UserCapsule } from '@/domain/enterprise/entities/user-capsule'

interface FetchUserItemsUseCaseParams {
  userId: string
}

type FetchUserItemsUseCaseResult = Either<
  null,
  {
    userItems: UserItem[]
    userCapsules: UserCapsule[]
  }
>

export class FetchUserItemsUseCase {
  constructor(
    private userItemRepository: UserItemRepository,
    private userCapsuleRepository: UserCapsuleRepository,
  ) {}

  async execute({
    userId,
  }: FetchUserItemsUseCaseParams): Promise<FetchUserItemsUseCaseResult> {
    const userItems = await this.userItemRepository.findByUserId(userId)
    const userCapsules =
      await this.userCapsuleRepository.findUnopenedByUserId(userId)

    return right({
      userItems,
      userCapsules,
    })
  }
}
