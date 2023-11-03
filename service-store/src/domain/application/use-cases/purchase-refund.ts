import { Either, left, right } from '@/core/either'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { UserNotFoundError } from '@/domain/application/use-cases/errors/user-not-found-error'

interface PurchaseRefundUseCaseParams {
  transactionId: string
}

type PurchaseRefundUseCaseResult = Either<
  TransactionNotFoundError | UserNotFoundError,
  null
>

export class PurchaseRefundUseCase {
  constructor(
    private transactionRepository: TransactionRepository,
    private userRepository: UserRepository,
  ) {}

  async execute({
    transactionId,
  }: PurchaseRefundUseCaseParams): Promise<PurchaseRefundUseCaseResult> {
    const transaction = await this.transactionRepository.findById(transactionId)

    if (!transaction) {
      return left(new TransactionNotFoundError())
    }

    const user = await this.userRepository.findByUserId(
      transaction.userId.toString(),
    )

    if (!user) {
      return left(new UserNotFoundError())
    }

    transaction.status = 'REFUNDED'
    user.refundTransaction(transaction)

    await this.userRepository.save(user)
    await this.transactionRepository.save(transaction)

    return right(null)
  }
}
