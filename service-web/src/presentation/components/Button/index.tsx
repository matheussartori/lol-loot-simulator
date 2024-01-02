import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button ({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}
