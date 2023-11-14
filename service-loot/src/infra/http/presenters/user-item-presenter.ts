import { UserItem } from '@/domain/enterprise/entities/user-item'

export class UserItemPresenter {
  static toHTTP(userItem: UserItem) {
    return {
      id: userItem.id.toString(),
      itemId: userItem.itemId.toString(),
      userCapsuleId: userItem.userCapsuleId
        ? userItem.userCapsuleId.toString()
        : null,
    }
  }
}
