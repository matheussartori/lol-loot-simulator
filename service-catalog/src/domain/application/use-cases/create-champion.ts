import { Either, left, right } from '@/core/either'
import { Champion } from '@/domain/enterprise/entities/champion'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

interface CreateChampionParams {
  name: string
  blueEssencePrice: number
  riotPointsPrice: number
  releasedAt: Date
}

type CreateChampionResult = Either<
  ChampionAlreadyExistsError,
  {
    champion: Champion
  }
>

export class CreateChampionUseCase {
  constructor(
    private championRepository: ChampionRepository,
    private messageEmitter: MessageEmitter,
  ) {}

  async execute({
    name,
    blueEssencePrice,
    riotPointsPrice,
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

    this.messageEmitter.emit('champion.added', {
      key: champion.id.toString(),
      value: {
        champion: {
          id: champion.id.toString(),
          name: champion.name,
          releasedAt: champion.releasedAt,
        },
        blueEssencePrice,
        riotPointsPrice,
      },
    })

    return right({
      champion,
    })
  }
}
