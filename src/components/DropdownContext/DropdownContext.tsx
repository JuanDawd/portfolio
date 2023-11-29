import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../UI/dropdown-menu'
import { Button } from '../UI/button'

type DropdownContextProps = {
  triggerButtonTittle: string
  triggerButtonIcon: React.ReactElement
  children: React.ReactNode
}

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
