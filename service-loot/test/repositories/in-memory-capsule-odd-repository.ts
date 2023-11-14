import { CapsuleOddRepository } from '@/domain/application/repositories/capsule-odd-repository'
import { CapsuleOdd } from '@/domain/enterprise/entities/capsule-odd'

export class InMemoryCapsuleOddRepository implements CapsuleOddRepository {
  public items: CapsuleOdd[] = []

  async findByCapsuleId(capsuleId: string): Promise<CapsuleOdd[]> {
    const capsuleOdds = this.items.filter(
      (item) => item.capsuleId.toString() === capsuleId,
    )

    return capsuleOdds
  }
}
