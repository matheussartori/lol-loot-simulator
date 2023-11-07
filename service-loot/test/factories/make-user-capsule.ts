import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'
import {
  UserCapsule,
  UserCapsuleAttributes,
} from '@/domain/enterprise/entities/user-capsule'

export function makeUserCapsule(
  override: Partial<UserCapsuleAttributes> = {},
  id?: UniqueEntityID,
) {
  const userCapsule = UserCapsule.create(
    {
      userId: new UniqueEntityID(faker.string.uuid()),
      capsuleId: new UniqueEntityID(faker.string.uuid()),
      openedAt: null,
      createdAt: faker.date.past(),
      ...override,
    },
    id,
  )

  return userCapsule
}
