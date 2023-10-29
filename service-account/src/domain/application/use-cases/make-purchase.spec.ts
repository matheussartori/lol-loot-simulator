import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository'
import { UserNotFoundError } from './errors/user-not-found'
import { MakePurchaseUseCase } from './make-purchase'
import { Test } from '@nestjs/testing'
import { KafkaService } from '@/infra/messaging/kafka.service'
import { makeUser } from 'test/factories/make-user'
import { InsufficientBalanceError } from './errors/insufficient-balance-error'

let inMemoryUserRepository: InMemoryUserRepository
let fakeMessagingService: KafkaService

let sut: MakePurchaseUseCase

describe('check balance use case', () => {
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

    inMemoryUserRepository = new InMemoryUserRepository()
    fakeMessagingService = module.get(KafkaService)
    sut = new MakePurchaseUseCase(inMemoryUserRepository, fakeMessagingService)
  })

  it('should not be able to make a purchase if the user does not exists', async () => {
    const result = await sut.execute({
      userId: 'non-existent-user-id',
      amount: 10,
      currency: 'BLUE_ESSENCE',
      itemId: 'any-item-id',
      transactionId: 'any-transaction-id',
      type: 'CHAMPION',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UserNotFoundError)
  })

  it('should not be able to make a purchase if the user does not have balance', async () => {
    const user = makeUser()
    user.addBlueEssence(9)
    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      userId: user.id.toString(),
      amount: 10,
      currency: 'BLUE_ESSENCE',
      itemId: 'any-item-id',
      transactionId: 'any-transaction-id',
      type: 'CHAMPION',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(InsufficientBalanceError)
  })

  it('should be able to make a purchase', async () => {
    const user = makeUser()
    user.addBlueEssence(10)
    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      userId: user.id.toString(),
      amount: 10,
      currency: 'BLUE_ESSENCE',
      itemId: 'any-item-id',
      transactionId: 'any-transaction-id',
      type: 'CHAMPION',
    })

    expect(result.isRight()).toBe(true)
  })
})
