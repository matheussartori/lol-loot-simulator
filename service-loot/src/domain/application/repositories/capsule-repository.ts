import { Capsule } from '@/domain/enterprise/entities/capsule'

export abstract class CapsuleRepository {
  abstract findById(capsuleId: string): Promise<Capsule | null>
}
