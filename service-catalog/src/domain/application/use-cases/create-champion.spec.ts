import { InMemoryChampionRepository } from 'test/repositories/in-memory-champion-repository'
import { CreateChampionUseCase } from './create-champion'
import { makeChampion } from 'test/factories/make-champion'
import { ChampionAlreadyExistsError } from './errors/champion-already-exists-error'
import { Champion } from '@/domain/enterprise/entities/champion'
import { FakeMessageEmitter } from 'test/messaging/fake-message-emitter'
import { CorrelationID } from '@/core/entities/correlation-id'
import { InMemoryChampionImageRepository } from '../../../../test/repositories/in-memory-champion-image-repository'

let inMemoryChampionRepository: InMemoryChampionRepository
let inMemoryChampionImageRepository: InMemoryChampionImageRepository
let fakeMessageEmitter: FakeMessageEmitter

let sut: CreateChampionUseCase

describe('create champion use case', () => {
  beforeEach(() => {
    inMemoryChampionImageRepository = new InMemoryChampionImageRepository()
    inMemoryChampionRepository = new InMemoryChampionRepository(
      inMemoryChampionImageRepository,
    )
    fakeMessageEmitter = new FakeMessageEmitter()

    sut = new CreateChampionUseCase(
      inMemoryChampionRepository,
      inMemoryChampionImageRepository,
      fakeMessageEmitter,
    )
  })

  it('should not create a champion if it already exists', async () => {
    const champion = makeChampion()

    inMemoryChampionRepository.create(champion)

    const result = await sut.execute({
      name: champion.name,
      rarityTier: 'STANDARD',
      releasedAt: new Date(),
      correlationId: new CorrelationID({ name: CreateChampionUseCase.name }),
      images: {
        portrait: 'any-image-url',
        splash: 'any-image-url',
        loading: 'any-image-url',
      },
    })

    expect(result.isLeft())
    expect(result.value).toBeInstanceOf(ChampionAlreadyExistsError)
  })

  it('should create a champion', async () => {
    const champion = makeChampion()

    const result = await sut.execute({
      name: champion.name,
      rarityTier: 'STANDARD',
      releasedAt: new Date(),
      correlationId: new CorrelationID({ name: CreateChampionUseCase.name }),
      images: {
        portrait: 'any-image-url',
        splash: 'any-image-url',
        loading: 'any-image-url',
      },
    })

    expect(result.isRight()).toBe(true)

    if (result.isRight()) {
      expect(result.value.champion).toBeInstanceOf(Champion)
    }
  })
})
