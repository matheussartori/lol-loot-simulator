'use client'

import { NavBar } from '@/presentation/pages/Dashboard/components/NavBar'
import { type ReactNode } from 'react'

export default function DashboardLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="h-screen bg-gradient-to-b from-azure-900 to-azure-700">
      <NavBar />
      {children}
    </div>
  )
}
