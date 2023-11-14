import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { UserItem } from '@/domain/enterprise/entities/user-item'
import { UserItem as PrismaUserItem } from '@prisma/client'

export class PrismaUserItemMapper {
  static toDomain(raw: PrismaUserItem): UserItem {
    return UserItem.create(
      {
        userId: new UniqueEntityID(raw.userId),
        itemId: new UniqueEntityID(raw.itemId),
        userCapsuleId: raw.userCapsuleId
          ? new UniqueEntityID(raw.userCapsuleId)
          : null,
        createdAt: raw.createdAt ?? new Date(),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(userItem: UserItem): PrismaUserItem {
    return {
      id: userItem.id.toString(),
      userId: userItem.userId.toString(),
      itemId: userItem.itemId.toString(),
      userCapsuleId: userItem.userCapsuleId
        ? userItem.userCapsuleId.toString()
        : null,
      createdAt: userItem.createdAt ?? new Date(),
    }
  }
}
