'use client'

import store from '@/presentation/data/store'
import { type ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

interface ProviderProps {
  children: ReactNode
}

export function Provider ({ children }: ProviderProps): JSX.Element {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}
