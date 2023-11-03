import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { AddChampionUseCase } from './add-champion'
import { makeChampion } from 'test/factories/make-champion'
import { ChampionAlreadyOwnedError } from './errors/champion-already-owned-error'
import { FakeMessageEmitter } from '../../../../test/messaging/fake-message-emitter'

let inMemoryChampionRepository = new InMemoryChampionRepository()
let fakeMessageEmitter: FakeMessageEmitter

let sut: AddChampionUseCase

describe('add champion use case', () => {
  beforeEach(() => {
    inMemoryChampionRepository = new InMemoryChampionRepository()
    fakeMessageEmitter = new FakeMessageEmitter()
    sut = new AddChampionUseCase(inMemoryChampionRepository, fakeMessageEmitter)
  })

  it('should not be able to add a champion that is already owned by an user', async () => {
    const emitSpy = vi.spyOn(fakeMessageEmitter, 'emit')
    const champion = makeChampion()
    await inMemoryChampionRepository.create(champion)

    const result = await sut.execute({
      championId: champion.championId.toString(),
      userId: champion.userId.toString(),
      releasedAt: new Date(),
      purchasedAt: new Date(),
      transactionId: 'other-transaction-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ChampionAlreadyOwnedError)
    expect(emitSpy).toHaveBeenCalledWith('purchase.refund', expect.any(Object))
    expect(emitSpy).toHaveBeenCalledTimes(1)
  })

  it('should be able to add a champion to an user', async () => {
    const emitSpy = vi.spyOn(fakeMessageEmitter, 'emit')
    const champion = makeChampion()
    const result = await sut.execute({
      championId: champion.championId.toString(),
      userId: champion.userId.toString(),
      releasedAt: new Date(),
      purchasedAt: new Date(),
      transactionId: 'any-transaction-id',
    })

    expect(result.isRight()).toBe(true)
    expect(emitSpy).toHaveBeenCalledWith(
      'purchase.completed',
      expect.any(Object),
    )
    expect(emitSpy).toHaveBeenCalledTimes(1)
  })
})
