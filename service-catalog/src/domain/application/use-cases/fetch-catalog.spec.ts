import { FetchCatalogUseCase } from '@/domain/application/use-cases/fetch-catalog'
import { InMemoryChampionRepository } from '../../../../test/repositories/in-memory-champion-repository'
import { InMemoryChampionImageRepository } from '../../../../test/repositories/in-memory-champion-image-repository'
import { makeChampion } from '../../../../test/factories/make-champion'
import { makeChampionImage } from '../../../../test/factories/make-champion-image'

let inMemoryChampionRepository: InMemoryChampionRepository
let inMemoryChampionImageRepository: InMemoryChampionImageRepository

let sut: FetchCatalogUseCase

describe('fetch catalog use case', () => {
  beforeEach(() => {
    inMemoryChampionImageRepository = new InMemoryChampionImageRepository()
    inMemoryChampionRepository = new InMemoryChampionRepository(
      inMemoryChampionImageRepository,
    )

    sut = new FetchCatalogUseCase(inMemoryChampionRepository)
  })

  it('should return an object with empty arrays if no data is found', async () => {
    const result = await sut.execute()

    expect(result.isRight()).toBeTruthy()
    expect(result.value?.champions).toHaveLength(0)
  })

  it('should return an object with array data', async () => {
    const champion = makeChampion()
    const championImage = makeChampionImage({ championId: champion.id })

    await inMemoryChampionRepository.create(champion)
    await inMemoryChampionImageRepository.create(championImage)

    const result = await sut.execute()

    expect(result.isRight()).toBeTruthy()
    expect(result.value?.champions).toHaveLength(1)
  })
})
