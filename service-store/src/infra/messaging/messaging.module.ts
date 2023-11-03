import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '../use-cases/nest-add-champion'
import { DatabaseModule } from '../database/database.module'
import { ChampionAddedController } from './kafka/controllers/champion-added.controller'
import { KafkaService } from './kafka/kafka.service'
import { CreateUserController } from './kafka/controllers/create-user.controller'
import { CreateUserUseCase } from '@/domain/application/use-cases/create-user'
import { NestCreateUserUseCase } from '../use-cases/nest-create-user'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { PurchaseDeductBalanceUseCase } from '@/domain/application/use-cases/purchase-deduct-balance'
import { NestPurchaseDeductBalanceUseCase } from '@/infra/use-cases/nest-purchase-deduct-balance'
import { PurchaseDeductBalanceController } from '@/infra/messaging/kafka/controllers/purchase-deduct-balance.controller'
import { PurchaseFailedOwnedUseCase } from '@/domain/application/use-cases/purchase-failed-owned'
import { NestPurchaseFailedOwnedUseCase } from '@/infra/use-cases/nest-purchase-failed-owned'
import { PurchaseRefundUseCase } from '@/domain/application/use-cases/purchase-refund'
import { NestPurchaseRefundUseCase } from '@/infra/use-cases/nest-purchase-refund'
import { PurchaseRefundController } from '@/infra/messaging/kafka/controllers/purchase-refund.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [
    ChampionAddedController,
    CreateUserController,
    PurchaseDeductBalanceController,
    PurchaseRefundController,
  ],
  providers: [
    EnvService,
    {
      provide: MessageEmitter,
      useClass: KafkaService,
    },
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
    {
      provide: CreateUserUseCase,
      useClass: NestCreateUserUseCase,
    },
    {
      provide: PurchaseDeductBalanceUseCase,
      useClass: NestPurchaseDeductBalanceUseCase,
    },
    {
      provide: PurchaseFailedOwnedUseCase,
      useClass: NestPurchaseFailedOwnedUseCase,
    },
    {
      provide: PurchaseRefundUseCase,
      useClass: NestPurchaseRefundUseCase,
    },
  ],
  exports: [MessageEmitter],
})
export class MessagingModule {}
