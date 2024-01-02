import { InMemoryItemRepository } from '../../../../test/repositories/in-memory-item-repository'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { makeItem } from '../../../../test/factories/make-item'
import { ItemAlreadyExistsError } from '@/domain/application/use-cases/errors/item-already-exists-error'
import { InMemoryCapsuleItemRepository } from '../../../../test/repositories/in-memory-capsule-item-repository'
import { InMemoryCapsuleRepository } from '../../../../test/repositories/in-memory-capsule-repository'
import { CapsuleNotFoundError } from '@/domain/application/use-cases/errors/capsule-not-found-error'
import { makeCapsule } from '../../../../test/factories/make-capsule'

let inMemoryItemRepository: InMemoryItemRepository
let inMemoryCapsuleRepository: InMemoryCapsuleRepository
let inMemoryCapsuleItemRepository: InMemoryCapsuleItemRepository

let sut: AddChampionUseCase

describe('add champion use case', () => {
  beforeEach(() => {
    inMemoryItemRepository = new InMemoryItemRepository()
    inMemoryCapsuleRepository = new InMemoryCapsuleRepository()
    inMemoryCapsuleItemRepository = new InMemoryCapsuleItemRepository(
      inMemoryCapsuleRepository,
      inMemoryItemRepository,
    )

    sut = new AddChampionUseCase(
      inMemoryItemRepository,
      inMemoryCapsuleRepository,
      inMemoryCapsuleItemRepository,
    )
  })

  it('should not add a champion that already exists', async () => {
    const item = makeItem({
      type: 'CHAMPION',
    })
    await inMemoryItemRepository.create(item)

    const result = await sut.execute({
      itemId: item.id.toString(),
      name: item.name,
      rarityTier: item.rarityTier,
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ItemAlreadyExistsError)
  })

  it('should not add to the capsule items if the capsule is not found', async () => {
    const item = makeItem({
      type: 'CHAMPION',
    })

    const result = await sut.execute({
      itemId: item.id.toString(),
      name: item.name,
      rarityTier: item.rarityTier,
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(CapsuleNotFoundError)
  })

  it('should add a champion', async () => {
    const capsule = makeCapsule({
      slug: 'CHAMPION_CAPSULE',
    })

    await inMemoryCapsuleRepository.create(capsule)

    const item = makeItem({
      type: 'CHAMPION',
    })

    const result = await sut.execute({
      itemId: item.id.toString(),
      name: item.name,
      rarityTier: item.rarityTier,
    })

    expect(result.isRight()).toBe(true)
  })
})
