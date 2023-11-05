import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User } from '@/domain/enterprise/entities/user'
import { User as PrismaUser } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        userId: new UniqueEntityID(raw.userId),
        orangeEssence: raw.orangeEssence,
        mythicEssence: raw.mythicEssence,
        keys: raw.keys,
        createdAt: raw.createdAt ?? new Date(),
        updatedAt: raw.updatedAt ?? new Date(),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(user: User): PrismaUser {
    return {
      id: user.id.toString(),
      userId: user.userId.toString(),
      orangeEssence: user.orangeEssence,
      mythicEssence: user.mythicEssence,
      keys: user.keys,
      createdAt: user.createdAt ?? new Date(),
      updatedAt: user.updatedAt ?? new Date(),
    }
  }
}
