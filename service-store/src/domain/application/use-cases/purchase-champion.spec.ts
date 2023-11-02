import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { PurchaseChampionUseCase } from './purchase-champion'
import { ItemNotFoundError } from './errors/item-not-found-error'
import { makeChampion } from 'test/factories/make-champion'
import { InMemoryTransactionRepository } from 'test/repositories/in-memory-transaction-repository'
import { FakeMessageEmitter } from 'test/messaging/fake-message-emitter'

let inMemoryChampionRepository: InMemoryChampionRepository
let inMemoryTransactionRepository: InMemoryTransactionRepository
let fakeMessagingService: FakeMessageEmitter

let sut: PurchaseChampionUseCase

describe('purchase champion use case', () => {
  beforeEach(async () => {
    inMemoryChampionRepository = new InMemoryChampionRepository()
    inMemoryTransactionRepository = new InMemoryTransactionRepository()
    fakeMessagingService = new FakeMessageEmitter()

    sut = new PurchaseChampionUseCase(
      inMemoryChampionRepository,
      inMemoryTransactionRepository,
      fakeMessagingService,
    )
  })

  it('should not be able to purchase a champion that does not exist', async () => {
    const result = await sut.execute({
      userId: 'any-user-id',
      championId: 'invalid-champion-id',
      currency: 'BLUE_ESSENCE',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ItemNotFoundError)
  })

  it('should be able to purchase a champion', async () => {
    const champion = makeChampion()

    await inMemoryChampionRepository.create(champion)

    const result = await sut.execute({
      userId: 'any-user-id',
      championId: champion.championId.toString(),
      currency: 'BLUE_ESSENCE',
    })

    expect(result.isRight()).toBe(true)
  })
})
