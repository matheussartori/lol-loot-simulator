import { forwardRef, type InputHTMLAttributes } from 'react'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }: InputProps, ref) => {
  return (
    <fieldset className="mb-2">
      <input ref={ref} type="text" className={`bg-gray-100 rounded-md p-4 ${className}`} {...props} />
    </fieldset>
  )
})

Input.displayName = 'Input'

export { Input }
