import { InMemoryTransactionRepository } from '../../../../test/repositories/in-memory-transaction-repository'
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository'
import { PurchaseRefundUseCase } from '@/domain/application/use-cases/purchase-refund'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'
import { UserNotFoundError } from '@/domain/application/use-cases/errors/user-not-found-error'
import { makeTransaction } from '../../../../test/factories/make-transaction'
import { makeUser } from '../../../../test/factories/make-user'

let inMemoryTransactionRepository: InMemoryTransactionRepository
let inMemoryUserRepository: InMemoryUserRepository

let sut: PurchaseRefundUseCase

describe('purchase refund use case', () => {
  beforeEach(() => {
    inMemoryTransactionRepository = new InMemoryTransactionRepository()
    inMemoryUserRepository = new InMemoryUserRepository()

    sut = new PurchaseRefundUseCase(
      inMemoryTransactionRepository,
      inMemoryUserRepository,
    )
  })

  it('should not be able to refund a transaction if the transaction does not exist', async () => {
    const result = await sut.execute({
      transactionId: 'non-existing-transaction-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(TransactionNotFoundError)
  })

  it('should not be able to refund a transaction if the user does not exist', async () => {
    const transaction = makeTransaction()
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UserNotFoundError)
  })

  it('should be able to refund a transaction', async () => {
    const user = makeUser({
      blueEssence: 0,
      riotPoints: 0,
    })
    await inMemoryUserRepository.create(user)
    const transaction = makeTransaction({
      userId: user.userId,
      currency: 'BLUE_ESSENCE',
    })
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(user.blueEssence).toBe(transaction.amount)
  })
})
