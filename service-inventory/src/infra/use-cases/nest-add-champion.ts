import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'

export class NestAddChampionUseCase extends AddChampionUseCase {
  constructor(championRepository: ChampionRepository) {
    super(championRepository)
  }
}
