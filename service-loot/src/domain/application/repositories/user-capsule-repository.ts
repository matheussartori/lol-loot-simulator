import { UserCapsule } from '@/domain/enterprise/entities/user-capsule'

export abstract class UserCapsuleRepository {
  abstract findById(userCapsuleId: string): Promise<UserCapsule | null>
}
