import { Either, left, right } from '@/core/either'
import { UserRepository } from '../repositories/user-repository'
import { UserNotFoundError } from './errors/user-not-found'

interface CheckBalanceUseCaseParams {
  userId: string
  amount: number
  type: 'BLUE_ESSENCE' | 'RIOT_POINTS'
}

type CheckBalanceUseCaseResult = Either<
  UserNotFoundError,
  {
    hasBalance: boolean
  }
>

export class CheckBalanceUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
    amount,
    type,
  }: CheckBalanceUseCaseParams): Promise<CheckBalanceUseCaseResult> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      return left(new UserNotFoundError())
    }

    console.log({ user })

    switch (type) {
      case 'BLUE_ESSENCE':
        return right({
          hasBalance: user.blueEssence >= amount,
        })
      case 'RIOT_POINTS':
        return right({
          hasBalance: user.riotPoints >= amount,
        })
    }
  }
}
