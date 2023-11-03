import { PurchaseFailedOwnedUseCase } from '@/domain/application/use-cases/purchase-failed-owned'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestPurchaseFailedOwnedUseCase extends PurchaseFailedOwnedUseCase {
  constructor(transactionRepository: TransactionRepository) {
    super(transactionRepository)
  }
}
