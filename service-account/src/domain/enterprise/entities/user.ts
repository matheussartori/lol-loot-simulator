import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface UserAttributes {
  username: string
  password: string
  riotPoints: number
  blueEssence: number
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

  get riotPoints() {
    return this.attributes.riotPoints
  }

  get blueEssence() {
    return this.attributes.blueEssence
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
  }

  addBlueEssence(amount: number) {
    if (amount > 0) {
      this.attributes.blueEssence += amount
    }
  }

  addRiotPoints(amount: number) {
    if (amount > 0) {
      this.attributes.riotPoints += amount
    }
  }

  removeBlueEssence(amount: number) {
    this.attributes.blueEssence -= amount
  }

  removeRiotPoints(amount: number) {
    this.attributes.riotPoints -= amount
  }

  static create(attributes: UserAttributes, id?: UniqueEntityID) {
    const user = new User(
      {
        ...attributes,
        createdAt: new Date(),
        updatedAt: new Date(),
        riotPoints: 0,
        blueEssence: 0,
      },
      id,
    )

    return user
  }
}
