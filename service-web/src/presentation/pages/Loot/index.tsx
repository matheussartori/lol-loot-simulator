import { Label } from './components/Label'

export function Loot () {
  return (
    <main className="flex items-center w-[100%] h-[calc(100vh-80px)]">
      <div className="w-[400px] h-[100%] px-2 py-4">
        <Label>
          Capsules
        </Label>
        <Label>
          Materials
        </Label>
      </div>
      <div className="flex-grow h-[100%]"></div>
    </main>
  )
}
