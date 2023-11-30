'use client'

import { useRef } from 'react'

import { LiIcon } from '@/lib/FramerElements'
import { motion } from 'framer-motion'

import { DetailsProps } from './Details.type'

const DetailsWrapper = ({ children }: DetailsProps) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      className='mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {children}
      </motion.div>
    </li>
  )
}

export default DetailsWrapper
