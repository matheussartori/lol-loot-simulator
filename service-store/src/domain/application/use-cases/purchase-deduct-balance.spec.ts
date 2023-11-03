import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository'
import { InMemoryTransactionRepository } from '../../../../test/repositories/in-memory-transaction-repository'
import { PurchaseDeductBalanceUseCase } from '@/domain/application/use-cases/purchase-deduct-balance'
import { FakeMessageEmitter } from '../../../../test/messaging/fake-message-emitter'
import { UserNotFoundError } from '@/domain/application/use-cases/errors/user-not-found-error'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'
import { makeUser } from '../../../../test/factories/make-user'
import { makeTransaction } from '../../../../test/factories/make-transaction'
import { InsufficientBalanceError } from '@/domain/application/use-cases/errors/insufficient-balance-error'
import { expect } from 'vitest'

let inMemoryUserRepository: InMemoryUserRepository
let inMemoryTransactionRepository: InMemoryTransactionRepository
let fakeMessageEmitter: FakeMessageEmitter

let sut: PurchaseDeductBalanceUseCase

describe('purchase deduct balance use case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    inMemoryTransactionRepository = new InMemoryTransactionRepository()
    fakeMessageEmitter = new FakeMessageEmitter()

    sut = new PurchaseDeductBalanceUseCase(
      inMemoryUserRepository,
      inMemoryTransactionRepository,
      fakeMessageEmitter,
    )
  })

  it('should not be able to deduct balance if the user does not exists', async () => {
    const result = await sut.execute({
      transactionId: 'any-transaction-id',
      userId: 'non-existing-user-id',
      itemId: 'any-item-id',
      type: 'CHAMPION',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UserNotFoundError)
  })

  it('should not be able to deduct balance if the transaction does not exists', async () => {
    const user = makeUser()

    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      transactionId: 'any-transaction-id',
      userId: user.userId.toString(),
      itemId: 'any-item-id',
      type: 'CHAMPION',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(TransactionNotFoundError)
  })

  it('should not be able to deduct the balance if the user does not have enough blue essence', async () => {
    const emitSpy = vi.spyOn(fakeMessageEmitter, 'emit')
    const user = makeUser({
      blueEssence: 0,
    })
    await inMemoryUserRepository.create(user)
    const transaction = makeTransaction({
      userId: user.id,
      currency: 'BLUE_ESSENCE',
      amount: 1000,
    })
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
      userId: user.userId.toString(),
      itemId: transaction.itemId.toString(),
      type: transaction.type,
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(InsufficientBalanceError)
    expect(emitSpy).toHaveBeenCalledTimes(0)
  })

  it('should not be able to deduct the balance if the user does not have enough riot points', async () => {
    const emitSpy = vi.spyOn(fakeMessageEmitter, 'emit')
    const user = makeUser({
      riotPoints: 0,
    })
    await inMemoryUserRepository.create(user)
    const transaction = makeTransaction({
      userId: user.id,
      currency: 'RIOT_POINTS',
      amount: 1000,
    })
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
      userId: user.userId.toString(),
      itemId: transaction.itemId.toString(),
      type: transaction.type,
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(InsufficientBalanceError)
    expect(emitSpy).toHaveBeenCalledTimes(0)
  })

  it('should be able to deduct the balance if the user have enough blue essence', async () => {
    const emitSpy = vi.spyOn(fakeMessageEmitter, 'emit')
    const user = makeUser({
      blueEssence: 1000,
    })
    await inMemoryUserRepository.create(user)
    const transaction = makeTransaction({
      userId: user.id,
      currency: 'BLUE_ESSENCE',
      amount: 1000,
    })
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
      userId: user.userId.toString(),
      itemId: transaction.itemId.toString(),
      type: transaction.type,
    })

    expect(result.isRight()).toBe(true)
    expect(emitSpy).toHaveBeenCalledWith(
      'purchase.validated.balance',
      expect.any(Object),
    )
    expect(emitSpy).toHaveBeenCalledTimes(1)
  })

  it('should be able to deduct the balance if the user have enough riot points', async () => {
    const emitSpy = vi.spyOn(fakeMessageEmitter, 'emit')
    const user = makeUser({
      riotPoints: 1000,
    })
    await inMemoryUserRepository.create(user)
    const transaction = makeTransaction({
      userId: user.id,
      currency: 'RIOT_POINTS',
      amount: 1000,
    })
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
      userId: user.userId.toString(),
      itemId: transaction.itemId.toString(),
      type: transaction.type,
    })

    expect(result.isRight()).toBe(true)
    expect(emitSpy).toHaveBeenCalledWith(
      'purchase.validated.balance',
      expect.any(Object),
    )
    expect(emitSpy).toHaveBeenCalledTimes(1)
  })
})
