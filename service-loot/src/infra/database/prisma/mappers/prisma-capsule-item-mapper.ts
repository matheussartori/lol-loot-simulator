import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CapsuleItem as PrismaCapsuleItem } from '@prisma/client'
import { CapsuleItem } from '@/domain/enterprise/entities/capsule-item'

export class PrismaCapsuleItemMapper {
  static toDomain(raw: PrismaCapsuleItem): CapsuleItem {
    return CapsuleItem.create(
      {
        capsuleId: new UniqueEntityID(raw.capsuleId),
        itemId: new UniqueEntityID(raw.itemId),
        createdAt: raw.createdAt ?? new Date(),
        updatedAt: raw.updatedAt ?? new Date(),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(capsule: CapsuleItem): PrismaCapsuleItem {
    return {
      id: capsule.id.toString(),
      capsuleId: capsule.capsuleId.toString(),
      itemId: capsule.itemId.toString(),
      createdAt: capsule.createdAt ?? new Date(),
      updatedAt: capsule.updatedAt ?? new Date(),
    }
  }
}
