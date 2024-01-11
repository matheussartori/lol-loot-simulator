import { Input } from '@/presentation/components/Input'
import { Text } from '@/presentation/components/Text'
import { Button } from '@/presentation/components/Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { type Authentication } from '@/domain/use-cases/authentication'
import { useAppDispatch } from '../data/store'
import { setAccessToken } from '../data/slices/userSlice'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

interface LoginProps {
  authentication: Authentication
}

interface LoginFormData {
  username: string
  password: string
}

export function Login ({ authentication }: LoginProps): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>()
  const dispatch = useAppDispatch()
  const router = useRouter()

  async function handleLoginSubmit ({ username, password }: LoginFormData) {
    try {
      const response = await authentication.auth({
        username,
        password
      })

      dispatch(setAccessToken(response.accessToken))

      router.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="flex items-stretch h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[100%] max-w-[500px]">

        <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <Text className="font-bold text-xl text-center mb-8">Sign in</Text>
          <Input id="username" placeholder="Username" autoComplete="off" {...register('username', { required: true })} />
          {errors.username && <Text className="text-red-500">{errors.username.message}</Text>}
          <Input id="password" type="password" placeholder="Password" {...register('password', { required: true })} />
          {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}
          <div className="flex w-[100%] justify-center">
            <Button className="bg-red-600 p-4 rounded-xl">
              <ArrowRight className="text-white" size={28} />
            </Button>
          </div>
        </form>
        <Link href="/signup">
          <Text className="text-gray-400 font-bold text-xs uppercase mt-4 hover:text-black">Create an account</Text>
        </Link>
      </div>
      <div className="flex flex-1 bg-[url('/login.jpg')] bg-no-repeat bg-top"></div>
    </main>
  )
}
