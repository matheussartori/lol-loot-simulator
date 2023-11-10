import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { AddChampionUseCase } from './add-champion'
import { makeChampion } from 'test/factories/make-champion'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'
import { InMemoryChampionImageRepository } from '../../../../test/repositories/in-memory-champion-image-repository'

let inMemoryChampionRepository: InMemoryChampionRepository
let inMemoryChampionImageRepository: InMemoryChampionImageRepository

let sut: AddChampionUseCase

describe('add champion use case', () => {
  beforeEach(() => {
    inMemoryChampionRepository = new InMemoryChampionRepository()
    inMemoryChampionImageRepository = new InMemoryChampionImageRepository()
    sut = new AddChampionUseCase(
      inMemoryChampionRepository,
      inMemoryChampionImageRepository,
    )
  })

  it('should not be able to add a champion that already exists', async () => {
    const champion = makeChampion()

    await inMemoryChampionRepository.create(champion)

    const result = await sut.execute({
      championId: champion.championId.toString(),
      name: champion.name,
      blueEssencePrice: champion.blueEssencePrice,
      riotPointsPrice: champion.riotPointsPrice,
      releasedAt: champion.releasedAt,
      images: {
        portrait: 'any-image-url',
        splash: 'any-image-url',
        loading: 'any-image-url',
      },
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ChampionAlreadyExistsError)
  })

  it('should be able to add a champion', async () => {
    const champion = makeChampion()

    const result = await sut.execute({
      championId: champion.championId.toString(),
      name: champion.name,
      blueEssencePrice: champion.blueEssencePrice,
      riotPointsPrice: champion.riotPointsPrice,
      releasedAt: champion.releasedAt,
      images: {
        portrait: 'any-image-url',
        splash: 'any-image-url',
        loading: 'any-image-url',
      },
    })

    expect(result.isRight()).toBe(true)
  })
})
