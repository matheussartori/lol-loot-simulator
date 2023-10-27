import { User } from '@/domain/enterprise/entities/user'

export class UserPresenter {
  static toHTTP(user: User) {
    return {
      id: user.id.toString(),
      username: user.username,
    }
  }
}
