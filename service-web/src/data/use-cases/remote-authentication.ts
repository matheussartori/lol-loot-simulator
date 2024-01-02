import { type AuthenticationParams, type Authentication, type AuthenticationModel } from '@/domain/use-cases/authentication'
import { HttpStatusCode, type HttpClient } from '../protocols/http/http-client'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthenticationModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AuthenticationModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new Error('Credenciais inválidas')
      default: throw new Error('Algo de errado aconteceu. Tente novamente em breve.')
    }
  }
}

export type RemoteAuthenticationModel = AuthenticationModel
