import { OpenCapsuleUseCase } from '@/domain/application/use-cases/open-capsule'
import { Injectable } from '@nestjs/common'
import { UserCapsuleRepository } from '../../domain/application/repositories/user-capsule-repository'
import { CapsuleRepository } from '../../domain/application/repositories/capsule-repository'
import { ItemRepository } from '../../domain/application/repositories/item-repository'
import { UserItemRepository } from '../../domain/application/repositories/user-item-repository'

@Injectable()
export class NestOpenChampionCapsuleUseCase extends OpenCapsuleUseCase {
  constructor(
    userCapsuleRepository: UserCapsuleRepository,
    capsuleRepository: CapsuleRepository,
    itemRepository: ItemRepository,
    userItemRepository: UserItemRepository,
  ) {
    super(
      userCapsuleRepository,
      capsuleRepository,
      itemRepository,
      userItemRepository,
    )
  }
}
