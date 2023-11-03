import { Either, left, right } from '@/core/either'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'

interface PurchaseFailedOwnedUseCaseParams {
  transactionId: string
}

type PurchaseFailedOwnedUseCaseResult = Either<TransactionNotFoundError, null>

export class PurchaseFailedOwnedUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute({
    transactionId,
  }: PurchaseFailedOwnedUseCaseParams): Promise<PurchaseFailedOwnedUseCaseResult> {
    const transaction = await this.transactionRepository.findById(transactionId)

    if (!transaction) {
      return left(new TransactionNotFoundError())
    }

    transaction.status = 'FAILED_OWNED'

    await this.transactionRepository.save(transaction)

    return right(null)
  }
}
