import { Either, left, right } from '@/core/either'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'

interface PurchaseCompletedUseCaseParams {
  transactionId: string
}

type PurchaseCompletedUseCaseResult = Either<TransactionNotFoundError, null>

export class PurchaseCompletedUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute({
    transactionId,
  }: PurchaseCompletedUseCaseParams): Promise<PurchaseCompletedUseCaseResult> {
    const transaction = await this.transactionRepository.findById(transactionId)

    if (!transaction) {
      return left(new TransactionNotFoundError())
    }

    transaction.setAsCompleted()

    await this.transactionRepository.save(transaction)

    return right(null)
  }
}
