import { Either, left, right } from '@/core/either'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'
import { Champion } from '@/domain/enterprise/entities/champion'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ChampionImage } from '@/domain/enterprise/entities/champion-image'
import { ChampionImageRepository } from '@/domain/application/repositories/champion-image-repository'

interface AddChampionParams {
  championId: string
  name: string
  blueEssencePrice: number
  riotPointsPrice: number
  releasedAt: Date
  images: {
    portrait: string
    splash: string
    loading: string
  }
}

type AddChampionResult = Either<ChampionAlreadyExistsError, null>

export class AddChampionUseCase {
  constructor(
    private championRepository: ChampionRepository,
    private championImageRepository: ChampionImageRepository,
  ) {}

  async execute({
    championId,
    name,
    blueEssencePrice,
    riotPointsPrice,
    releasedAt,
    images,
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

    const championImages: ChampionImage[] = []

    championImages.push(
      ChampionImage.create({
        championId: new UniqueEntityID(championId),
        url: images.portrait,
        type: 'PORTRAIT',
      }),
      ChampionImage.create({
        championId: new UniqueEntityID(championId),
        url: images.splash,
        type: 'SPLASH',
      }),
      ChampionImage.create({
        championId: new UniqueEntityID(championId),
        url: images.loading,
        type: 'LOADING',
      }),
    )

    for (const championImage of championImages) {
      await this.championImageRepository.create(championImage)
    }

    return right(null)
  }
}
