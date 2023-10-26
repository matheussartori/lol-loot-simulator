import { Either, left, right } from '@/core/either'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyOwnedError } from './errors/champion-already-owned-error'
import { Champion } from '@/domain/enterprise/entities/champion'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AddChampionParams {
  championId: string
  userId: string
  releasedAt: Date
  purchasedAt?: Date
}

type AddChampionResult = Either<ChampionAlreadyOwnedError, null>

export class AddChampionUseCase {
  constructor(private championRepository: ChampionRepository) {}

  async execute({
    championId,
    userId,
    releasedAt,
    purchasedAt,
  }: AddChampionParams): Promise<AddChampionResult> {
    const championAlreadyExists =
      await this.championRepository.findByUserIdAndChampionId(
        userId,
        championId,
      )

    if (championAlreadyExists) {
      return left(new ChampionAlreadyOwnedError())
    }

    const champion = Champion.create({
      championId: new UniqueEntityID(championId),
      userId: new UniqueEntityID(userId),
      releasedAt,
      purchasedAt,
    })

    await this.championRepository.create(champion)

    return right(null)
  }
}
