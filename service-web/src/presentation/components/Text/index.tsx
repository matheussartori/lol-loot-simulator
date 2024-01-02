import { type HTMLAttributes, type ReactNode } from 'react'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function Text ({ children, ...props }: TextProps) {
  return (
    <p {...props}>{children}</p>
  )
}
