'use client'

import { Button } from '../UI/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from '../UI/dropdown-menu'
import { DropdownContextProps } from './DropdownContext.type'

const DropdownContext = ({
  triggerButtonTittle,
  triggerButtonIcon,
  children,
}: DropdownContextProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='flex items-center justify-center gap-4 text-lg font-semibold'>
          {triggerButtonTittle}
          {triggerButtonIcon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=' bg-none'>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownContext
