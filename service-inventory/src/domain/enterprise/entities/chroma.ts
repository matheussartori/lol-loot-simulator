import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface ChromaAttributes {
  chromaId: UniqueEntityID
  userId: UniqueEntityID
  skinId: UniqueEntityID
  releasedAt: Date
  purchasedAt?: Date
}

export class Chroma extends Entity<ChromaAttributes> {
  static create(attributes: ChromaAttributes, id?: UniqueEntityID) {
    const chroma = new Chroma(
      {
        purchasedAt: new Date(),
        ...attributes,
      },
      id,
    )

    return chroma
  }
}
