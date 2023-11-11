import { faker } from "@faker-js/faker";
import { Kafka } from "kafkajs";
import {randomUUID} from "crypto";

async function run() {
  const kafka = new Kafka({
    clientId: 'dispatcher',
    brokers: ['kafka:9092']
  })

  const producer = kafka.producer()

  try {
    await producer.connect();


    for (let i = 0; i < 3; i++) {
      const championName = faker.word.words({ count: { min: 1, max: 2 } })

      const response = await producer.send({
        topic: 'champion.created',
        messages: [
          {
            key: championName,
            value: JSON.stringify({
              name: championName,
              rarityTier: 'STANDARD',
              releasedAt: new Date('February 21, 2009'),
              images: {
                portrait: '/champions/alistar/default_portrait.webp',
                splash: '/champions/alistar/default_splash.webp',
                loading: '/champions/alistar/default_loading.webp'
              }
            }),
            headers: {
              correlationId: `ServiceDispatcherRun(${randomUUID()})`
            }
          }
        ]
      });
      console.info(`Message sent successfully: ${JSON.stringify(response)}`)
    }
  } catch (error) {
    console.error(`Error sending message: ${error}`)
  } finally {
    await producer.disconnect();
    console.info('Producer disconnected.')
  }
}

run()