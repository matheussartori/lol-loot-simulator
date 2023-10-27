import { Champion } from '@/domain/enterprise/entities/champion'
import { ChampionRepository } from '../repositories/champion-repository'
import { Either, right } from '@/core/either'

type FetchChampionsResult = Either<
  null,
  {
    champions: Champion[]
  }
>

export class FetchChampionsUseCase {
  constructor(private championRepository: ChampionRepository) {}

  async execute(): Promise<FetchChampionsResult> {
    const champions = await this.championRepository.findMany()

    return right({
      champions,
    })
  }
}
