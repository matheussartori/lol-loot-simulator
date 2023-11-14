import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

import {
  CapsuleOdd,
  CapsuleOddAttributes,
} from '@/domain/enterprise/entities/capsule-odd'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaCapsuleOddMapper } from '@/infra/database/prisma/mappers/prisma-capsule-odd-mapper'

export function makeCapsuleOdd(
  override: Partial<CapsuleOddAttributes> = {},
  id?: UniqueEntityID,
) {
  const capsuleOdd = CapsuleOdd.create(
    {
      capsuleId: new UniqueEntityID(faker.string.uuid()),
      odd: faker.number.float({ min: 0, max: 50 }),
      rarityTier: faker.helpers.arrayElement([
        'STANDARD',
        'EPIC',
        'LEGENDARY',
        'MYTHIC',
        'ULTIMATE',
        'EXCLUSIVE',
      ]),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      ...override,
    },
    id,
  )

  return capsuleOdd
}

@Injectable()
export class CapsuleOddFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaOddCapsule(
    data: Partial<CapsuleOddAttributes> = {},
  ): Promise<CapsuleOdd> {
    const capsuleOdd = makeCapsuleOdd(data)

    await this.prisma.capsuleOdd.create({
      data: PrismaCapsuleOddMapper.toPrisma(capsuleOdd),
    })

    return capsuleOdd
  }
}
