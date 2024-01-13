import { type UserCapsuleModel } from '../models/user-capsule-model'
import { type UserItemModel } from '../models/user-item-model'

export interface FetchLootItems {
  fetch: () => Promise<FetchLootItemsModel[]>
}

export interface FetchLootItemsModel {
  userItems: UserItemModel[]
  userCapsules: UserCapsuleModel[]
}
