import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'
import {
  ChampionImage,
  ChampionImageAttributes,
} from '@/domain/enterprise/entities/champion-image'

export function makeChampionImage(
  override: Partial<ChampionImageAttributes> = {},
  id?: UniqueEntityID,
) {
  const championImage = ChampionImage.create(
    {
      championId: new UniqueEntityID(faker.string.uuid()),
      url: faker.internet.url(),
      type: faker.helpers.arrayElement(['PORTRAIT', 'LOADING', 'SPLASH']),
      createdAt: faker.date.recent(),
      ...override,
    },
    id,
  )

  return championImage
}
