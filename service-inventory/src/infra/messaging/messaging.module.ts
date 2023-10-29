import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka.service'
import { AddChampionController } from './controllers/add-champion.controller'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '../use-cases/nest-add-champion'

@Module({
  imports: [DatabaseModule],
  controllers: [AddChampionController],
  providers: [
    EnvService,
    KafkaService,
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
  ],
  exports: [KafkaService],
})
export class MessagingModule {}
