import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { OpenCapsuleController } from './controllers/open-capsule.controller'
import { OpenCapsuleUseCase } from '@/domain/application/use-cases/open-capsule'
import { FetchUserItemsController } from './controllers/fetch-user-items.controller'
import { FetchUserItemsUseCase } from '@/domain/application/use-cases/fetch-user-items'
import { NestFetchUserItemsUseCase } from '../use-cases/nest-fetch-user-items'
import { NestOpenCapsuleUseCase } from '@/infra/use-cases/nest-open-capsule'

@Module({
  imports: [DatabaseModule],
  controllers: [OpenCapsuleController, FetchUserItemsController],
  providers: [
    {
      provide: OpenCapsuleUseCase,
      useClass: NestOpenCapsuleUseCase,
    },
    {
      provide: FetchUserItemsUseCase,
      useClass: NestFetchUserItemsUseCase,
    },
  ],
})
export class HttpModule {}
