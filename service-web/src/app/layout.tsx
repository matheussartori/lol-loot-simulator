import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'League of Legends Loot Simulator',
  description: 'Simulate hextech chests openings and more with the League of Legends loot simulator.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
