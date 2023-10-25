import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface UserAttributes {
  username: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

export class User extends Entity<UserAttributes> {
  get username() {
    return this.attributes.username
  }

  get password() {
    return this.attributes.password
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
  }

  static create(attributes: UserAttributes, id?: UniqueEntityID) {
    const user = new User(
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        ...attributes,
      },
      id,
    )

    return user
  }
}
