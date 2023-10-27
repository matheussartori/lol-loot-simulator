import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '../use-cases/nest-add-champion'
import { DatabaseModule } from '../database/database.module'
import { ChampionAddedController } from './controllers/champion-added.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [ChampionAddedController],
  providers: [
    EnvService,
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
  ],
})
export class MessagingModule {}
