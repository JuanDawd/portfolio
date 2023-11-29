'use client'
import { motion } from 'framer-motion'
import CustomLink from './CustomLink'
import { useTheme } from 'next-themes'
import { Button } from '../UI/button'
import { GithubIcon, LinkedinIcon, MoonStarIcon, SunIcon } from 'lucide-react'

const DesktopNavBar = () => {
  const { theme, setTheme } = useTheme()

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
          {theme === 'dark' ? (
            <MoonStarIcon className='h-4 w-4' />
          ) : (
            <SunIcon className='h-4 w-4' />
          )}
        </Button>
      </nav>
    </div>
  )
}

export default DesktopNavBar
