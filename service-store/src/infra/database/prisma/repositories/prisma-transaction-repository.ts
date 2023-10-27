import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { Transaction } from '@/domain/enterprise/entities/transaction'
import { PrismaTransactionMapper } from '../mappers/prisma-transaction-mapper'

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {
  constructor(private prisma: PrismaService) {}
  async findById(id: string): Promise<Transaction | null> {
    const transaction = await this.prisma.transaction.findUnique({
      where: {
        id,
      },
    })

    if (!transaction) {
      return null
    }

    return PrismaTransactionMapper.toDomain(transaction)
  }

  async create(transaction: Transaction): Promise<void> {
    const data = PrismaTransactionMapper.toPrisma(transaction)

    await this.prisma.transaction.create({
      data,
    })
  }

  async save(transaction: Transaction): Promise<void> {
    const data = PrismaTransactionMapper.toPrisma(transaction)

    await this.prisma.transaction.update({
      data,
      where: {
        id: data.id,
      },
    })
  }
}
