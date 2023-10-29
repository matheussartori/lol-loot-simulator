import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestAddChampionUseCase extends AddChampionUseCase {
  constructor(championRepository: ChampionRepository) {
    super(championRepository)
  }
}
