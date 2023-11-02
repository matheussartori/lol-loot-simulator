import { Either, left, right } from '@/core/either'
import { ChampionRepository } from '../repositories/champion-repository'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

interface ValidateOwnedChampionUseCaseParams {
  userId: string
  championId: string
  transactionId: string
}

type ValidateOwnedChampionUseCaseResult = Either<null, null>

export class ValidateOwnedChampionUseCase {
  constructor(
    private championRepository: ChampionRepository,
    private messageEmitter: MessageEmitter,
  ) {}

  async execute({
    userId,
    championId,
    transactionId,
  }: ValidateOwnedChampionUseCaseParams): Promise<ValidateOwnedChampionUseCaseResult> {
    const userHasOwnedItem =
      await this.championRepository.findByUserIdAndChampionId(
        userId,
        championId,
      )

    if (userHasOwnedItem) {
      this.messageEmitter.emit('purchase.failed.owned', {
        key: transactionId,
        value: {
          userId,
          itemId: championId,
          type: 'CHAMPION',
        },
      })

      return left(null)
    }

    this.messageEmitter.emit('purchase.validated.inventory', {
      key: transactionId,
      value: {
        userId,
        itemId: championId,
        type: 'CHAMPION',
      },
    })

    return right(null)
  }
}
