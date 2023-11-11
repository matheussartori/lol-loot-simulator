import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Either, right } from '@/core/either'
import { ChampionWithImages } from '@/domain/enterprise/entities/value-objects/champion-with-images'

type FetchCatalogUseCaseResult = Either<
  null,
  {
    champions: ChampionWithImages[]
  }
>

export class FetchCatalogUseCase {
  constructor(private championRepository: ChampionRepository) {}

  async execute(): Promise<FetchCatalogUseCaseResult> {
    const champions = await this.championRepository.findManyWithImages()

    return right({
      champions,
    })
  }
}
