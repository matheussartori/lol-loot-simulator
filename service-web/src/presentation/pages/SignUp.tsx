import { type AddAccount } from '@/domain/use-cases/add-account'
import { type FormEvent, useState } from 'react'
import { Input } from '@/presentation/components/Input'
import { Text } from '@/presentation/components/Text'
import { Button } from '@/presentation/components/Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface SignUpProps {
  addAccount: AddAccount
}

export function SignUp ({ addAccount }: SignUpProps): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleAddAccountSubmit (event: FormEvent) {
    event.preventDefault()

    await addAccount.add({
      username,
      password
    })
  }

  return (
    <main className="flex items-stretch h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[100%] max-w-[500px]">

        <form onSubmit={handleAddAccountSubmit}>
          <Text className="font-bold text-xl text-center mb-8">Sign up</Text>
          <Input id="username" placeholder="Username" autoComplete="off" onChange={e => setUsername(e.target.value)} />
          <Input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
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
      <div className="flex flex-1 bg-[url('/login.jpg')] bg-no-repeat bg-top"></div>
    </main>
  )
}
