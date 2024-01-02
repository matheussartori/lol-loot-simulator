import { CapsuleRepository } from '@/domain/application/repositories/capsule-repository'
import { Capsule } from '@/domain/enterprise/entities/capsule'

export class InMemoryCapsuleRepository implements CapsuleRepository {
  public items: Capsule[] = []

  async findById(capsuleId: string): Promise<Capsule | null> {
    const capsule = this.items.find(
      (capsule) => capsule.id.toString() === capsuleId,
    )

    if (!capsule) {
      return null
    }

    return capsule
  }

  async findBySlug(slug: string): Promise<Capsule | null> {
    const capsule = this.items.find(
      (capsule) => capsule.slug === slug,
    )

    if (!capsule) {
      return null
    }

    return capsule
  }

  async create(capsule: Capsule): Promise<void> {
    this.items.push(capsule)
  }
}
