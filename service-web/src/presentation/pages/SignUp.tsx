import { type AddAccount } from '@/domain/use-cases/add-account'
import { Input } from '@/presentation/components/Input'
import { Text } from '@/presentation/components/Text'
import { Button } from '@/presentation/components/Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface SignUpProps {
  addAccount: AddAccount
}

interface SignUpFormData {
  username: string
  password: string
}

export function SignUp ({ addAccount }: SignUpProps): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>()

  async function handleAddAccountSubmit ({ username, password }: SignUpFormData) {
    await addAccount.add({
      username,
      password
    })
  }

  return (
    <main className="flex items-stretch h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[100%] max-w-[500px]">

        <form onSubmit={handleSubmit(handleAddAccountSubmit)}>
          <Text className="font-bold text-xl text-center mb-8">Sign up</Text>
          <Input placeholder="Username" autoComplete="off" {...register('username', { required: true })} />
          {errors.username && <Text className="text-red-500">{errors.username.message}</Text>}
          <Input type="password" placeholder="Password" {...register('password', { required: true })} />
          {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}
          <div className="flex w-[100%] justify-center">
            <Button className="bg-red-600 p-4 rounded-xl">
              <ArrowRight className="text-white" size={28} />
            </Button>
          </div>
        </form>
        <Link href="/">
          <Text className="text-gray-400 font-bold text-xs uppercase mt-4 hover:text-black">Already have an account?</Text>
        </Link>
      </div>
      <div className="flex flex-1 bg-[url('/signup.jpg')] bg-no-repeat bg-top"></div>
    </main>
  )
}
