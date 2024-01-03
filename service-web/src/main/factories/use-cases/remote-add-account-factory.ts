import { makeAccountApiUrl } from '../http/api-url-factory'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'
import { RemoteAddAccount } from '@/data/use-cases/remote-add-account'
import { type AddAccount } from '@/domain/use-cases/add-account'

export const makeRemoteAddAccount = (): AddAccount =>
  new RemoteAddAccount(makeAccountApiUrl('/accounts'), makeAxiosHttpClient())
