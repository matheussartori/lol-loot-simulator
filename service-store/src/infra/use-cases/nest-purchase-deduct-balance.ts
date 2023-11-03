import { PurchaseDeductBalanceUseCase } from '@/domain/application/use-cases/purchase-deduct-balance'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestPurchaseDeductBalanceUseCase extends PurchaseDeductBalanceUseCase {
  constructor(
    userRepository: UserRepository,
    transactionRepository: TransactionRepository,
    messageEmitter: MessageEmitter,
  ) {
    super(userRepository, transactionRepository, messageEmitter)
  }
}
