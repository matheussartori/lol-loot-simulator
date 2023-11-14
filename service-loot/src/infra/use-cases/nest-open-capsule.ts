import { OpenCapsuleUseCase } from '@/domain/application/use-cases/open-capsule'
import { Injectable } from '@nestjs/common'
import { UserCapsuleRepository } from '@/domain/application/repositories/user-capsule-repository'
import { CapsuleRepository } from '@/domain/application/repositories/capsule-repository'
import { UserItemRepository } from '@/domain/application/repositories/user-item-repository'
import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'
import { CapsuleOddRepository } from '@/domain/application/repositories/capsule-odd-repository'

@Injectable()
export class NestOpenCapsuleUseCase extends OpenCapsuleUseCase {
  constructor(
    userCapsuleRepository: UserCapsuleRepository,
    capsuleRepository: CapsuleRepository,
    capsuleItemRepository: CapsuleItemRepository,
    userItemRepository: UserItemRepository,
    capsuleOddRepository: CapsuleOddRepository,
  ) {
    super(
      userCapsuleRepository,
      capsuleRepository,
      capsuleItemRepository,
      userItemRepository,
      capsuleOddRepository,
    )
  }
}
