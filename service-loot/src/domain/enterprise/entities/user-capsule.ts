import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface UserCapsuleAttributes {
  userId: UniqueEntityID
  capsuleId: UniqueEntityID
  openedAt: Date | null
  createdAt: Date
}

export class UserCapsule extends Entity<UserCapsuleAttributes> {
  get userId() {
    return this.attributes.userId
  }

  get capsuleId() {
    return this.attributes.capsuleId
  }

  get openedAt() {
    return this.attributes.openedAt
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  static create(
    attributes: Optional<UserCapsuleAttributes, 'createdAt' | 'openedAt'>,
    id?: UniqueEntityID,
  ) {
    const userCapsule = new UserCapsule(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        openedAt: attributes.openedAt ?? null,
      },
      id,
    )

    return userCapsule
  }
}
