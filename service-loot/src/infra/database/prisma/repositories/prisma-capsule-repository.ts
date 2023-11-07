import { CapsuleRepository } from '@/domain/application/repositories/capsule-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Capsule } from '@/domain/enterprise/entities/capsule'
import { PrismaCapsuleMapper } from '../mappers/prisma-capsule-mapper'

@Injectable()
export class PrismaCapsuleRepository implements CapsuleRepository {
  constructor(private prisma: PrismaService) {}
  async findById(capsuleId: string): Promise<Capsule | null> {
    const capsule = await this.prisma.capsule.findUnique({
      where: {
        id: capsuleId,
      },
    })

    if (!capsule) {
      return null
    }

    return PrismaCapsuleMapper.toDomain(capsule)
  }

  async create(capsule: Capsule): Promise<void> {
    const data = PrismaCapsuleMapper.toPrisma(capsule)

    await this.prisma.capsule.create({
      data,
    })
  }
}
