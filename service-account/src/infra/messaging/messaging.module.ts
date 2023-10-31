import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka.service'

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [EnvService, KafkaService],
  exports: [KafkaService],
})
export class MessagingModule {}
