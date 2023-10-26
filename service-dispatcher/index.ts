import { Kafka } from "kafkajs";

async function run() {
  const kafka = new Kafka({
    clientId: 'dispatcher',
    brokers: ['localhost:9092']
  })
  
  const producer = kafka.producer()
  
  await producer.connect()
  await producer.send({
    topic: 'champion.created',
    messages: [
      {
        key: 'Alistar',
        value: JSON.stringify({
          name: 'Alistar',
          releasedAt: new Date('February 21, 2009')
        })
      }
    ]
  })
}

run()