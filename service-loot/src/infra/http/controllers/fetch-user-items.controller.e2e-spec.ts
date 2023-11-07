import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/database.module'
import { Test } from '@nestjs/testing'
import { UserItemFactory } from 'test/factories/make-user-item'
import { INestApplication } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import request from 'supertest'
import { UserFactory } from 'test/factories/make-user'

describe('fetch user items e2e', () => {
  let app: INestApplication
  let prisma: PrismaService
  let userFactory: UserFactory
  let userItemFactory: UserItemFactory

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [UserFactory, UserItemFactory],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = moduleRef.get(PrismaService)

    userFactory = moduleRef.get(UserFactory)
    userItemFactory = moduleRef.get(UserItemFactory)

    await app.init()
  })

  test('[GET] /user_items', async () => {
    await userFactory.makePrismaUser({
      userId: new UniqueEntityID('test-user-id'),
    })
    await userItemFactory.makePrismaUser({
      userId: new UniqueEntityID('test-user-id'),
      userCapsuleId: null,
    })

    const response = await request(app.getHttpServer()).get('/user_items')

    expect(response.statusCode).toBe(200)

    const isUserItemsOnDatabase = await prisma.userItem.findMany({
      where: {
        userId: 'test-user-id',
      },
    })

    expect(isUserItemsOnDatabase).toHaveLength(1)
  })
})
