import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka/kafka.service'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { CreateUserUseCase } from '@/domain/application/use-cases/create-user'
import { NestCreateUserUseCase } from '@/infra/use-cases/nest-create-user'
import { CreateUserController } from '@/infra/messaging/kafka/controllers/create-user.controller'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '@/infra/use-cases/nest-add-champion'
import { AddChampionController } from '@/infra/messaging/kafka/controllers/add-champion.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController, AddChampionController],
  providers: [
    EnvService,
    {
      provide: MessageEmitter,
      useClass: KafkaService,
    },
    {
      provide: CreateUserUseCase,
      useClass: NestCreateUserUseCase,
    },
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
  ],
  exports: [MessageEmitter],
})
export class MessagingModule {}
