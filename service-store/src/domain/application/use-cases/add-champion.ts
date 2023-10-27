import { Either, left, right } from '@/core/either'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'
import { Champion } from '@/domain/enterprise/entities/champion'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AddChampionParams {
  championId: string
  name: string
  blueEssencePrice: number
  riotPointsPrice: number
  releasedAt: Date
}

type AddChampionResult = Either<ChampionAlreadyExistsError, null>

export class AddChampionUseCase {
  constructor(private championRepository: ChampionRepository) {}

  async execute({
    championId,
    name,
    blueEssencePrice,
    riotPointsPrice,
    releasedAt,
  }: AddChampionParams): Promise<AddChampionResult> {
    const championExists =
      await this.championRepository.findByChampionId(championId)

    if (championExists) {
      return left(new ChampionAlreadyExistsError())
    }

    const champion = Champion.create({
      name,
      blueEssencePrice,
      riotPointsPrice,
      releasedAt,
      championId: new UniqueEntityID(championId),
    })

    await this.championRepository.create(champion)

    return right(null)
  }
}
