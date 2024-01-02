import React from 'react'
import { makeRemoteAuthentication } from '../use-cases/remote-authentication-factory'
import { Login } from '@/presentation/pages/Login'

export const makeLogin = (): JSX.Element => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
    />
  )
}
