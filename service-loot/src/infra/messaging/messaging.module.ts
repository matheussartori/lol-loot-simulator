import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka/kafka.service'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { CreateUserUseCase } from '@/domain/application/use-cases/create-user'
import { NestCreateUserUseCase } from '@/infra/use-cases/nest-create-user'
import { CreateUserController } from '@/infra/messaging/kafka/controllers/create-user.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController],
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
  ],
  exports: [MessageEmitter],
})
export class MessagingModule {}
