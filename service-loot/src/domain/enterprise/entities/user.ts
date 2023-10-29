import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface UserAttributes {
  userId: UniqueEntityID
  orangeEssence: number
  mythicEssence: number
  keys: number
  createdAt?: Date
  updatedAt?: Date
}

export class User extends Entity<UserAttributes> {
  get orangeEssence() {
    return this.attributes.orangeEssence
  }

  get mythicEssence() {
    return this.attributes.mythicEssence
  }

  get keys() {
    return this.attributes.keys
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
  }

  static create(
    attributes: Optional<UserAttributes, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const user = new User(
      {
        ...attributes,
      },
      id,
    )

    return user
  }
}
