import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/presentation/styles/globals.css'
import { type ReactNode } from 'react'
import { Provider } from './StoreProvider'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'League of Legends Loot Simulator',
  description: 'Simulate hextech chests openings and more with the League of Legends loot simulator.'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={roboto.className}>{children}</body>
      </Provider>
    </html>
  )
}
