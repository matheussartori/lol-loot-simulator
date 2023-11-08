import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { ValidateOwnedChampionUseCase } from './validate-owned-champion'
import { makeChampion } from 'test/factories/make-champion'
import { FakeMessageEmitter } from 'test/messaging/fake-message-emitter'
import { CorrelationID } from '@/core/entities/correlation-id'

let inMemoryChampionRepository: InMemoryChampionRepository
let fakeMessagingEmitter: FakeMessageEmitter

let sut: ValidateOwnedChampionUseCase

describe('validate owned champion use case', () => {
  beforeEach(() => {
    inMemoryChampionRepository = new InMemoryChampionRepository()
    fakeMessagingEmitter = new FakeMessageEmitter()
    sut = new ValidateOwnedChampionUseCase(
      inMemoryChampionRepository,
      fakeMessagingEmitter,
    )
  })

  it('should emit the purchase.failed.owned event when the user already has the champion', async () => {
    const champion = makeChampion()

    inMemoryChampionRepository.create(champion)

    const result = await sut.execute({
      userId: champion.userId.toString(),
      championId: champion.championId.toString(),
      transactionId: 'any-transaction-id',
      correlationId: new CorrelationID({
        name: ValidateOwnedChampionUseCase.name,
      }),
    })

    expect(result.isLeft()).toBe(true)
  })

  it('should emit the purchase.validated.inventory event when the user does not have the champion', async () => {
    const result = await sut.execute({
      userId: 'any-user-id',
      championId: 'any-champion-id',
      transactionId: 'any-transaction-id',
      correlationId: new CorrelationID({
        name: ValidateOwnedChampionUseCase.name,
      }),
    })

    expect(result.isRight()).toBe(true)
  })
})
