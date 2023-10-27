import { Either, right } from '@/core/either'
import { ChampionRepository } from '../repositories/champion-repository'

interface PurchaseChampionParams {
  userId: string
  championId: string
}

type PurchaseChampionResult = Either<null, null>

export class PurchaseChampion {
  constructor(private championRepository: ChampionRepository) {}

  async execute({
    userId,
    championId,
  }: PurchaseChampionParams): Promise<PurchaseChampionResult> {
    console.log({ userId, championId })

    return right(null)
  }
}
