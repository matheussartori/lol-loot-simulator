import { HashGenerator } from '@/domain/application/cryptography/hash-generator'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { CreateAccountUseCase } from '@/domain/application/use-cases/create-account'
import { Injectable } from '@nestjs/common'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

@Injectable()
export class NestCreateAccountUseCase extends CreateAccountUseCase {
  constructor(
    userRepository: UserRepository,
    hashGenerator: HashGenerator,
    messageEmitter: MessageEmitter,
  ) {
    super(userRepository, hashGenerator, messageEmitter)
  }
}
