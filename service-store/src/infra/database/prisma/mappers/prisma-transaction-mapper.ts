import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Transaction } from '@/domain/enterprise/entities/transaction'
import { Transaction as PrismaTransaction } from '@prisma/client'

export class PrismaTransactionMapper {
  static toDomain(raw: PrismaTransaction): Transaction {
    return Transaction.create(
      {
        itemId: new UniqueEntityID(raw.itemId),
        userId: new UniqueEntityID(raw.userId),
        type: raw.type,
        status: raw.status,
        currency: raw.currency,
        amount: raw.amount,
        createdAt: raw.createdAt ?? undefined,
        finishedAt: raw.finishedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(transaction: Transaction): PrismaTransaction {
    return {
      id: transaction.id.toString(),
      itemId: transaction.itemId.toString(),
      userId: transaction.userId.toString(),
      type: transaction.type,
      status: transaction.status,
      currency: transaction.currency,
      amount: transaction.amount,
      createdAt: transaction.createdAt ?? null,
      finishedAt: transaction.finishedAt,
    }
  }
}
