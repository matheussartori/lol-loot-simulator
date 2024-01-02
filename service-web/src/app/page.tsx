import { Input } from '@/presentation/components/Input'
import { Text } from '@/presentation/components/Text'
import { Button } from '@/presentation/components/Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Home () {
  return (
    <main className="flex items-stretch h-[100vh]">
      <div className="flex flex-col items-center justify-center w-[100%] max-w-[500px]">
        <Text>Login</Text>
        <Input />
        <Input type="password" />
        <Button className="bg-red-500 p-3 rounded-lg">
          <ArrowRight className="text-white" size={26} />
        </Button>
        <Link href="/signup">
          <Text className="text-gray-400 font-bold text-xs uppercase mt-4">Create an account</Text>
        </Link>
      </div>
      <div className="flex flex-1 bg-[url('/login.jpg')] bg-no-repeat bg-top"></div>
    </main>
  )
}
