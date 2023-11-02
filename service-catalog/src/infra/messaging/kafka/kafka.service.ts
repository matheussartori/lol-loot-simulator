import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { EnvService } from '../../env/env.service'

@Injectable()
export class KafkaService
  extends ClientKafka
  implements OnModuleInit, OnModuleDestroy
{
  constructor(config: EnvService) {
    super({
      client: {
        clientId: 'catalog',
        brokers: [config.get('KAFKA_BROKERS')],
      },
      consumer: {
        groupId: 'catalog-consumer',
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
