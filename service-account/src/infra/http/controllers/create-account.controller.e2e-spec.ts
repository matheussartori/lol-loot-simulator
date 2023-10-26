import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import request from 'supertest'

describe('create account e2e', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST] /accounts', async () => {
    const response = await request(app.getHttpServer()).post('/accounts').send({
      username: 'any_username',
      password: 'any_password',
    })

    expect(response.statusCode).toBe(201)

    const isUserOnDatabase = await prisma.user.findUnique({
      where: {
        username: 'any_username',
      },
    })

    expect(isUserOnDatabase).toBeTruthy()
  })
})
