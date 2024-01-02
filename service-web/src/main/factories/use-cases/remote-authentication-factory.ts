import { RemoteAuthentication } from '@/data/use-cases/remote-authentication'
import { type Authentication } from '@/domain/use-cases/authentication'
import { makeAccountApiUrl } from '../http/api-url-factory'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeAccountApiUrl('/login'), makeAxiosHttpClient())
