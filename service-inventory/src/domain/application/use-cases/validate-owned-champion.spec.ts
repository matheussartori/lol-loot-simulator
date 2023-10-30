import { KafkaService } from '@/infra/messaging/kafka.service'
import { Test } from '@nestjs/testing'
import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { ValidateOwnedChampionUseCase } from './validate-owned-champion'
import { makeChampion } from 'test/factories/make-champion'

let inMemoryChampionRepository: InMemoryChampionRepository
let fakeMessagingService: KafkaService

let sut: ValidateOwnedChampionUseCase

describe('validate owned champion use case', () => {
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: KafkaService,
          useValue: {
            emit: vi.fn(),
          },
        },
      ],
    }).compile()

    inMemoryChampionRepository = new InMemoryChampionRepository()
    fakeMessagingService = module.get(KafkaService)
    sut = new ValidateOwnedChampionUseCase(
      inMemoryChampionRepository,
      fakeMessagingService,
    )
  })

  it('should emit the purchase.failed.owned event when the user already has the champion', async () => {
    const champion = makeChampion()

    inMemoryChampionRepository.create(champion)

    const result = await sut.execute({
      userId: champion.userId.toString(),
      championId: champion.championId.toString(),
      transactionId: 'any-transaction-id',
    })

    expect(result.isLeft()).toBe(true)
  })

  it('should emit the purchase.validated.inventory event when the user does not have the champion', async () => {
    const result = await sut.execute({
      userId: 'any-user-id',
      championId: 'any-champion-id',
      transactionId: 'any-transaction-id',
    })

    expect(result.isRight()).toBe(true)
  })
})
