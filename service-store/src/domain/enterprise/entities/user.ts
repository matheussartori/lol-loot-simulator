import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'
import { Transaction } from '@/domain/enterprise/entities/transaction'

export interface UserAttributes {
  userId: UniqueEntityID
  riotPoints: number
  blueEssence: number
  createdAt?: Date
  updatedAt?: Date
}

export class User extends Entity<UserAttributes> {
  get userId() {
    return this.attributes.userId
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

  applyTransaction(transaction: Transaction): boolean {
    switch (transaction.currency) {
      case 'BLUE_ESSENCE':
        if (this.attributes.blueEssence >= transaction.amount) {
          this.attributes.blueEssence -= transaction.amount
          return true
        } else {
          return false
        }
      case 'RIOT_POINTS':
        if (this.attributes.riotPoints >= transaction.amount) {
          this.attributes.riotPoints -= transaction.amount
          return true
        } else {
          return false
        }
    }
  }

  refundTransaction(transaction: Transaction) {
    switch (transaction.currency) {
      case 'BLUE_ESSENCE':
        this.attributes.blueEssence += transaction.amount
        break
      case 'RIOT_POINTS':
        this.attributes.riotPoints += transaction.amount
        break
    }
  }

  static create(
    attributes: Optional<
      UserAttributes,
      'createdAt' | 'updatedAt' | 'blueEssence' | 'riotPoints'
    >,
    id?: UniqueEntityID,
  ) {
    const user = new User(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
        blueEssence: attributes.blueEssence ?? 0,
        riotPoints: attributes.riotPoints ?? 0,
      },
      id,
    )

    return user
  }
}
