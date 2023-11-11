import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { EnvService } from '@/infra/env/env.service'
import { randomUUID } from 'node:crypto'

@Injectable()
export class KafkaService
  extends ClientKafka
  implements OnModuleInit, OnModuleDestroy, MessageEmitter
{
  constructor(config: EnvService) {
    super({
      client: {
        clientId: `account-producer-${randomUUID()}`,
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
