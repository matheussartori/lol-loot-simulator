import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { FetchChampionsUseCase } from '@/domain/application/use-cases/fetch-champions'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestFetchChampionsUseCase extends FetchChampionsUseCase {
  constructor(championRepository: ChampionRepository) {
    super(championRepository)
  }
}
