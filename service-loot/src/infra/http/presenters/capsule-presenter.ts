import { Capsule } from '@/domain/enterprise/entities/capsule'

export class CapsulePresenter {
  static toHTTP(capsule: Capsule) {
    return {
      id: capsule.id.toString(),
      name: capsule.name,
      requiresKey: capsule.requiresKey,
    }
  }
}
