import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { EnvService } from '../../env/env.service'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { randomUUID } from 'node:crypto'

@Injectable()
export class KafkaService
  extends ClientKafka
  implements OnModuleInit, OnModuleDestroy, MessageEmitter
{
  constructor(config: EnvService) {
    super({
      client: {
        clientId: `store-producer-${randomUUID()}`,
        brokers: [config.get('KAFKA_BROKERS')],
      },
    })
  }

  async onModuleInit() {
    await this.connect()
  }

  async onModuleDestroy() {
    await this.close()
  }
}
