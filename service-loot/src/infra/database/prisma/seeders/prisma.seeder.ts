import { PrismaClient } from '@prisma/client'
import { Capsule } from '@/domain/enterprise/entities/capsule'
import { PrismaCapsuleMapper } from '@/infra/database/prisma/mappers/prisma-capsule-mapper'
const prisma = new PrismaClient()

async function main() {
  await seedCapsules()
}

async function seedCapsules() {
  const capsules: Capsule[] = []

  capsules.push(
    Capsule.create({
      name: 'Champion Capsule',
      minItemsPrize: 1,
      maxItemsPrize: 3,
    }),
  )

  capsules.push(
    Capsule.create({
      name: 'Glorious Champion Capsule',
      minItemsPrize: 3,
      maxItemsPrize: 4,
    }),
  )

  for (const capsule of capsules) {
    await prisma.capsule.create({
      data: PrismaCapsuleMapper.toPrisma(capsule),
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
