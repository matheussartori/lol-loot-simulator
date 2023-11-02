import { MessageEmitter } from '@/domain/messaging/message-emitter'

export class FakeMessageEmitter implements MessageEmitter {
  emit(): void {}
}
