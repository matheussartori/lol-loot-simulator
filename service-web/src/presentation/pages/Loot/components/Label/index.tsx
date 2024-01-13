import { Text } from '@/presentation/components/Text'
import { type ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
}

export function Label ({ children }: LabelProps) {
  return (
    <div className="mb-5 cursor-pointer select-none">
      <Text className="uppercase text-gold-50 text-xs font-bold mb-1">{children}</Text>
      <hr className="border-t-gold-500" />
    </div>
  )
}
