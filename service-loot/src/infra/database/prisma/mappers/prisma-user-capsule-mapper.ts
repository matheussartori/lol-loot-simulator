import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserCapsule } from '@/domain/enterprise/entities/user-capsule'
import { UserCapsule as PrismaUserCapsule } from '@prisma/client'

export class PrismaUserCapsuleMapper {
  static toDomain(raw: PrismaUserCapsule): UserCapsule {
    return UserCapsule.create(
      {
        userId: new UniqueEntityID(raw.userId),
        capsuleId: new UniqueEntityID(raw.capsuleId),
        openedAt: raw.openedAt,
        createdAt: raw.createdAt ?? new Date(),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(userCapsule: UserCapsule): PrismaUserCapsule {
    return {
      id: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
      capsuleId: userCapsule.capsuleId.toString(),
      openedAt: userCapsule.openedAt,
      createdAt: userCapsule.createdAt ?? new Date(),
    }
  }
}
