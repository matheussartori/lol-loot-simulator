import { InMemoryUserCapsuleRepository } from 'test/repositories/in-memory-user-capsule-repository'
import { OpenChampionCapsuleUseCase } from './open-champion-capsule'
import { InMemoryCapsuleRepository } from 'test/repositories/in-memory-capsule-repository'
import { InMemoryItemRepository } from 'test/repositories/in-memory-item-repository'
import { InMemoryUserItemRepository } from 'test/repositories/in-memory-user-item-repository'
import { CapsuleNotFoundError } from './errors/capsule-not-found-error'
import { makeUserCapsule } from 'test/factories/make-user-capsule'
import { ForbiddenCapsuleError } from './errors/forbidden-capsule-error'
import { makeCapsule } from 'test/factories/make-capsule'
import { WrongCapsuleTypeError } from './errors/wrong-capsule-type-error'
import { makeItem } from 'test/factories/make-item'
import { CapsuleAlreadyOpenedError } from './errors/capsule-already-opened'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryUserCapsuleRepository: InMemoryUserCapsuleRepository
let inMemoryCapsuleRepository: InMemoryCapsuleRepository
let inMemoryItemRepository: InMemoryItemRepository
let inMemoryUserItemRepository: InMemoryUserItemRepository

let sut: OpenChampionCapsuleUseCase

describe('open champion capsule use case', () => {
  beforeEach(() => {
    inMemoryUserCapsuleRepository = new InMemoryUserCapsuleRepository()
    inMemoryCapsuleRepository = new InMemoryCapsuleRepository()
    inMemoryItemRepository = new InMemoryItemRepository()
    inMemoryUserItemRepository = new InMemoryUserItemRepository()

    sut = new OpenChampionCapsuleUseCase(
      inMemoryUserCapsuleRepository,
      inMemoryCapsuleRepository,
      inMemoryItemRepository,
      inMemoryUserItemRepository,
    )
  })

  it('should not open a capsule if the user capsule does not exist', async () => {
    const result = await sut.execute({
      userCapsuleId: 'non-existing-capsule-id',
      userId: 'any-user-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CapsuleNotFoundError)
  })

  it('should not open a capsule if it does not belong to the user', async () => {
    const userCapsule = makeUserCapsule()
    inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: 'any-user-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ForbiddenCapsuleError)
  })

  it('should not open a capsule that has been already opened', async () => {
    const userCapsule = makeUserCapsule({
      openedAt: new Date(),
      userId: new UniqueEntityID('any-user-id'),
    })
    inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: 'any-user-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CapsuleAlreadyOpenedError)
  })

  it('should not open a capsule if the capsule itself does not exists', async () => {
    const userCapsule = makeUserCapsule()
    inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CapsuleNotFoundError)
  })

  it('should not open a capsule if the type is not CHAMPION_CAPSULE', async () => {
    const capsule = makeCapsule({
      type: 'HEXTECH_CHEST',
    })
    inMemoryCapsuleRepository.create(capsule)
    const userCapsule = makeUserCapsule({
      capsuleId: capsule.id,
    })
    inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(WrongCapsuleTypeError)
  })

  it('should return an empty array if no champions are found', async () => {
    const capsule = makeCapsule({
      type: 'CHAMPION_CAPSULE',
    })
    inMemoryCapsuleRepository.create(capsule)
    const userCapsule = makeUserCapsule({
      capsuleId: capsule.id,
    })
    inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.earnedItems).toHaveLength(0)
    }
  })

  it('should return an array of champions on success', async () => {
    const item = makeItem({
      type: 'CHAMPION',
      rarityTier: 'STANDARD',
    })
    inMemoryItemRepository.create(item)
    const capsule = makeCapsule({
      type: 'CHAMPION_CAPSULE',
    })
    inMemoryCapsuleRepository.create(capsule)
    const userCapsule = makeUserCapsule({
      capsuleId: capsule.id,
    })
    inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.earnedItems).toHaveLength(1)
      expect(inMemoryUserCapsuleRepository.items[0].openedAt).toBeTruthy()
    }
  })
})
