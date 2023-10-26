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
      name: faker.word.words(1),
      releasedAt: faker.date.past(),
      ...override,
    },
    id,
  )

  return user
}
