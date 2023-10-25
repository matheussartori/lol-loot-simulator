import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface UserAttributes {
  username: string
  password: string
}

export class User extends Entity<UserAttributes> {
  get username() {
    return this.attributes.username
  }

  get password() {
    return this.attributes.password
  }

  static create(attributes: UserAttributes, id?: UniqueEntityID) {
    const user = new User(attributes, id)

    return user
  }
}
