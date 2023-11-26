import { Button } from '@/components/UI/button'
import { LiIcon } from '@/lib/FramerElements'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const Details = ({
  type,
  place,
  info,
  time,
}: {
  type: string
  place: string
  info?: string
  time: string
}) => {
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
        <h3 className='text-2xl font-bold capitalize  sm:text-xl xs:text-lg'>
          {type}&nbsp;
        </h3>
        <span className='font-medium capitalize text-secondary-foreground/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='w-full font-medium md:text-sm'>{info}</p>
      </motion.div>
    </li>
  )
}

export default Details
