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
      userId: new UniqueEntityID(faker.string.uuid()),
      releasedAt: faker.date.past(),
      purchasedAt: new Date(),
      ...override,
    },
    id,
  )

  return user
}
