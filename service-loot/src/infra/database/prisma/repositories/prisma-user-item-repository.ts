import { UserItemRepository } from '@/domain/application/repositories/user-item-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { UserItem } from '@/domain/enterprise/entities/user-item'
import { PrismaUserItemMapper } from '../mappers/prisma-user-item-mapper'

@Injectable()
export class PrismaUserItemRepository implements UserItemRepository {
  constructor(private prisma: PrismaService) {}
  async findByUserId(userId: string): Promise<UserItem[]> {
    const userItems = await this.prisma.userItem.findMany({
      where: {
        userId,
      },
    })

    return userItems.map(PrismaUserItemMapper.toDomain)
  }

  async create(userItem: UserItem): Promise<void> {
    const data = PrismaUserItemMapper.toPrisma(userItem)

    await this.prisma.userItem.create({
      data,
    })
  }
}
