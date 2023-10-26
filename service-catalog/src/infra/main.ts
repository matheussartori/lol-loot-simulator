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
        clientId: 'catalog',
        brokers: [configService.get('KAFKA_BROKERS')],
      },
      consumer: {
        groupId: 'catalog-consumer',
      },
      subscribe: {
        fromBeginning: true,
      },
    },
  })

  app.startAllMicroservices().then(() => {
    console.log('[Catalog] Microservice running!')
  })

  await app.listen(port).then(() => {
    console.log('[Catalog] HTTP server running!')
  })
}
bootstrap()
