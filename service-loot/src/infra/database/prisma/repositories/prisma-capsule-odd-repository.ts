import { CapsuleOddRepository } from '@/domain/application/repositories/capsule-odd-repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CapsuleOdd } from '@/domain/enterprise/entities/capsule-odd'
import { PrismaCapsuleOddMapper } from '@/infra/database/prisma/mappers/prisma-capsule-odd-mapper'

@Injectable()
export class PrismaCapsuleOddRepository implements CapsuleOddRepository {
  constructor(private prisma: PrismaService) {}

  async findByCapsuleId(capsuleId: string): Promise<CapsuleOdd[]> {
    const capsuleOdds = await this.prisma.capsuleOdd.findMany({
      where: {
        capsuleId,
      },
    })

    return capsuleOdds.map(PrismaCapsuleOddMapper.toDomain)
  }
}
