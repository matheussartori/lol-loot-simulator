import { InMemoryItemRepository } from '../../../../test/repositories/in-memory-item-repository'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { makeItem } from '../../../../test/factories/make-item'
import { ItemAlreadyExistsError } from '@/domain/application/use-cases/errors/item-already-exists-error'

let inMemoryItemRepository: InMemoryItemRepository

let sut: AddChampionUseCase

describe('add champion use case', () => {
  beforeEach(() => {
    inMemoryItemRepository = new InMemoryItemRepository()

    sut = new AddChampionUseCase(inMemoryItemRepository)
  })

  it('should not add a champion that already exists', async () => {
    const item = makeItem({
      type: 'CHAMPION',
    })
    await inMemoryItemRepository.create(item)

    const result = await sut.execute({
      itemId: item.id.toString(),
      name: item.name,
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ItemAlreadyExistsError)
  })

  it('should add a champion', async () => {
    const item = makeItem({
      type: 'CHAMPION',
    })

    const result = await sut.execute({
      itemId: item.id.toString(),
      name: item.name,
    })

    expect(result.isRight()).toBe(true)
  })
})
