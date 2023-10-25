import { Encrypter } from '@/domain/application/cryptography/encrypter'
import { HashComparer } from '@/domain/application/cryptography/hash-comparer'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { AuthenticateUseCase } from '@/domain/application/use-cases/authenticate'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestAuthenticateUseCase extends AuthenticateUseCase {
  constructor(
    userRepository: UserRepository,
    hashComparer: HashComparer,
    encrypter: Encrypter,
  ) {
    super(userRepository, hashComparer, encrypter)
  }
}
