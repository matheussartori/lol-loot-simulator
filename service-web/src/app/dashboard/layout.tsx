import { type ReactNode } from 'react'

export default function DashboardLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="h-screen bg-gradient-to-b from-azure-900 to-azure-700">
      {children}
    </div>
  )
}
