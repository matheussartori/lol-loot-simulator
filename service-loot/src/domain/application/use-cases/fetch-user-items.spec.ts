import { InMemoryUserItemRepository } from 'test/repositories/in-memory-user-item-repository'
import { FetchUserItemsUseCase } from './fetch-user-items'
import { makeUserItem } from 'test/factories/make-user-item'
import { InMemoryUserCapsuleRepository } from 'test/repositories/in-memory-user-capsule-repository'

let inMemoryUserItemRepository: InMemoryUserItemRepository
let inMemoryUserCapsuleRepository: InMemoryUserCapsuleRepository

let sut: FetchUserItemsUseCase

describe('fetch user items use case', () => {
  beforeEach(() => {
    inMemoryUserItemRepository = new InMemoryUserItemRepository()
    inMemoryUserCapsuleRepository = new InMemoryUserCapsuleRepository()

    sut = new FetchUserItemsUseCase(
      inMemoryUserItemRepository,
      inMemoryUserCapsuleRepository,
    )
  })

  it('should return an empty array if no user items are found', async () => {
    const result = await sut.execute({
      userId: 'any-user-id',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.userItems).toHaveLength(0)
  })

  it('should return the fetched user items', async () => {
    const userItem = makeUserItem()
    await inMemoryUserItemRepository.create(userItem)

    const result = await sut.execute({
      userId: userItem.userId.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.userItems).toHaveLength(1)
  })
})
