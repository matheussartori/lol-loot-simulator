import { PurchaseRefundUseCase } from '@/domain/application/use-cases/purchase-refund'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestPurchaseRefundUseCase extends PurchaseRefundUseCase {
  constructor(
    transactionRepository: TransactionRepository,
    userRepository: UserRepository,
  ) {
    super(transactionRepository, userRepository)
  }
}
