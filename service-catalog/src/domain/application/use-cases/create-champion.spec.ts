import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { CreateChampionUseCase } from './create-champion'
import { makeChampion } from 'test/factories/make-champion'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'

let inMemoryChampionsRepository: InMemoryChampionRepository

let sut: CreateChampionUseCase

describe('create champion use case', () => {
  beforeEach(() => {
    inMemoryChampionsRepository = new InMemoryChampionRepository()
    sut = new CreateChampionUseCase(inMemoryChampionsRepository)
  })

  it('should not create a champion if it already exists', async () => {
    const champion = makeChampion()

    inMemoryChampionsRepository.create(champion)

    const result = await sut.execute({
      name: champion.name,
      releasedAt: new Date(),
    })

    expect(result.isLeft())
    expect(result.value).toBeInstanceOf(ChampionAlreadyExistsError)
  })

  it('should create a champion', async () => {
    const champion = makeChampion()

    const result = await sut.execute({
      name: champion.name,
      releasedAt: new Date(),
    })

    expect(result.isRight())
  })
})
