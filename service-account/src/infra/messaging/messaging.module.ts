import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { KafkaService } from './kafka/kafka.service'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

@Module({
  imports: [],
  controllers: [],
  providers: [
    EnvService,
    {
      provide: MessageEmitter,
      useClass: KafkaService,
    },
  ],
  exports: [MessageEmitter],
})
export class MessagingModule {}
