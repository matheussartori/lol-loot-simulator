import Link from 'next/link'
import { type ReactNode } from 'react'

interface NavItemProps {
  children: ReactNode
  url: string
}

export function NavItem ({ children, url }: NavItemProps) {
  return (
    <Link href={url} className="py-6 px-4">
      {children}
    </Link>
  )
}
