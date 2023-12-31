import { Capsule } from '@/domain/enterprise/entities/capsule'

export abstract class CapsuleRepository {
  abstract findById(capsuleId: string): Promise<Capsule | null>
  abstract findBySlug(slug: string): Promise<Capsule | null>
  abstract create(capsule: Capsule): Promise<void>
}
