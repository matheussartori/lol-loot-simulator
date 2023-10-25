import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import request from 'supertest'
import { HashGenerator } from '@/domain/application/cryptography/hash-generator'

describe('authenticate e2e', () => {
  let app: INestApplication
  let prisma: PrismaService
  let hashGenerator: HashGenerator

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)
    hashGenerator = moduleRef.get(HashGenerator)

    await app.init()
  })

  test('[POST] /sessions', async () => {
    const hashedPassword = await hashGenerator.hash('any_password')
    await prisma.user.create({
      data: {
        username: 'any_username',
        password: hashedPassword,
      },
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      username: 'any_username',
      password: 'any_password',
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.accessToken).toBeTruthy()
  })
})
