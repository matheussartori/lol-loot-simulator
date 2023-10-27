import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { FetchChampionsController } from './controllers/fetch-champions.controller'
import { FetchChampionsUseCase } from '@/domain/application/use-cases/fetch-champions'
import { NestFetchChampionsUseCase } from '../use-cases/nest-fetch-champions'

@Module({
  imports: [DatabaseModule],
  controllers: [FetchChampionsController],
  providers: [
    {
      provide: FetchChampionsUseCase,
      useClass: NestFetchChampionsUseCase,
    },
  ],
})
export class HttpModule {}
