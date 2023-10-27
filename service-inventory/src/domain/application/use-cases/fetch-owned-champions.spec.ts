import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { FetchOwnedChampionsUseCase } from './fetch-owned-champions'
import { makeChampion } from 'test/factories/make-champion'

let inMemoryChampionRepository: InMemoryChampionRepository

let sut: FetchOwnedChampionsUseCase

describe('fetch owned champions use case', () => {
  beforeEach(() => {
    inMemoryChampionRepository = new InMemoryChampionRepository()
    sut = new FetchOwnedChampionsUseCase(inMemoryChampionRepository)
  })

  it('should return an empty array if no champions are found', async () => {
    const result = await sut.execute({
      userId: 'any-user-id',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.champions).toHaveLength(0)
  })

  it('should return the fetched champions', async () => {
    const champion = makeChampion()

    inMemoryChampionRepository.create(champion)

    const result = await sut.execute({
      userId: champion.userId.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.champions).toHaveLength(1)
  })
})
