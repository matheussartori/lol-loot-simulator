import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { Injectable } from '@nestjs/common'
import { CapsuleRepository } from '@/domain/application/repositories/capsule-repository'
import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'

@Injectable()
export class NestAddChampionUseCase extends AddChampionUseCase {
  constructor(
    itemRepository: ItemRepository,
    capsuleRepository: CapsuleRepository,
    capsuleItemRepository: CapsuleItemRepository,
  ) {
    super(itemRepository, capsuleRepository, capsuleItemRepository)
  }
}
