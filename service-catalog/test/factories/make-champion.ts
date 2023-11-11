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
