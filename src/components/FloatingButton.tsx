'use client'

import { CircularText } from './Icons'
import Link from 'next/link'

const FloatingButton = () => {
  return (
    <div className='fixed bottom-4 left-4 flex items-center justify-center overflow-hidden md:absolute md:bottom-auto md:left-auto md:right-8 md:top-0 sm:right-0'>
      <div className='relative flex h-auto w-48 items-center justify-center md:w-24'>
        {/* 
					// TODO: Change Image Outer Ring
				*/}
        <CircularText className='animate-spin-slow' />

        <Link
          href='mailto:juandawdb@gmail.com'
          className=' absolute left-1/2 top-1/2 flex h-20 w-20 
					-translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full  border border-solid font-semibold shadow-md
					md:h-12 md:w-12 md:text-[10px]
					'
        >
          Hire me
        </Link>
      </div>
    </div>
  )
}

export default FloatingButton
