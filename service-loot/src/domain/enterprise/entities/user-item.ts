import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface UserItemAttributes {
  userId: UniqueEntityID
  itemId: UniqueEntityID
  userCapsuleId: UniqueEntityID | null
  createdAt: Date
}

export class UserItem extends Entity<UserItemAttributes> {
  get userId() {
    return this.attributes.userId
  }

  get itemId() {
    return this.attributes.itemId
  }

  get userCapsuleId() {
    return this.attributes.userCapsuleId
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  static create(
    attributes: Optional<UserItemAttributes, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const useritem = new UserItem(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
      },
      id,
    )

    return useritem
  }
}
