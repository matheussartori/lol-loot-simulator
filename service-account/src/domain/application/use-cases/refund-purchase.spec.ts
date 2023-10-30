import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository'
import { RefundPurchaseUseCase } from './refund-purchase'
import { UserNotFoundError } from './errors/user-not-found'
import { makeUser } from 'test/factories/make-user'

let inMemoryUserRepository: InMemoryUserRepository

let sut: RefundPurchaseUseCase

describe('refund purchase use case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()

    sut = new RefundPurchaseUseCase(inMemoryUserRepository)
  })

  it('should not be able to refund a non-existent user', async () => {
    const result = await sut.execute({
      amount: 1,
      currency: 'BLUE_ESSENCE',
      userId: 'non-existing-user-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UserNotFoundError)
  })

  it('should be able to refund an user', async () => {
    const user = makeUser()

    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      amount: 1,
      currency: 'BLUE_ESSENCE',
      userId: user.id.toString(),
    })

    expect(result.isRight()).toBe(true)
  })
})
