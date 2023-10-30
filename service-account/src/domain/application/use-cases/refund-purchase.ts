import { Either, left, right } from '@/core/either'
import { UserRepository } from '../repositories/user-repository'
import { UserNotFoundError } from './errors/user-not-found'

interface RefundPurchaseUseCaseParams {
  userId: string
  amount: number
  currency: 'BLUE_ESSENCE' | 'RIOT_POINTS'
}

type RefundPurchaseUseCaseResult = Either<UserNotFoundError, null>

export class RefundPurchaseUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
    amount,
    currency,
  }: RefundPurchaseUseCaseParams): Promise<RefundPurchaseUseCaseResult> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      return left(new UserNotFoundError())
    }

    switch (currency) {
      case 'BLUE_ESSENCE':
        user.addBlueEssence(amount)
        break
      case 'RIOT_POINTS':
        user.addRiotPoints(amount)
        break
    }

    await this.userRepository.save(user)

    return right(null)
  }
}
