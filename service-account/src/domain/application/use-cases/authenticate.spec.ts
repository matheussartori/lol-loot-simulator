import { InMemoryUserRepository } from 'test/repositories/in-memory-user-repository'
import { AuthenticateUseCase } from './authenticate'
import { FakeHasher } from 'test/cryptography/fake-hasher'
import { FakeEncrypter } from 'test/cryptography/fake-encrypter'
import { WrongCredentialsError } from './errors/wrong-credentials-error'
import { makeUser } from 'test/factories/make-user'

let inMemoryUserRepository: InMemoryUserRepository
let fakeHasher: FakeHasher
let encrypter: FakeEncrypter

let sut: AuthenticateUseCase

describe('authenticate user use case', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    fakeHasher = new FakeHasher()
    encrypter = new FakeEncrypter()

    sut = new AuthenticateUseCase(inMemoryUserRepository, fakeHasher, encrypter)
  })

  it('should not be able to authenticate an user with a non-existing username', async () => {
    const result = await sut.execute({
      username: 'non-existing-username',
      password: 'any-password',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(WrongCredentialsError)
  })

  it('should not be able to authenticate an user with a wrong password', async () => {
    const user = makeUser({
      password: await fakeHasher.hash('password'),
    })

    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      username: user.username,
      password: 'wrong-password',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(WrongCredentialsError)
  })

  it('should be able to authenticate an user', async () => {
    const user = makeUser({
      password: await fakeHasher.hash('password'),
    })

    await inMemoryUserRepository.create(user)

    const result = await sut.execute({
      username: user.username,
      password: 'password',
    })

    expect(result.isRight()).toBe(true)
  })
})
