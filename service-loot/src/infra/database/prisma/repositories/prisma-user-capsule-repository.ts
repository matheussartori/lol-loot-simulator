import { UserCapsuleRepository } from '@/domain/application/repositories/user-capsule-repository'
import { UserCapsule } from '@/domain/enterprise/entities/user-capsule'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaUserCapsuleMapper } from '../mappers/prisma-user-capsule-mapper'

@Injectable()
export class PrismaUserCapsuleRepository implements UserCapsuleRepository {
  constructor(private prisma: PrismaService) {}

  async findUnopenedByUserId(userId: string): Promise<UserCapsule[]> {
    const userCapsules = await this.prisma.userCapsule.findMany({
      include: {
        capsule: true
      },
      where: {
        userId,
        openedAt: null,
      },
    })

    return userCapsules.map(PrismaUserCapsuleMapper.toDomain)
  }

  async findById(userCapsuleId: string): Promise<UserCapsule | null> {
    const userCapsule = await this.prisma.userCapsule.findUnique({
      where: {
        id: userCapsuleId,
      },
    })

    if (!userCapsule) {
      return null
    }

    return PrismaUserCapsuleMapper.toDomain(userCapsule)
  }

  async create(userCapsule: UserCapsule): Promise<void> {
    const data = PrismaUserCapsuleMapper.toPrisma(userCapsule)

    await this.prisma.userCapsule.create({
      data,
    })
  }

  async save(userCapsule: UserCapsule): Promise<void> {
    const data = PrismaUserCapsuleMapper.toPrisma(userCapsule)

    await this.prisma.userCapsule.update({
      where: {
        id: userCapsule.id.toString(),
      },
      data,
    })
  }
}
