import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { randomUUID } from 'node:crypto'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(EnvService)
  const port = configService.get('PORT')

  app.enableCors()

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: `account-consumer-${randomUUID()}`,
        brokers: [configService.get('KAFKA_BROKERS')],
      },
      consumer: {
        groupId: 'account-consumer',
      },
      subscribe: {
        fromBeginning: true,
      },
    },
  })

  app.startAllMicroservices().then(() => {
    console.log('[Account] Microservice running!')
  })

  await app.listen(port).then(() => {
    console.log('[Account] HTTP server running!')
  })
}
bootstrap()
