import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User, UserAttributes } from '@/domain/enterprise/entities/user'
import { faker } from '@faker-js/faker'

export function makeUser(
  override: Partial<UserAttributes> = {},
  id?: UniqueEntityID,
) {
  const user = User.create(
    {
      username: faker.internet.userName(),
      password: faker.internet.password(),
      blueEssence: 0,
      riotPoints: 0,
      ...override,
    },
    id,
  )

  return user
}
