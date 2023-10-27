import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { FetchOwnedChampionsUseCase } from '@/domain/application/use-cases/fetch-owned-champions'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestFetchOwnedChampionsUseCase extends FetchOwnedChampionsUseCase {
  constructor(championRepository: ChampionRepository) {
    super(championRepository)
  }
}
