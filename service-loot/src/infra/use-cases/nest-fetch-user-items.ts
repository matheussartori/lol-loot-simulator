import { UserCapsuleRepository } from '@/domain/application/repositories/user-capsule-repository'
import { UserItemRepository } from '@/domain/application/repositories/user-item-repository'
import { FetchUserItemsUseCase } from '@/domain/application/use-cases/fetch-user-items'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestFetchUserItemsUseCase extends FetchUserItemsUseCase {
  constructor(
    userItemRepository: UserItemRepository,
    userCapsuleRepository: UserCapsuleRepository,
  ) {
    super(userItemRepository, userCapsuleRepository)
  }
}
