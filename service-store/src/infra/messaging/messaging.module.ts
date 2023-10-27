import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { ChampionCreatedController } from './controllers/champion-created.controller'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '../use-cases/nest-add-champion'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ChampionCreatedController],
  providers: [
    EnvService,
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
  ],
})
export class MessagingModule {}
