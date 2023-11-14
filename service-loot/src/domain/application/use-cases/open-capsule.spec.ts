import { InMemoryUserCapsuleRepository } from 'test/repositories/in-memory-user-capsule-repository'
import { OpenCapsuleUseCase } from './open-capsule'
import { InMemoryCapsuleRepository } from 'test/repositories/in-memory-capsule-repository'
import { InMemoryItemRepository } from 'test/repositories/in-memory-item-repository'
import { InMemoryUserItemRepository } from 'test/repositories/in-memory-user-item-repository'
import { CapsuleNotFoundError } from './errors/capsule-not-found-error'
import { makeUserCapsule } from 'test/factories/make-user-capsule'
import { ForbiddenCapsuleError } from './errors/forbidden-capsule-error'
import { makeCapsule } from 'test/factories/make-capsule'
import { makeItem } from 'test/factories/make-item'
import { CapsuleAlreadyOpenedError } from './errors/capsule-already-opened'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { InMemoryCapsuleItemRepository } from '../../../../test/repositories/in-memory-capsule-item-repository'
import { InMemoryCapsuleOddRepository } from '../../../../test/repositories/in-memory-capsule-odd-repository'
import { CapsuleWithNoRewardFoundError } from '@/domain/application/use-cases/errors/capsule-with-no-reward-found-error'
import { makeCapsuleItem } from '../../../../test/factories/make-capsule-item'
import { makeCapsuleOdd } from '../../../../test/factories/make-capsule-odd'

let inMemoryUserCapsuleRepository: InMemoryUserCapsuleRepository
let inMemoryCapsuleRepository: InMemoryCapsuleRepository
let inMemoryItemRepository: InMemoryItemRepository
let inMemoryCapsuleItemRepository: InMemoryCapsuleItemRepository
let inMemoryUserItemRepository: InMemoryUserItemRepository
let inMemoryCapsuleOddRepository: InMemoryCapsuleOddRepository

let sut: OpenCapsuleUseCase

describe('open champion capsule use case', () => {
  beforeEach(() => {
    inMemoryUserCapsuleRepository = new InMemoryUserCapsuleRepository()
    inMemoryCapsuleRepository = new InMemoryCapsuleRepository()
    inMemoryItemRepository = new InMemoryItemRepository()
    inMemoryCapsuleItemRepository = new InMemoryCapsuleItemRepository(
      inMemoryCapsuleRepository,
      inMemoryItemRepository,
    )
    inMemoryUserItemRepository = new InMemoryUserItemRepository()
    inMemoryCapsuleOddRepository = new InMemoryCapsuleOddRepository()

    sut = new OpenCapsuleUseCase(
      inMemoryUserCapsuleRepository,
      inMemoryCapsuleRepository,
      inMemoryCapsuleItemRepository,
      inMemoryUserItemRepository,
      inMemoryCapsuleOddRepository,
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
    await inMemoryUserCapsuleRepository.create(userCapsule)

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
    await inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: 'any-user-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CapsuleAlreadyOpenedError)
  })

  it('should not open a capsule if the capsule itself does not exists', async () => {
    const userCapsule = makeUserCapsule()
    await inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CapsuleNotFoundError)
  })

  it('should return an error if no rewards are configured for the capsule', async () => {
    const capsule = makeCapsule()
    await inMemoryCapsuleRepository.create(capsule)
    const userCapsule = makeUserCapsule({
      capsuleId: capsule.id,
    })
    await inMemoryUserCapsuleRepository.create(userCapsule)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CapsuleWithNoRewardFoundError)
  })

  it('should be able to lower a rarity if a higher rarity is not available', async () => {
    const capsule = makeCapsule({
      minItemsPrize: 1,
      maxItemsPrize: 1,
    })
    await inMemoryCapsuleRepository.create(capsule)
    const userCapsule = makeUserCapsule({
      capsuleId: capsule.id,
    })
    await inMemoryUserCapsuleRepository.create(userCapsule)
    const item = makeItem({
      rarityTier: 'STANDARD',
    })
    await inMemoryItemRepository.create(item)
    const capsuleItem = makeCapsuleItem({
      capsuleId: capsule.id,
      itemId: item.itemId,
    })
    await inMemoryCapsuleItemRepository.create(capsuleItem)
    const standardOdd = makeCapsuleOdd({
      capsuleId: capsule.id,
      rarityTier: 'STANDARD',
      odd: 0,
    })
    const epicOdd = makeCapsuleOdd({
      capsuleId: capsule.id,
      rarityTier: 'EPIC',
      odd: 100,
    })
    inMemoryCapsuleOddRepository.items.push(standardOdd, epicOdd)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isRight()).toBe(true)
  })

  it('should be able to open a capsule', async () => {
    const capsule = makeCapsule({
      minItemsPrize: 4,
      maxItemsPrize: 4,
    })
    await inMemoryCapsuleRepository.create(capsule)
    const userCapsule = makeUserCapsule({
      capsuleId: capsule.id,
    })
    await inMemoryUserCapsuleRepository.create(userCapsule)
    const item = makeItem({
      rarityTier: 'STANDARD',
    })
    await inMemoryItemRepository.create(item)
    const capsuleItem = makeCapsuleItem({
      capsuleId: capsule.id,
      itemId: item.itemId,
    })
    await inMemoryCapsuleItemRepository.create(capsuleItem)
    const standardOdd = makeCapsuleOdd({
      capsuleId: capsule.id,
      rarityTier: 'STANDARD',
      odd: 100,
    })
    inMemoryCapsuleOddRepository.items.push(standardOdd)

    const result = await sut.execute({
      userCapsuleId: userCapsule.id.toString(),
      userId: userCapsule.userId.toString(),
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.earnedItems).toHaveLength(4)
    }
  })
})
