import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'
import {
  Capsule,
  CapsuleAttributes,
} from '@/domain/enterprise/entities/capsule'

export function makeCapsule(
  override: Partial<CapsuleAttributes> = {},
  id?: UniqueEntityID,
) {
  const capsule = Capsule.create(
    {
      name: faker.word.words(2),
      type: faker.helpers.arrayElement(['HEXTECH_CHEST', 'CHAMPION_CAPSULE']),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      ...override,
    },
    id,
  )

  return capsule
}
