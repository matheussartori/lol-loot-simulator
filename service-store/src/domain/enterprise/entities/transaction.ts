import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface TransactionAttributes {
  itemId: UniqueEntityID
  userId: UniqueEntityID
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  status: 'PENDING' | 'COMPLETED' | 'FAILED'
  currency: 'BLUE_ESSENCE' | 'RIOT_POINTS'
  amount: number
  createdAt?: Date
  finishedAt: Date | null
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

  get currency() {
    return this.attributes.currency
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

  static create(
    attributes: Optional<
      TransactionAttributes,
      'status' | 'createdAt' | 'finishedAt'
    >,
    id?: UniqueEntityID,
  ) {
    const transaction = new Transaction(
      {
        ...attributes,
        createdAt: new Date(),
        status: 'PENDING',
        finishedAt: null,
      },
      id,
    )

    return transaction
  }
}
