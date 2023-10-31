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
      blueEssence: faker.number.int({ min: 450, max: 6300 }),
      riotPoints: faker.number.int({ min: 260, max: 975 }),
      createdAt: faker.date.past(),
      ...override,
    },
    id,
  )

  return user
}
