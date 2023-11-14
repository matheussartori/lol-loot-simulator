import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from '@/infra/app.module'
import request from 'supertest'
import { DatabaseModule } from '@/infra/database/database.module'
import { CapsuleFactory } from 'test/factories/make-capsule'
import { UserCapsuleFactory } from 'test/factories/make-user-capsule'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ItemFactory } from 'test/factories/make-item'
import { UserFactory } from 'test/factories/make-user'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { CapsuleItemFactory } from 'test/factories/make-capsule-item'
import { CapsuleOddFactory } from '../../../../test/factories/make-capsule-odd'

describe('open champion capsule e2e', () => {
  let app: INestApplication
  let prisma: PrismaService
  let capsuleFactory: CapsuleFactory
  let userCapsuleFactory: UserCapsuleFactory
  let itemFactory: ItemFactory
  let userFactory: UserFactory
  let capsuleItemFactory: CapsuleItemFactory
  let capsuleOddFactory: CapsuleOddFactory

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [CapsuleFactory, UserCapsuleFactory, ItemFactory, UserFactory],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = moduleRef.get(PrismaService)

    capsuleFactory = moduleRef.get(CapsuleFactory)
    userCapsuleFactory = moduleRef.get(UserCapsuleFactory)
    itemFactory = moduleRef.get(ItemFactory)
    userFactory = moduleRef.get(UserFactory)
    capsuleItemFactory = moduleRef.get(CapsuleItemFactory)
    capsuleOddFactory = moduleRef.get(CapsuleOddFactory)

    await app.init()
  })

  test('[POST] /capsules/open', async () => {
    await userFactory.makePrismaUser({
      userId: new UniqueEntityID('test-user-id'),
    })
    const capsule = await capsuleFactory.makePrismaCapsule()
    const userCapsule = await userCapsuleFactory.makePrismaUserCapsule({
      capsuleId: capsule.id,
      userId: new UniqueEntityID('test-user-id'),
    })
    const item = await itemFactory.makePrismaItem({
      type: 'CHAMPION',
      rarityTier: 'STANDARD',
    })
    await capsuleItemFactory.makePrismaCapsule({
      capsuleId: capsule.id,
      itemId: item.itemId,
    })
    await capsuleOddFactory.makePrismaCapsule({
      capsuleId: capsule.id,
      rarityTier: 'STANDARD',
      odd: 100,
    })

    const response = await request(app.getHttpServer())
      .post('/capsules/open')
      .send({
        userCapsuleId: userCapsule.id.toString(),
      })

    expect(response.statusCode).toBe(201)

    const isUserItemsOnDatabase = await prisma.userItem.findMany({
      where: {
        userId: 'test-user-id',
      },
    })

    expect(isUserItemsOnDatabase).toBeTruthy()
  })
})
