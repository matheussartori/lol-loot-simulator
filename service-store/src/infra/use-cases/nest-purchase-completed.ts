import { PurchaseCompletedUseCase } from '@/domain/application/use-cases/purchase-completed'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestPurchaseCompletedUseCase extends PurchaseCompletedUseCase {
  constructor(transactionRepository: TransactionRepository) {
    super(transactionRepository)
  }
}
