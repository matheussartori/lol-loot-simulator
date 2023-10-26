import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { FetchChampionsUseCase } from './fetch-champions'

let inMemoryChampionRepository: InMemoryChampionRepository

let sut: FetchChampionsUseCase

describe('fetch champions use case', () => {
  beforeEach(() => {
    inMemoryChampionRepository = new InMemoryChampionRepository()
    sut = new FetchChampionsUseCase(inMemoryChampionRepository)
  })

  it('should return an empty array if no champions are found', async () => {
    const result = await sut.execute()

    expect(result.isRight()).toBe(true)
    expect(result.value?.champions).toHaveLength(0)
  })
})
