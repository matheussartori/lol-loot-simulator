import { UserRepository } from '@/domain/application/repositories/user-repository'
import { CreateUserUseCase } from '@/domain/application/use-cases/create-user'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestCreateUserUseCase extends CreateUserUseCase {
  constructor(userRepository: UserRepository) {
    super(userRepository)
  }
}
