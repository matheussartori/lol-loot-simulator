import { UserItemRepository } from '@/domain/application/repositories/user-item-repository'
import { UserItem } from '@/domain/enterprise/entities/user-item'

export class InMemoryUserItemRepository implements UserItemRepository {
  public items: UserItem[] = []

  async findByUserId(userId: string): Promise<UserItem[]> {
    const userItems = this.items.filter(
      (item) => item.userId.toString() === userId,
    )

    return userItems
  }

  async create(userItem: UserItem): Promise<void> {
    this.items.push(userItem)
  }
}
