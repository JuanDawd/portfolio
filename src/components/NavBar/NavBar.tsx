'use client'

import React from 'react'
import Logo from './Logo'
import MobileNavBar from './MobileNavBar'
import DesktopNavBar from './DesktopNavBar'

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen(pastValue => {
      return !pastValue
    })
  }

  return (
    <header className='sticky top-0 z-10 flex w-full items-center justify-between  border-b-2 border-accent bg-background px-32 py-8 font-medium lg:px-16 md:px-12 sm:px-8'>
      {/*
			// TODO: change here to radixUI Button
			*/}
      <button
        aria-label='menu'
        className='hidden flex-col items-center justify-center lg:flex'
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-accent transition-all duration-300 ease-out  ${
            isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-accent transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded-sm bg-accent transition-all duration-300 ease-out ${
            isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
          }`}
        />
      </button>

      <DesktopNavBar />

      {isOpen && <MobileNavBar handleClick={handleClick} />}

      <div className='absolute left-1/2  top-1/2 -translate-x-1/2  -translate-y-1/2'>
        <Logo />
      </div>
    </header>
  )
}
export default NavBar
