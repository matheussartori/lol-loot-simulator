import { UserCapsule } from '@/domain/enterprise/entities/user-capsule'

export class UserCapsulePresenter {
  static toHTTP(userCapsule: UserCapsule) {
    return {
      id: userCapsule.id.toString(),
      // capsule: CapsulePresenter.toHTTP(userCapsule.capsule),
    }
  }
}
