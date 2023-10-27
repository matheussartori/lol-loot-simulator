import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { PurchaseChampionUseCase } from '@/domain/application/use-cases/purchase-champion'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestPurchaseChampionUseCase extends PurchaseChampionUseCase {
  constructor(
    championRepository: ChampionRepository,
    transactionRepository: TransactionRepository,
  ) {
    super(championRepository, transactionRepository)
  }
}
