import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface TransactionAttributes {
  itemId: UniqueEntityID
  userId: UniqueEntityID
  type: string
  status: 'pending' | 'completed' | 'failed'
  amount: number
  createdAt?: Date
  finishedAt?: Date
}

export class Transaction extends Entity<TransactionAttributes> {
  get itemId() {
    return this.attributes.itemId
  }

  get userId() {
    return this.attributes.userId
  }

  get type() {
    return this.attributes.type
  }

  get status() {
    return this.attributes.status
  }

  get amount() {
    return this.attributes.amount
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get finishedAt() {
    return this.attributes.finishedAt
  }

  static create(attributes: TransactionAttributes, id?: UniqueEntityID) {
    const transaction = new Transaction(
      {
        ...attributes,
        createdAt: new Date(),
      },
      id,
    )

    return transaction
  }
}
