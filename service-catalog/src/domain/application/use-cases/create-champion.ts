import { Either, left, right } from '@/core/either'
import { Champion } from '@/domain/enterprise/entities/champion'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'

interface CreateChampionParams {
  name: string
  releasedAt: Date
}

type CreateChampionResult = Either<ChampionAlreadyExistsError, null>

export class CreateChampionUseCase {
  constructor(private championRepository: ChampionRepository) {}
  async execute({
    name,
    releasedAt,
  }: CreateChampionParams): Promise<CreateChampionResult> {
    const championExists = await this.championRepository.findByName(name)

    if (championExists) {
      return left(new ChampionAlreadyExistsError())
    }

    const champion = Champion.create({
      name,
      releasedAt,
    })

    await this.championRepository.create(champion)

    return right(null)
  }
}
