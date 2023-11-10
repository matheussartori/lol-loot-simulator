import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Injectable } from '@nestjs/common'
import { ChampionImageRepository } from '@/domain/application/repositories/champion-image-repository'

@Injectable()
export class NestAddChampionUseCase extends AddChampionUseCase {
  constructor(
    championRepository: ChampionRepository,
    championImageRepository: ChampionImageRepository,
  ) {
    super(championRepository, championImageRepository)
  }
}
