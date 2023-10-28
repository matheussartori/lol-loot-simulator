import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository'
import { CheckBalanceUseCase } from './check-balance'
import { UserNotFoundError } from './errors/user-not-found'
import { makeUser } from 'test/factories/make-user'

let inMemoryUserRepository: InMemoryUserRepository

let sut: CheckBalanceUseCase

describe('check balance use case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    sut = new CheckBalanceUseCase(inMemoryUserRepository)
  })

  it('should not be able to check balance of a non-existent user', async () => {
    const result = await sut.execute({
      userId: 'non-existent-user-id',
      amount: 10,
      type: 'BLUE_ESSENCE',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UserNotFoundError)
  })

  it('should be able to check the negative balance of a user', async () => {
    const user = makeUser()

    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      userId: user.id.toString(),
      amount: 10,
      type: 'BLUE_ESSENCE',
    })

    expect(result.isRight()).toBe(true)

    if (result.isRight()) {
      expect(result.value.hasBalance).toBe(false)
    }
  })

  it('should be able to check the positive balance of a user', async () => {
    const user = makeUser()
    user.addBlueEssence(1000)

    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      userId: user.id.toString(),
      amount: 100,
      type: 'BLUE_ESSENCE',
    })

    expect(result.isRight()).toBe(true)

    if (result.isRight()) {
      expect(result.value.hasBalance).toBe(true)
    }
  })
})
