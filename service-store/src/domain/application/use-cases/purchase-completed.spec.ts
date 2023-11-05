import { InMemoryTransactionRepository } from '../../../../test/repositories/in-memory-transaction-repository'
import { PurchaseCompletedUseCase } from '@/domain/application/use-cases/purchase-completed'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'
import { makeTransaction } from '../../../../test/factories/make-transaction'

let inMemoryTransactionRepository: InMemoryTransactionRepository

let sut: PurchaseCompletedUseCase

describe('purchase completed use case', () => {
  beforeEach(() => {
    inMemoryTransactionRepository = new InMemoryTransactionRepository()

    sut = new PurchaseCompletedUseCase(inMemoryTransactionRepository)
  })

  it('should not be able to complete a non-existent transaction', async () => {
    const result = await sut.execute({
      transactionId: 'non-existent-transaction-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(TransactionNotFoundError)
  })

  it('should be able to complete a transaction', async () => {
    const transaction = makeTransaction()
    await inMemoryTransactionRepository.create(transaction)

    const result = await sut.execute({
      transactionId: transaction.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(transaction.status).toBe('COMPLETED')
    expect(transaction.finishedAt).toBeTruthy()
  })
})
