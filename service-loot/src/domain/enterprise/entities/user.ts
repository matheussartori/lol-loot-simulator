import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface UserAttributes {
  userId: UniqueEntityID
  orangeEssence: number
  mythicEssence: number
  keys: number
  createdAt: Date
  updatedAt: Date
}

export class User extends Entity<UserAttributes> {
  get userId() {
    return this.attributes.userId
  }

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
    attributes: Optional<
      UserAttributes,
      'createdAt' | 'updatedAt' | 'mythicEssence' | 'orangeEssence' | 'keys'
    >,
    id?: UniqueEntityID,
  ) {
    const user = new User(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
        mythicEssence: attributes.mythicEssence ?? 0,
        orangeEssence: attributes.orangeEssence ?? 0,
        keys: attributes.keys ?? 0,
      },
      id,
    )

    return user
  }
}
