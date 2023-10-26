import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface ChromaAttributes {
  skinId: UniqueEntityID
  name: string
  releasedAt: Date
}

export class Chroma extends Entity<ChromaAttributes> {
  get skinId() {
    return this.attributes.skinId
  }

  get name() {
    return this.attributes.name
  }

  get releasedAt() {
    return this.attributes.releasedAt
  }

  static create(attributes: ChromaAttributes, id?: UniqueEntityID) {
    const chroma = new Chroma(
      {
        ...attributes,
      },
      id,
    )

    return chroma
  }
}
