'use client'

import Link from 'next/link'
import { Share_Tech_Mono } from 'next/font/google'
import { Label } from '../UI/label'

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
        <Label className='text-accent'>{'<'}</Label>
        JuanDawd
        <Label className='text-accent'>&nbsp;{'/>'}</Label>
      </Link>
    </div>
  )
}

export default Logo
