import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { FetchChampionsController } from './controllers/fetch-champions.controller'
import { FetchChampionsUseCase } from '@/domain/application/use-cases/fetch-champions'
import { NestFetchChampionsUseCase } from '../use-cases/nest-fetch-champions'
import { PurchaseChampionUseCase } from '@/domain/application/use-cases/purchase-champion'
import { NestPurchaseChampionUseCase } from '../use-cases/nest-purchase-champion'
import { PurchaseChampionController } from './controllers/purchase-champion.controller'
import { MessagingModule } from '../messaging/messaging.module'
import { EnvModule } from '../env/env.module'

@Module({
  imports: [DatabaseModule, MessagingModule, EnvModule],
  controllers: [FetchChampionsController, PurchaseChampionController],
  providers: [
    {
      provide: FetchChampionsUseCase,
      useClass: NestFetchChampionsUseCase,
    },
    {
      provide: PurchaseChampionUseCase,
      useClass: NestPurchaseChampionUseCase,
    },
  ],
})
export class HttpModule {}
