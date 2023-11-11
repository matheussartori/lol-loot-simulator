import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { randomUUID } from 'node:crypto'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(EnvService)
  const port = configService.get('PORT')

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: `inventory-consumer-${randomUUID()}`,
        brokers: [configService.get('KAFKA_BROKERS')],
      },
      consumer: {
        groupId: 'inventory-consumer',
      },
      subscribe: {
        fromBeginning: true,
      },
    },
  })

  app.startAllMicroservices().then(() => {
    console.log('[Inventory] Microservice running!')
  })

  await app.listen(port).then(() => {
    console.log('[Inventory] HTTP server running!')
  })
}
bootstrap()
