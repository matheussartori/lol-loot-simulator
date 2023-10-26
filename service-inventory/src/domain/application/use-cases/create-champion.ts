import { Either } from '@/core/either'

interface CreateChampionParams {
  championId: string
  userId: string
  releasedAt: Date
  purchasedAt?: Date
}

type CreateChampionResult = Either<null, null>

export class CreateChampionUseCase {
  constructor() {}

  async execute({
    championId,
    userId,
    releasedAt,
    purchasedAt,
  }: CreateChampionParams): Promise<CreateChampionResult> {}
}
