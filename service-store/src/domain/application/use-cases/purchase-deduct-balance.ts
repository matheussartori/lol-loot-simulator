import { Either, left, right } from '@/core/either'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { TransactionNotFoundError } from '@/domain/application/use-cases/errors/transaction-not-found-error'
import { UserNotFoundError } from '@/domain/application/use-cases/errors/user-not-found-error'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { InsufficientBalanceError } from '@/domain/application/use-cases/errors/insufficient-balance-error'
import { CorrelationID } from '@/core/entities/correlation-id'

interface PurchaseDeductBalanceUseCaseParams {
  userId: string
  itemId: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  transactionId: string
  correlationId: CorrelationID
}

type PurchaseDeductBalanceUseCaseResult = Either<
  UserNotFoundError | TransactionNotFoundError | InsufficientBalanceError,
  null
>

export class PurchaseDeductBalanceUseCase {
  constructor(
    private userRepository: UserRepository,
    private transactionRepository: TransactionRepository,
    private messageEmitter: MessageEmitter,
  ) {}

  async execute({
    userId,
    itemId,
    type,
    transactionId,
    correlationId,
  }: PurchaseDeductBalanceUseCaseParams): Promise<PurchaseDeductBalanceUseCaseResult> {
    const user = await this.userRepository.findByUserId(userId)

    if (!user) {
      return left(new UserNotFoundError())
    }

    const transaction = await this.transactionRepository.findById(transactionId)

    if (!transaction) {
      return left(new TransactionNotFoundError())
    }

    transaction.status = 'VALIDATED_INVENTORY'

    await this.transactionRepository.save(transaction)

    const isBalanceDeducted = user.applyTransaction(transaction)

    if (isBalanceDeducted) {
      transaction.status = 'VALIDATED_BALANCE'
      await this.transactionRepository.save(transaction)
      await this.userRepository.save(user)

      this.messageEmitter.emit('purchase.validated.balance', {
        key: transactionId,
        value: {
          userId,
          itemId,
          type,
          transactionId,
        },
        headers: {
          correlationId: correlationId.toString(),
        },
      })

      return right(null)
    } else {
      transaction.status = 'FAILED_BALANCE'
      await this.transactionRepository.save(transaction)
      return left(new InsufficientBalanceError())
    }
  }
}
