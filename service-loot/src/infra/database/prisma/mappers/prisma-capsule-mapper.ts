import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Capsule } from '@/domain/enterprise/entities/capsule'
import { Capsule as PrismaCapsule } from '@prisma/client'

export class PrismaCapsuleMapper {
  static toDomain(raw: PrismaCapsule): Capsule {
    return Capsule.create(
      {
        name: raw.name,
        type: raw.type,
        requiresKey: raw.requiresKey,
        createdAt: raw.createdAt ?? new Date(),
        updatedAt: raw.updatedAt ?? new Date(),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(capsule: Capsule): PrismaCapsule {
    return {
      id: capsule.id.toString(),
      name: capsule.name,
      type: capsule.type,
      requiresKey: capsule.requiresKey,
      createdAt: capsule.createdAt ?? new Date(),
      updatedAt: capsule.updatedAt ?? new Date(),
    }
  }
}
