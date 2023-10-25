import { FakeHasher } from 'test/cryptography/fake-hasher'
import { CreateUserUseCase } from './create-user'
import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository'
import { makeUser } from 'test/factories/make-user'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

let inMemoryUserRepository: InMemoryUserRepository
let fakeHasher: FakeHasher

let sut: CreateUserUseCase

describe('create user use case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    fakeHasher = new FakeHasher()
    sut = new CreateUserUseCase(inMemoryUserRepository, fakeHasher)
  })

  it('should not be able to create a user with an existing username', async () => {
    const user = makeUser()

    await inMemoryUserRepository.create(user)

    const userWithSameUsername = makeUser({
      username: user.username,
    })

    const result = await sut.execute({
      username: userWithSameUsername.username,
      password: userWithSameUsername.password,
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UserAlreadyExistsError)
  })

  it('should be able to create a user', async () => {
    const user = makeUser()

    const result = await sut.execute({
      username: user.username,
      password: user.password,
    })

    expect(result.isRight()).toBe(true)
  })
})
