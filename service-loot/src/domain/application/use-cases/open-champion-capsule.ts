import { Either, left, right } from '@/core/either'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { UserNotFoundError } from '@/domain/application/use-cases/errors/user-not-found-error'
import { CapsuleRepository } from '@/domain/application/repositories/capsule-repository'
import { CapsuleNotFoundError } from '@/domain/application/use-cases/errors/capsule-not-found-error'
import { WrongCapsuleTypeError } from '@/domain/application/use-cases/errors/wrong-capsule-type-error'

interface OpenChampionCapsuleUseCaseParams {
  capsuleId: string
  userId: string
}

type OpenChampionCapsuleUseCaseResult = Either<
  UserNotFoundError | CapsuleNotFoundError | WrongCapsuleTypeError,
  null
>

export class OpenChampionCapsuleUseCase {
  constructor(
    private userRepository: UserRepository,
    private capsuleRepository: CapsuleRepository,
  ) {}

  async execute({
    userId,
    capsuleId,
  }: OpenChampionCapsuleUseCaseParams): Promise<OpenChampionCapsuleUseCaseResult> {
    const user = await this.userRepository.findByUserId(userId)

    if (!user) {
      return left(new UserNotFoundError())
    }

    const capsule = await this.capsuleRepository.findById(capsuleId)

    if (!capsule) {
      return left(new CapsuleNotFoundError())
    }

    if (capsule.type !== 'CHAMPION_CAPSULE') {
      return left(new WrongCapsuleTypeError())
    }

    // const championItems = await this.championRepository.findMany()
    // const championCapsule = ChampionCapsule.create()
    // const champions = championCapsule.open(championItems)

    return right(null)
  }
}
