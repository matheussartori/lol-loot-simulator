import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export type UserItemType = 'CHAMPION_FRAGMENT'

export interface UserItemAttributes {
  userId: UniqueEntityID
  itemId: UniqueEntityID
  type: UserItemType
  userCapsuleId?: UniqueEntityID
  createdAt: Date
}

export class UserItem extends Entity<UserItemAttributes> {
  get userId() {
    return this.attributes.userId
  }

  get itemId() {
    return this.attributes.itemId
  }

  get type() {
    return this.attributes.type
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
