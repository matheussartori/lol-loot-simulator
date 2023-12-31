import { type InputHTMLAttributes } from 'react'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input ({ className, ...props }: InputProps) {
  return (
    <fieldset className="mb-2">
      <input type="text" className={`bg-gray-100 rounded-md p-4 ${className}`} {...props} />
    </fieldset>
  )
}
