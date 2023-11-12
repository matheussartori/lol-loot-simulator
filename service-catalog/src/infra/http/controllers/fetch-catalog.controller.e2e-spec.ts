import { AppModule } from '@/infra/app.module'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { ChampionFactory } from '../../../../test/factories/make-champion'
import { DatabaseModule } from '@/infra/database/database.module'

describe('fetch catalog controller e2e', () => {
  let app: INestApplication
  let championFactory: ChampionFactory

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [ChampionFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    championFactory = moduleRef.get(ChampionFactory)

    await app.init()
  })

  test('[GET] /catalog', async () => {
    await championFactory.makePrismaChampion()

    const response = await request(app.getHttpServer()).get('/catalog')

    console.log(response.body)

    expect(response.statusCode).toBe(200)
    expect(response.body.champions).toHaveLength(1)
  })
})
