import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { FetchOwnedChampionsController } from './controllers/fetch-owned-champions.controller'
import { FetchOwnedChampionsUseCase } from '@/domain/application/use-cases/fetch-owned-champions'
import { NestFetchOwnedChampionsUseCase } from '../use-cases/nest-fetch-owned-champions'

@Module({
  imports: [DatabaseModule],
  controllers: [FetchOwnedChampionsController],
  providers: [
    {
      provide: FetchOwnedChampionsUseCase,
      useClass: NestFetchOwnedChampionsUseCase,
    },
  ],
})
export class HttpModule {}
