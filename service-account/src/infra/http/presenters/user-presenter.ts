import { User } from '@prisma/client'

export class UserPresenter {
  static toHTTP(user: User) {
    return {
      id: user.id.toString(),
      username: user.username,
    }
  }
}
