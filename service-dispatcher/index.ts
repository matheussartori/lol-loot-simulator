import { faker } from "@faker-js/faker";
import { Kafka } from "kafkajs";
import {randomUUID} from "crypto";
import {champions} from "./data/champions";

async function run() {
  const kafka = new Kafka({
    clientId: 'dispatcher',
    brokers: ['kafka:9092']
  })

  const producer = kafka.producer()

  try {
    await producer.connect();


    for (const champion of champions) {

      const response = await producer.send({
        topic: 'champion.created',
        messages: [
          {
            key: champion.name,
            value: JSON.stringify(champion),
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