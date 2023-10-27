import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Champion,
  ChampionAttributes,
} from '@/domain/enterprise/entities/champion'
import { PrismaChampionMapper } from '@/infra/database/prisma/mappers/prisma-champion-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeChampion(
  override: Partial<ChampionAttributes> = {},
  id?: UniqueEntityID,
) {
  const user = Champion.create(
    {
      championId: new UniqueEntityID(faker.string.uuid()),
      userId: new UniqueEntityID(faker.string.uuid()),
      releasedAt: faker.date.past(),
      purchasedAt: new Date(),
      ...override,
    },
    id,
  )

  return user
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
