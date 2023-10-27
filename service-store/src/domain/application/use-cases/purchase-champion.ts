import { Either, left, right } from '@/core/either'
import { TransactionRepository } from '../repositories/transaction-repository'
import { Transaction } from '@/domain/enterprise/entities/transaction'
import { ChampionRepository } from '../repositories/champion-repository'
import { ItemNotFoundError } from './errors/item-not-found-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

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

    return right(null)
  }
}
