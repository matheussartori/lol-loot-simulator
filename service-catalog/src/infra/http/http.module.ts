import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { FetchCatalogController } from './controllers/fetch-catalog.controller'
import { MessagingModule } from '../messaging/messaging.module'
import { EnvModule } from '../env/env.module'
import { FetchCatalogUseCase } from '@/domain/application/use-cases/fetch-catalog'
import { NestFetchCatalogUseCase } from '@/infra/use-cases/nest-fetch-catalog'

@Module({
  imports: [DatabaseModule, MessagingModule, EnvModule],
  controllers: [FetchCatalogController],
  providers: [
    {
      provide: FetchCatalogUseCase,
      useClass: NestFetchCatalogUseCase,
    },
  ],
})
export class HttpModule {}
