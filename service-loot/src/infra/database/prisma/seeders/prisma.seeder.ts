import { PrismaClient } from '@prisma/client'
import { Capsule } from '@/domain/enterprise/entities/capsule'
import { PrismaCapsuleMapper } from '@/infra/database/prisma/mappers/prisma-capsule-mapper'
import { CapsuleOdd } from '@/domain/enterprise/entities/capsule-odd'
import { RarityTier } from '@/domain/enterprise/entities/rarity'
import { PrismaCapsuleOddMapper } from '@/infra/database/prisma/mappers/prisma-capsule-odd-mapper'

const prisma = new PrismaClient()
const capsules: Capsule[] = []

async function main() {
  await seedCapsules()
  await seedOdds()
}

async function seedCapsules() {
  capsules.push(
    Capsule.create({
      name: 'Champion Capsule',
      slug: 'CHAMPION_CAPSULE',
      minItemsPrize: 1,
      maxItemsPrize: 3,
    }),
  )

  for (const capsule of capsules) {
    await prisma.capsule.create({
      data: PrismaCapsuleMapper.toPrisma(capsule),
    })
  }
}

async function seedOdds() {
  let capsuleOdds: CapsuleOdd[] = []

  const championCapsuleOdds = [
    {
      rarityTier: 'STANDARD',
      odd: 50,
    },
    {
      rarityTier: 'EPIC',
      odd: 30,
    },
    {
      rarityTier: 'LEGENDARY',
      odd: 20,
    },
    {
      rarityTier: 'MYTHIC',
      odd: 10,
    },
    {
      rarityTier: 'ULTIMATE',
      odd: 5,
    },
    {
      rarityTier: 'EXCLUSIVE',
      odd: 3,
    },
  ]

  capsuleOdds = championCapsuleOdds.map((item) => {
    return CapsuleOdd.create({
      odd: item.odd,
      rarityTier: item.rarityTier as RarityTier,
      capsuleId: capsules[0].id,
    })
  })

  for (const capsuleOdd of capsuleOdds) {
    await prisma.capsuleOdd.create({
      data: PrismaCapsuleOddMapper.toPrisma(capsuleOdd),
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
