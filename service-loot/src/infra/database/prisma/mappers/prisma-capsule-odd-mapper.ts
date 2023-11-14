import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CapsuleOdd as PrismaCapsuleOdd } from '@prisma/client'
import { CapsuleOdd } from '@/domain/enterprise/entities/capsule-odd'

export class PrismaCapsuleOddMapper {
  static toDomain(raw: PrismaCapsuleOdd): CapsuleOdd {
    return CapsuleOdd.create(
      {
        capsuleId: new UniqueEntityID(raw.capsuleId),
        rarityTier: raw.rarityTier,
        odd: raw.odd,
        createdAt: raw.createdAt ?? new Date(),
        updatedAt: raw.updatedAt ?? new Date(),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(capsule: CapsuleOdd): PrismaCapsuleOdd {
    return {
      id: capsule.id.toString(),
      capsuleId: capsule.capsuleId.toString(),
      rarityTier: capsule.rarityTier,
      odd: capsule.odd,
      createdAt: capsule.createdAt ?? new Date(),
      updatedAt: capsule.updatedAt ?? new Date(),
    }
  }
}
