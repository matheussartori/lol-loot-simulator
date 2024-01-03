import { type AddAccountParams, type AddAccount } from '@/domain/use-cases/add-account'
import { HttpStatusCode, type HttpClient } from '@/data/protocols/http/http-client'
import { EmailInUseError } from '@/domain/errors/email-in-use-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<void>
  ) {}

  async add (params: AddAccountParams): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created: return httpResponse.body
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}
