import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User } from '@/domain/enterprise/entities/user'
import { User as PrismaUser } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        username: raw.username,
        password: raw.password,
        createdAt: raw.createdAt ?? undefined,
        updatedAt: raw.updatedAt ?? undefined,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(user: User): PrismaUser {
    return {
      id: user.id.toString(),
      username: user.username,
      password: user.password,
      createdAt: user.createdAt ?? null,
      updatedAt: user.updatedAt ?? null,
    }
  }
}
