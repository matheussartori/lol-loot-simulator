import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka/kafka.service'
import { AddChampionController } from '@/infra/messaging/kafka/controllers/add-champion.controller'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '../use-cases/nest-add-champion'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

@Module({
  imports: [DatabaseModule],
  controllers: [AddChampionController],
  providers: [
    EnvService,
    {
      provide: MessageEmitter,
      useClass: KafkaService,
    },
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
  ],
  exports: [MessageEmitter],
})
export class MessagingModule {}
