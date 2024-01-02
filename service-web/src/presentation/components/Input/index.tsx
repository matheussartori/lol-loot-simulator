import { type InputHTMLAttributes } from 'react'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input ({ className, ...props }: InputProps) {
  return (
    <div className="mb-2">
      <input type="text" className={`bg-gray-200 rounded-md p-4 ${className}`} {...props} />
    </div>
  )
}
