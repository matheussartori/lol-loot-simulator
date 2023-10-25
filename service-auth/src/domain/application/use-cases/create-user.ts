import { Either, left, right } from '@/core/either'
import { HashGenerator } from '../cryptography/hash-generator'
import { UserRepository } from '../repositories/user-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { User } from '@/domain/enterprise/entities/user'

interface CreateUserParams {
  username: string
  password: string
}

type CreateUserResult = Either<
  UserAlreadyExistsError,
  {
    user: User
  }
>

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashGenerator: HashGenerator,
  ) {}

  async execute({
    username,
    password,
  }: CreateUserParams): Promise<CreateUserResult> {
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

    return right({
      user,
    })
  }
}
