import { Either, left, right } from '@/core/either'
import { TransactionRepository } from '../repositories/transaction-repository'
import { Transaction } from '@/domain/enterprise/entities/transaction'
import { ChampionRepository } from '../repositories/champion-repository'
import { ItemNotFoundError } from './errors/item-not-found-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { KafkaService } from '@/infra/messaging/kafka.service'

interface PurchaseChampionParams {
  userId: string
  championId: string
  currency: 'BLUE_ESSENCE' | 'RIOT_POINTS'
}

type PurchaseChampionResult = Either<ItemNotFoundError, null>

export class PurchaseChampionUseCase {
  constructor(
    private championRepository: ChampionRepository,
    private transactionRepository: TransactionRepository,
    private kafka: KafkaService,
  ) {}

  async execute({
    userId,
    championId,
    currency,
  }: PurchaseChampionParams): Promise<PurchaseChampionResult> {
    const champion = await this.championRepository.findByChampionId(championId)

    if (!champion) {
      return left(new ItemNotFoundError())
    }

    const transaction = Transaction.create({
      itemId: new UniqueEntityID(championId),
      userId: new UniqueEntityID(userId),
      type: 'CHAMPION',
      currency,
      amount:
        currency === 'BLUE_ESSENCE'
          ? champion.blueEssencePrice
          : champion.riotPointsPrice,
    })

    await this.transactionRepository.create(transaction)

    this.kafka.emit('purchase.created', {
      key: transaction.id,
      value: {
        userId,
        itemId: championId,
        type: 'CHAMPION',
        currency,
        amount: transaction.amount,
        transactionId: transaction.id.toString(),
      },
    })

    return right(null)
  }
}
