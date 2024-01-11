import { Coins, Hammer, Backpack } from '@phosphor-icons/react'
import { NavItem } from './NavItem'

export function NavBar () {
  return (
    <div className="bg-azure-900 h-20 border-t-gold-500 border-t-2 flex items-center justify-end border-b-charcoal-500 border-b-[1px]">
      <NavItem url="/dashboard/collection">
        <Backpack className="text-gold-100 hover:text-gold-50" size={25} />
      </NavItem>
      <NavItem url="/dashboard/loot">
        <Hammer className="text-gold-100 hover:text-gold-50" size={25} />
      </NavItem>
      <NavItem url="/dashboard/store">
        <Coins className="text-gold-100 hover:text-gold-50" size={25} />
      </NavItem>
    </div>
  )
}
