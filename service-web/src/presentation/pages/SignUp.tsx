import { type AddAccount } from '@/domain/use-cases/add-account'
import { type FormEvent } from 'react'
import { Input } from '@/presentation/components/Input'
import { Text } from '@/presentation/components/Text'
import { Button } from '@/presentation/components/Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface SignUpProps {
  addAccount: AddAccount
}

export function SignUp ({ addAccount }: SignUpProps): JSX.Element {
  async function handleAddAccountSubmit (event: FormEvent) {
    event.preventDefault()

    await addAccount.add({
      username: 'admin',
      password: 'admin'
    })
  }

  return (
    <main className="flex items-stretch h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[100%] max-w-[500px]">

        <form onSubmit={handleAddAccountSubmit}>
          <Text>SignUp</Text>
          <Input id="username" placeholder="Username" autoComplete="off" />
          <Input id="password" type="password" placeholder="Password" />
          <Button className="bg-red-500 p-3 rounded-lg">
            <ArrowRight className="text-white" size={26} />
          </Button>
        </form>
        <Link href="/">
          <Text className="text-gray-400 font-bold text-xs uppercase mt-4">Already have an account?</Text>
        </Link>
      </div>
      <div className="flex flex-1 bg-[url('/login.jpg')] bg-no-repeat bg-top"></div>
    </main>
  )
}
