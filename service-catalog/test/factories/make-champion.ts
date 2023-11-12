import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Champion,
  ChampionAttributes,
} from '@/domain/enterprise/entities/champion'
import { faker } from '@faker-js/faker'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { PrismaChampionMapper } from '@/infra/database/prisma/mappers/prisma-champion-mapper'

export function makeChampion(
  override: Partial<ChampionAttributes> = {},
  id?: UniqueEntityID,
) {
  const champion = Champion.create(
    {
      name: faker.word.words(1),
      rarityTier: faker.helpers.arrayElement([
        'STANDARD',
        'EPIC',
        'LEGENDARY',
        'MYTHIC',
        'ULTIMATE',
        'EXCLUSIVE',
      ]),
      releasedAt: faker.date.past(),
      ...override,
    },
    id,
  )

  return champion
}

@Injectable()
export class ChampionFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaChampion(
    data: Partial<ChampionAttributes> = {},
  ): Promise<Champion> {
    const champion = makeChampion(data)

    await this.prisma.champion.create({
      data: PrismaChampionMapper.toPrisma(champion),
    })

    return champion
  }
}
