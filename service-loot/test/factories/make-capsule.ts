import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'
import {
  Capsule,
  CapsuleAttributes,
} from '@/domain/enterprise/entities/capsule'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaCapsuleMapper } from '@/infra/database/prisma/mappers/prisma-capsule-mapper'

export function makeCapsule(
  override: Partial<CapsuleAttributes> = {},
  id?: UniqueEntityID,
) {
  const capsule = Capsule.create(
    {
      name: faker.word.words(2),
      minItemsPrize: faker.number.int({ min: 1, max: 2 }),
      maxItemsPrize: faker.number.int({ min: 3, max: 4 }),
      requiresKey: faker.datatype.boolean(),
      slug: faker.lorem.slug({ min: 1, max: 3 }),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      ...override,
    },
    id,
  )

  return capsule
}

@Injectable()
export class CapsuleFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaCapsule(
    data: Partial<CapsuleAttributes> = {},
  ): Promise<Capsule> {
    const capsule = makeCapsule(data)

    await this.prisma.capsule.create({
      data: PrismaCapsuleMapper.toPrisma(capsule),
    })

    return capsule
  }
}
