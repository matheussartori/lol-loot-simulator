import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { PurchaseChampionUseCase } from '@/domain/application/use-cases/purchase-champion'
import { Injectable } from '@nestjs/common'
import { KafkaService } from '../messaging/kafka.service'

@Injectable()
export class NestPurchaseChampionUseCase extends PurchaseChampionUseCase {
  constructor(
    championRepository: ChampionRepository,
    transactionRepository: TransactionRepository,
    kafka: KafkaService,
  ) {
    super(championRepository, transactionRepository, kafka)
  }
}
