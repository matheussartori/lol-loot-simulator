import { Either, left, right } from '@/core/either'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'
import { Champion, RarityTier } from '@/domain/enterprise/entities/champion'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AddChampionParams {
  championId: string
  name: string
  rarityTier: RarityTier
  releasedAt: Date
}

type AddChampionResult = Either<ChampionAlreadyExistsError, null>

export class AddChampionUseCase {
  constructor(private championRepository: ChampionRepository) {}

  async execute({
    championId,
    name,
    rarityTier,
    releasedAt,
  }: AddChampionParams): Promise<AddChampionResult> {
    const championExists =
      await this.championRepository.findByChampionId(championId)

    if (championExists) {
      return left(new ChampionAlreadyExistsError())
    }

    const champion = Champion.create({
      name,
      rarityTier,
      releasedAt,
      championId: new UniqueEntityID(championId),
    })

    await this.championRepository.create(champion)

    return right(null)
  }
}
