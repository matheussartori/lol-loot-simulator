import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { ChampionCreatedController } from '@/infra/messaging/kafka/controllers/champion-created.controller'
import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { NestCreateChampionUseCase } from '../use-cases/nest-create-champion'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka/kafka.service'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

@Module({
  imports: [DatabaseModule],
  controllers: [ChampionCreatedController],
  providers: [
    EnvService,
    {
      provide: MessageEmitter,
      useClass: KafkaService,
    },
    {
      provide: CreateChampionUseCase,
      useClass: NestCreateChampionUseCase,
    },
  ],
  exports: [MessageEmitter],
})
export class MessagingModule {}
