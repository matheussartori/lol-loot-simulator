import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { FetchChampionsUseCase } from './fetch-champions'
import { makeChampion } from 'test/factories/make-champion'
import { InMemoryChampionImageRepository } from '../../../../test/repositories/in-memory-champion-image-repository'

let inMemoryChampionRepository: InMemoryChampionRepository
let inMemoryChampionImageRepository: InMemoryChampionImageRepository

let sut: FetchChampionsUseCase

describe('fetch champions use case', () => {
  beforeEach(() => {
    inMemoryChampionImageRepository = new InMemoryChampionImageRepository()
    inMemoryChampionRepository = new InMemoryChampionRepository(
      inMemoryChampionImageRepository,
    )
    sut = new FetchChampionsUseCase(inMemoryChampionRepository)
  })

  it('should return an empty array if no champions are found', async () => {
    const result = await sut.execute()

    expect(result.isRight()).toBe(true)
    expect(result.value?.champions).toHaveLength(0)
  })

  it('should return the fetched champions', async () => {
    const champion = makeChampion()

    inMemoryChampionRepository.create(champion)

    const result = await sut.execute()

    expect(result.isRight()).toBe(true)
    expect(result.value?.champions).toHaveLength(1)
  })
})
