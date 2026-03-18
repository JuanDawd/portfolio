import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, MoonStarIcon, SunIcon } from 'lucide-react'

import CustomLink from './CustomLink'
import { Button } from '../UI/button'

const emptySubscribe = () => () => {}

const DesktopNavbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const isDark =
    theme === 'system' && resolvedTheme
      ? resolvedTheme === 'dark'
      : theme === 'dark'

  const handleChangeMode = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className='flex w-full items-center justify-between lg:hidden'>
      <nav>
        <CustomLink href='/2024' title='Home' className='mr-4' />
        <CustomLink href='/2024/projects' title='Projects' className='ml-4' />
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
          {mounted ? (
            isDark ? (
              <MoonStarIcon className='h-4 w-4' />
            ) : (
              <SunIcon className='h-4 w-4' />
            )
          ) : (
            <span className='h-4 w-4' />
          )}
        </Button>
      </nav>
    </div>
  )
}

export default DesktopNavbar
