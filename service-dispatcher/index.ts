import { Kafka } from "kafkajs";

async function run() {
  const kafka = new Kafka({
    clientId: 'dispatcher',
    brokers: ['kafka:9092']
  })
  
  const producer = kafka.producer()
  
  try {
    await producer.connect();
    const response = await producer.send({
      topic: 'champion.created',
      messages: [
        {
          key: 'Alistar',
          value: JSON.stringify({
            name: 'Alistar',
            blueEssencePrice: 1350,
            riotPointsPrice: 585,
            releasedAt: new Date('February 21, 2009'),
          })
        }
      ]
    });
    console.info(`Message sent successfully: ${JSON.stringify(response)}`)
  } catch (error) {
    console.error(`Error sending message: ${error}`)
  } finally {
    await producer.disconnect();
    console.info('Producer disconnected.')
  }
}

run()