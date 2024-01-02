import { type AccountModel } from '@/domain/models/account-model'

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AuthenticationModel>
}

export interface AuthenticationParams {
  username: string
  password: string
}

export type AuthenticationModel = AccountModel
