import { Input } from '@/presentation/components/Input'
import { Text } from '@/presentation/components/Text'
import { Button } from '@/presentation/components/Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { type Authentication } from '@/domain/use-cases/authentication'
import { useState, type FormEvent } from 'react'

interface LoginProps {
  authentication: Authentication
}

export function Login ({ authentication }: LoginProps): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLoginSubmit (event: FormEvent) {
    event.preventDefault()

    await authentication.auth({
      username,
      password
    })
  }

  return (
    <main className="flex items-stretch h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[100%] max-w-[500px]">

        <form onSubmit={handleLoginSubmit}>
          <Text>Login</Text>
          <Input id="username" placeholder="Username" autoComplete="off" onChange={e => setUsername(e.target.value)} />
          <Input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <Button className="bg-red-500 p-3 rounded-lg">
            <ArrowRight className="text-white" size={26} />
          </Button>
        </form>
        <Link href="/signup">
          <Text className="text-gray-400 font-bold text-xs uppercase mt-4">Create an account</Text>
        </Link>
      </div>
      <div className="flex flex-1 bg-[url('/login.jpg')] bg-no-repeat bg-top"></div>
    </main>
  )
}
