import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User, UserAttributes } from '@/domain/enterprise/entities/user'
import { faker } from '@faker-js/faker'

export function makeUser(
  override: Partial<UserAttributes> = {},
  id?: UniqueEntityID,
) {
  const user = User.create(
    {
      userId: new UniqueEntityID(faker.string.uuid()),
      orangeEssence: faker.number.int({ min: 0, max: 3000 }),
      mythicEssence: faker.number.int({ min: 0, max: 210 }),
      keys: faker.number.int({ min: 0, max: 10 }),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      ...override,
    },
    id,
  )

  return user
}
