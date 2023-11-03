import { InMemoryTransactionRepository } from '../../../../test/repositories/in-memory-transaction-repository'
import { PurchaseFailedOwnedUseCase } from '@/domain/application/use-cases/purchase-failed-owned'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'
import { makeTransaction } from '../../../../test/factories/make-transaction'

let inMemoryTransactionRepository: InMemoryTransactionRepository

let sut: PurchaseFailedOwnedUseCase

describe('purchase failed owned use case', () => {
  beforeEach(() => {
    inMemoryTransactionRepository = new InMemoryTransactionRepository()

    sut = new PurchaseFailedOwnedUseCase(inMemoryTransactionRepository)
  })

  it('should not be able to update a transaction if it does not exist', async () => {
    const result = await sut.execute({
      transactionId: 'non-existing-transaction-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(TransactionNotFoundError)
  })

  it('should be able to update the transaction as failed (user already own that item)', async () => {
    const transaction = makeTransaction()
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
    })

    expect(result.isRight()).toBe(true)
  })
})
