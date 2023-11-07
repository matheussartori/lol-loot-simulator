import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  UserItem,
  UserItemAttributes,
} from '@/domain/enterprise/entities/user-item'
import { PrismaUserItemMapper } from '@/infra/database/prisma/mappers/prisma-user-item-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeUserItem(
  override: Partial<UserItemAttributes> = {},
  id?: UniqueEntityID,
) {
  const userItem = UserItem.create(
    {
      userId: new UniqueEntityID(faker.string.uuid()),
      itemId: new UniqueEntityID(faker.string.uuid()),
      type: faker.helpers.arrayElement(['CHAMPION_FRAGMENT']),
      userCapsuleId: new UniqueEntityID(faker.string.uuid()),
      createdAt: faker.date.past(),
      ...override,
    },
    id,
  )

  return userItem
}

@Injectable()
export class UserItemFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaUser(
    data: Partial<UserItemAttributes> = {},
  ): Promise<UserItem> {
    const user = makeUserItem(data)

    await this.prisma.userItem.create({
      data: PrismaUserItemMapper.toPrisma(user),
    })

    return user
  }
}
