import { CapsuleOdd } from '@/domain/enterprise/entities/capsule-odd'

export abstract class CapsuleOddRepository {
  abstract findByCapsuleId(capsuleId: string): Promise<CapsuleOdd[]>
}
