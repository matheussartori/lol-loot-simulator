import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { AddChampionUseCase } from './add-champion'
import { makeChampion } from 'test/factories/make-champion'
import { ChampionAlreadyOwnedError } from './errors/champion-already-owned-error'

let inMemoryChampionRepository = new InMemoryChampionRepository()

let sut: AddChampionUseCase

describe('add champion use case', () => {
  beforeEach(() => {
    inMemoryChampionRepository = new InMemoryChampionRepository()
    sut = new AddChampionUseCase(inMemoryChampionRepository)
  })

  it('should not be able to add a champion that is already owned by an user', async () => {
    const champion = makeChampion()

    await sut.execute({
      championId: champion.championId.toString(),
      userId: champion.userId.toString(),
      releasedAt: new Date(),
      purchasedAt: new Date(),
    })

    const result = await sut.execute({
      championId: champion.championId.toString(),
      userId: champion.userId.toString(),
      releasedAt: new Date(),
      purchasedAt: new Date(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ChampionAlreadyOwnedError)
  })

  it('should be able to add a champion to an user', async () => {
    const champion = makeChampion()

    const result = await sut.execute({
      championId: champion.championId.toString(),
      userId: champion.userId.toString(),
      releasedAt: new Date(),
      purchasedAt: new Date(),
    })

    expect(result.isRight()).toBe(true)
  })
})
