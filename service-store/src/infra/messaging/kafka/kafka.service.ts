import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { EnvService } from '../../env/env.service'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

@Injectable()
export class KafkaService
  extends ClientKafka
  implements OnModuleInit, OnModuleDestroy, MessageEmitter
{
  constructor(config: EnvService) {
    super({
      client: {
        clientId: 'store',
        brokers: [config.get('KAFKA_BROKERS')],
      },
      consumer: {
        groupId: 'store-consumer',
      },
      subscribe: {
        fromBeginning: true,
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