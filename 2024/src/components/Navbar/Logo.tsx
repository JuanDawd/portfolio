'use client'

import Link from 'next/link'
import { Share_Tech_Mono } from 'next/font/google'

const ShareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
})

const Logo = () => {
  return (
    <div className='mt-1 flex items-center justify-center'>
      <Link
        href='/'
        className={`flex h-16 w-24 items-center justify-center text-2xl ${ShareTechMono.className}`}
      >
        <span className='text-accent'>{'<'}</span>
        JuanDawd
        <span className='text-accent'>&nbsp;{'/>'}</span>
      </Link>
    </div>
  )
}

export default Logo
