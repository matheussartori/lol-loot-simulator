import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Champion,
  ChampionAttributes,
} from '@/domain/enterprise/entities/champion'
import { faker } from '@faker-js/faker'
import { PrismaChampionMapper } from '@/infra/database/prisma/mappers/prisma-champion-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

export function makeChampion(
  override: Partial<ChampionAttributes> = {},
  id?: UniqueEntityID,
) {
  const user = Champion.create(
    {
      championId: new UniqueEntityID(faker.string.uuid()),
      name: faker.word.words(1),
      blueEssencePrice: faker.number.int({ min: 450, max: 6300 }),
      riotPointsPrice: faker.number.int({ min: 260, max: 975 }),
      releasedAt: faker.date.past(),
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
