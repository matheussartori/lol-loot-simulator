import { User } from '@/domain/enterprise/entities/user'

export abstract class UserRepository {
  abstract findById(id: string): Promise<User | null>
  abstract findByUsername(username: string): Promise<User | null>
  abstract create(user: User): Promise<void>
}
