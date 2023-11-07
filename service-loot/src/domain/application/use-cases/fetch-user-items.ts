import { Either, right } from '@/core/either'
import { UserItemRepository } from '../repositories/user-item-repository'
import { UserItem } from '@/domain/enterprise/entities/user-item'

interface FetchUserItemsUseCaseParams {
  userId: string
}

type FetchUserItemsUseCaseResult = Either<
  null,
  {
    userItems: UserItem[]
  }
>

export class FetchUserItemsUseCase {
  constructor(private userItemRepository: UserItemRepository) {}

  async execute({
    userId,
  }: FetchUserItemsUseCaseParams): Promise<FetchUserItemsUseCaseResult> {
    const userItems = await this.userItemRepository.findByUserId(userId)

    return right({
      userItems,
    })
  }
}
