import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestAddChampionUseCase extends AddChampionUseCase {
  constructor(itemRepository: ItemRepository) {
    super(itemRepository)
  }
}
