'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, MoonStarIcon, SunIcon } from 'lucide-react'

import CustomLink from './CustomLink'
import { Button } from '../UI/button'
import { ReactNode, useEffect, useState } from 'react'

const DesktopNavbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [icon, setIcon] = useState<ReactNode>(
    <MoonStarIcon className='h-4 w-4' />
  )
  useEffect(() => {
    const checkTheme = () => {
      if (theme === 'system' && resolvedTheme) {
        return resolvedTheme === 'dark'
      } else {
        return theme === 'dark'
      }
    }

    const value = checkTheme()

    setIcon(
      value ? (
        <MoonStarIcon className='h-4 w-4' />
      ) : (
        <SunIcon className='h-4 w-4' />
      )
    )
  }, [theme, resolvedTheme])

  const handleChangeMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className='flex w-full items-center justify-between lg:hidden'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/projects' title='Projects' className='ml-4' />
      </nav>

      <nav className='flex flex-wrap items-center justify-center'>
        <motion.a
          aria-label='Check more about me in my Github'
          href='https://github.com/JuankDawd'
          target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mr-3 w-6'
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href='https://linkedin.com/in/juandawd'
          target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='mx-3 w-6'
        >
          <LinkedinIcon />
        </motion.a>

        <Button
          aria-label='Toggle Dark Mode'
          className='ml-3 h-6 w-6'
          variant='outline'
          size='icon'
          onClick={handleChangeMode}
        >
          {icon}
        </Button>
      </nav>
    </div>
  )
}

export default DesktopNavbar
