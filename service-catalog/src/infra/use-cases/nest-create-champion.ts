import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestCreateChampionUseCase extends CreateChampionUseCase {
  constructor(championRepository: ChampionRepository) {
    super(championRepository)
  }
}
