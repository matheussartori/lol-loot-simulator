import { Either, left, right } from '@/core/either'
import { ChampionRepository } from '../repositories/champion-repository'
import { ChampionAlreadyOwnedError } from './errors/champion-already-owned-error'
import { Champion } from '@/domain/enterprise/entities/champion'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { CorrelationID } from '@/core/entities/correlation-id'

interface AddChampionParams {
  championId: string
  userId: string
  releasedAt: Date
  purchasedAt: Date
  transactionId: string
  correlationId: CorrelationID
}

type AddChampionResult = Either<ChampionAlreadyOwnedError, null>

export class AddChampionUseCase {
  constructor(
    private championRepository: ChampionRepository,
    private messageEmitter: MessageEmitter,
  ) {}

  async execute({
    championId,
    userId,
    releasedAt,
    purchasedAt,
    transactionId,
    correlationId,
  }: AddChampionParams): Promise<AddChampionResult> {
    const championAlreadyExists =
      await this.championRepository.findByUserIdAndChampionId(
        userId,
        championId,
      )

    if (championAlreadyExists) {
      this.messageEmitter.emit('purchase.refund', {
        key: transactionId,
        value: {
          transactionId,
        },
        headers: {
          correlationId: correlationId.toString(),
        },
      })
      return left(new ChampionAlreadyOwnedError())
    }

    const champion = Champion.create({
      championId: new UniqueEntityID(championId),
      userId: new UniqueEntityID(userId),
      releasedAt,
      purchasedAt,
    })

    await this.championRepository.create(champion)

    this.messageEmitter.emit('purchase.completed', {
      key: transactionId,
      value: {
        transactionId,
      },
      headers: {
        correlationId: correlationId.toString(),
      },
    })

    return right(null)
  }
}
