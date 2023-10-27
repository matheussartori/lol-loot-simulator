import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Champion,
  ChampionAttributes,
} from '@/domain/enterprise/entities/champion'
import { faker } from '@faker-js/faker'

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
