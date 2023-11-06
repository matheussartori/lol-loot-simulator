import { UserItem } from '@/domain/enterprise/entities/user-item'

export abstract class UserItemRepository {
  abstract findByUserId(userId: string): Promise<UserItem[]>
  abstract create(userItem: UserItem): Promise<void>
}
