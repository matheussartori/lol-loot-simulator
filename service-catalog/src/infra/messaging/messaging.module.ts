import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { ChampionCreatedController } from './controllers/champion-created.controller'
import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { NestCreateChampionUseCase } from '../use-cases/nest-create-champion'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ChampionCreatedController],
  providers: [
    EnvService,
    {
      provide: CreateChampionUseCase,
      useClass: NestCreateChampionUseCase,
    },
  ],
})
export class MessagingModule {}
