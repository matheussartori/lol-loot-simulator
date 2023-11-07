import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'
import {
  UserCapsule,
  UserCapsuleAttributes,
} from '@/domain/enterprise/entities/user-capsule'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaUserCapsuleMapper } from '@/infra/database/prisma/mappers/prisma-user-capsule-mapper'

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

@Injectable()
export class UserCapsuleFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaUserCapsule(
    data: Partial<UserCapsuleAttributes> = {},
  ): Promise<UserCapsule> {
    const userCapsule = makeUserCapsule(data)

    await this.prisma.userCapsule.create({
      data: PrismaUserCapsuleMapper.toPrisma(userCapsule),
    })

    return userCapsule
  }
}
