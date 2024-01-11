import { Input } from '@/presentation/components/Input'
import { Text } from '@/presentation/components/Text'
import { Button } from '@/presentation/components/Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { type Authentication } from '@/domain/use-cases/authentication'
import { useState, type FormEvent } from 'react'
import { useAppDispatch } from '../data/store'
import { setAccessToken } from '../data/slices/userSlice'
import { useRouter } from 'next/navigation'

interface LoginProps {
  authentication: Authentication
}

export function Login ({ authentication }: LoginProps): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()

  async function handleLoginSubmit (event: FormEvent) {
    event.preventDefault()

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

        <form onSubmit={handleLoginSubmit}>
        <Text className="font-bold text-xl text-center mb-8">Sign in</Text>
          <Input id="username" placeholder="Username" autoComplete="off" onChange={e => setUsername(e.target.value)} />
          <Input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
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
