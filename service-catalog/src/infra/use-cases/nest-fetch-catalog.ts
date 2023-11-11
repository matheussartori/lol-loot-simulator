import { FetchCatalogUseCase } from '@/domain/application/use-cases/fetch-catalog'
import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestFetchCatalogUseCase extends FetchCatalogUseCase {
  constructor(championRepository: ChampionRepository) {
    super(championRepository)
  }
}
