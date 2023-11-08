interface Message {
  key: string
  value: object
  headers?: object
}

export abstract class MessageEmitter {
  abstract emit(topic: string, message: Message): void
}
