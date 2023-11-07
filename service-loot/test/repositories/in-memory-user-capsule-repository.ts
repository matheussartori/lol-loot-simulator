import { UserCapsuleRepository } from '@/domain/application/repositories/user-capsule-repository'
import { UserCapsule } from '@/domain/enterprise/entities/user-capsule'

export class InMemoryUserCapsuleRepository implements UserCapsuleRepository {
  public items: UserCapsule[] = []

  async findById(userCapsuleId: string): Promise<UserCapsule | null> {
    const userCapsule = this.items.find(
      (item) => item.id.toString() === userCapsuleId,
    )

    if (!userCapsule) {
      return null
    }

    return userCapsule
  }

  async create(userCapsule: UserCapsule): Promise<void> {
    this.items.push(userCapsule)
  }
}
