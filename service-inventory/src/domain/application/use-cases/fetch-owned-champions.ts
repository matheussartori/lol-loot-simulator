import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Either, right } from '@/core/either'
import { Champion } from '@/domain/enterprise/entities/champion'

interface FetchOwnedChampionsParams {
  userId: string
}

type FetchOwnedChampionsResult = Either<
  null,
  {
    champions: Champion[]
  }
>

export class FetchOwnedChampionsUseCase {
  constructor(private championRepository: ChampionRepository) {}

  async execute({
    userId,
  }: FetchOwnedChampionsParams): Promise<FetchOwnedChampionsResult> {
    const champions = await this.championRepository.findManyByUserId(userId)

    return right({
      champions,
    })
  }
}
