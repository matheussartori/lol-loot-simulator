import { Module } from '@nestjs/common'
import { KafkaService } from './kafka.service'
import { EnvService } from '../env/env.service'

@Module({
  imports: [],
  providers: [EnvService, KafkaService],
  exports: [KafkaService],
})
export class MessagingModule {}
