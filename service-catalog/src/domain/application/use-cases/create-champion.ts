import { Either, left, right } from '@/core/either'
import { Champion } from '@/domain/enterprise/entities/champion'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { CorrelationID } from '@/core/entities/correlation-id'
import { ChampionImage } from '@/domain/enterprise/entities/champion-image'
import { ChampionImageRepository } from '@/domain/application/repositories/champion-image-repository'

interface CreateChampionParams {
  name: string
  blueEssencePrice: number
  riotPointsPrice: number
  releasedAt: Date
  correlationId: CorrelationID
  images: {
    portrait: string
    splash: string
    loading: string
  }
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
    private championImageRepository: ChampionImageRepository,
    private messageEmitter: MessageEmitter,
  ) {}

  async execute({
    name,
    blueEssencePrice,
    riotPointsPrice,
    releasedAt,
    correlationId,
    images,
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

    const championImages: ChampionImage[] = []

    championImages.push(
      ChampionImage.create({
        championId: champion.id,
        url: images.portrait,
        type: 'PORTRAIT',
      }),
      ChampionImage.create({
        championId: champion.id,
        url: images.splash,
        type: 'SPLASH',
      }),
      ChampionImage.create({
        championId: champion.id,
        url: images.loading,
        type: 'LOADING',
      }),
    )

    for (const championImage of championImages) {
      await this.championImageRepository.create(championImage)
    }

    this.messageEmitter.emit('champion.added', {
      key: champion.id.toString(),
      value: {
        champion: {
          id: champion.id.toString(),
          name: champion.name,
          releasedAt: champion.releasedAt,
          images,
        },
        blueEssencePrice,
        riotPointsPrice,
      },
      headers: {
        correlationId: correlationId.toString(),
      },
    })

    return right({
      champion,
    })
  }
}
