import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'
import { Item, ItemAttributes } from '@/domain/enterprise/entities/item'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaItemMapper } from '@/infra/database/prisma/mappers/prisma-item-mapper'

export function makeItem(
  override: Partial<ItemAttributes> = {},
  id?: UniqueEntityID,
) {
  const item = Item.create(
    {
      itemId: new UniqueEntityID(faker.string.uuid()),
      name: faker.word.words(2),
      type: faker.helpers.arrayElement(['CHAMPION', 'CHROMA', 'SKIN']),
      rarityTier: faker.helpers.arrayElement([
        'STANDARD',
        'EPIC',
        'EXCLUSIVE',
        'MYTHIC',
        'ULTIMATE',
        'LEGENDARY',
      ]),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      ...override,
    },
    id,
  )

  return item
}

@Injectable()
export class ItemFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaItem(data: Partial<ItemAttributes> = {}): Promise<Item> {
    const item = makeItem(data)

    await this.prisma.item.create({
      data: PrismaItemMapper.toPrisma(item),
    })

    return item
  }
}
