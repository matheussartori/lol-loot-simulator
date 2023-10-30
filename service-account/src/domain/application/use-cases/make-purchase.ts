import { Either, left, right } from '@/core/either'
import { UserRepository } from '../repositories/user-repository'
import { UserNotFoundError } from './errors/user-not-found'
import { InsufficientBalanceError } from './errors/insufficient-balance-error'
import { KafkaService } from '@/infra/messaging/kafka.service'

interface MakePurchaseUseCaseParams {
  userId: string
  amount: number
  currency: 'BLUE_ESSENCE' | 'RIOT_POINTS'
  itemId: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  transactionId: string
}

type MakePurchaseUseCaseResult = Either<
  UserNotFoundError | InsufficientBalanceError,
  null
>

export class MakePurchaseUseCase {
  constructor(
    private userRepository: UserRepository,
    private kafka: KafkaService,
  ) {}

  async execute({
    userId,
    amount,
    currency,
    itemId,
    type,
    transactionId,
  }: MakePurchaseUseCaseParams): Promise<MakePurchaseUseCaseResult> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      return left(new UserNotFoundError())
    }

    switch (currency) {
      case 'BLUE_ESSENCE':
        if (user.blueEssence >= amount) {
          user.removeBlueEssence(amount)
        } else {
          return left(new InsufficientBalanceError())
        }
        break
      case 'RIOT_POINTS':
        if (user.riotPoints >= amount) {
          user.removeRiotPoints(amount)
        } else {
          return left(new InsufficientBalanceError())
        }
    }

    await this.userRepository.save(user)

    this.kafka.emit('purchase.completed', {
      key: transactionId,
      value: {
        userId: user.id.toString(),
        itemId,
        type,
        transactionId,
      },
    })

    return right(null)
  }
}
