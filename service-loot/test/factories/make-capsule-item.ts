import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

import {
  CapsuleItem,
  CapsuleItemAttributes,
} from '@/domain/enterprise/entities/capsule-item'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaCapsuleItemMapper } from '@/infra/database/prisma/mappers/prisma-capsule-item-mapper'

export function makeCapsuleItem(
  override: Partial<CapsuleItemAttributes> = {},
  id?: UniqueEntityID,
) {
  const capsuleItem = CapsuleItem.create(
    {
      itemId: new UniqueEntityID(faker.string.uuid()),
      capsuleId: new UniqueEntityID(faker.string.uuid()),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      ...override,
    },
    id,
  )

  return capsuleItem
}

@Injectable()
export class CapsuleItemFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaCapsuleItem(
    data: Partial<CapsuleItemAttributes> = {},
  ): Promise<CapsuleItem> {
    const capsuleItem = makeCapsuleItem(data)

    await this.prisma.capsuleItem.create({
      data: PrismaCapsuleItemMapper.toPrisma(capsuleItem),
    })

    return capsuleItem
  }
}
