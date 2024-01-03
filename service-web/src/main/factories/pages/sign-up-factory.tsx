import React from 'react'
import { SignUp } from '@/presentation/pages/SignUp'
import { makeRemoteAddAccount } from '../use-cases/remote-add-account-factory'

export const makeSignUp = (): JSX.Element => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
    />
  )
}
