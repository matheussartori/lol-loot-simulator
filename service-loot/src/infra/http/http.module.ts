import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { OpenChampionCapsuleController } from './controllers/open-champion-capsule.controller'
import { OpenCapsuleUseCase } from '@/domain/application/use-cases/open-capsule'
import { NestOpenChampionCapsuleUseCase } from '../use-cases/nest-open-champion-capsule'
import { FetchUserItemsController } from './controllers/fetch-user-items.controller'
import { FetchUserItemsUseCase } from '@/domain/application/use-cases/fetch-user-items'
import { NestFetchUserItemsUseCase } from '../use-cases/nest-fetch-user-items'

@Module({
  imports: [DatabaseModule],
  controllers: [OpenChampionCapsuleController, FetchUserItemsController],
  providers: [
    {
      provide: OpenCapsuleUseCase,
      useClass: NestOpenChampionCapsuleUseCase,
    },
    {
      provide: FetchUserItemsUseCase,
      useClass: NestFetchUserItemsUseCase,
    },
  ],
})
export class HttpModule {}
