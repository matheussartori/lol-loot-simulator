import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(EnvService)
  const port = configService.get('PORT')

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'store',
        brokers: [configService.get('KAFKA_BROKERS')],
      },
      consumer: {
        groupId: 'store-consumer',
      },
      subscribe: {
        fromBeginning: true,
      },
    },
  })

  app.startAllMicroservices().then(() => {
    console.log('[Store] Microservice running!')
  })

  await app.listen(port).then(() => {
    console.log('[Store] HTTP server running!')
  })
}
bootstrap()
