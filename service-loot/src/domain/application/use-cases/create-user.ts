import { Either, left, right } from '@/core/either'
import { UserRepository } from '../repositories/user-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { User } from '@/domain/enterprise/entities/user'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface CreateUserUseCaseParams {
  userId: string
}

type CreateUserUseCaseResult = Either<UserAlreadyExistsError, null>

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
  }: CreateUserUseCaseParams): Promise<CreateUserUseCaseResult> {
    const userExists = await this.userRepository.findByUserId(userId)

    if (userExists) {
      return left(new UserAlreadyExistsError())
    }

    const user = User.create({
      userId: new UniqueEntityID(userId),
    })

    await this.userRepository.create(user)

    return right(null)
  }
}
