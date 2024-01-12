import { UserCapsule } from '@/domain/enterprise/entities/user-capsule'

export abstract class UserCapsuleRepository {
  abstract findUnopenedByUserId(userId: string): Promise<UserCapsule[]>
  abstract findById(userCapsuleId: string): Promise<UserCapsule | null>
  abstract create(userCapsule: UserCapsule): Promise<void>
  abstract save(userCapsule: UserCapsule): Promise<void>
}
