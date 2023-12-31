import { Either, left, right } from '@/core/either'
import { HashGenerator } from '../cryptography/hash-generator'
import { UserRepository } from '../repositories/user-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { User } from '@/domain/enterprise/entities/user'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

interface CreateAccountParams {
  username: string
  password: string
}

type CreateAccountResult = Either<
  UserAlreadyExistsError,
  {
    user: User
  }
>

export class CreateAccountUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashGenerator: HashGenerator,
    private messageEmitter: MessageEmitter,
  ) {}

  async execute({
    username,
    password,
  }: CreateAccountParams): Promise<CreateAccountResult> {
    const userWithSameUsername =
      await this.userRepository.findByUsername(username)

    if (userWithSameUsername) {
      return left(new UserAlreadyExistsError(username))
    }

    const hashedPassword = await this.hashGenerator.hash(password)

    const user = User.create({
      username,
      password: hashedPassword,
    })

    await this.userRepository.create(user)

    this.messageEmitter.emit('user.created', {
      key: user.id.toString(),
      value: {
        userId: user.id.toString(),
      },
    })

    return right({
      user,
    })
  }
}
