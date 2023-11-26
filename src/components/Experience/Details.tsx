import { LiIcon } from '@/lib/FramerElements'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
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
        <h3 className='text-2xl font-bold capitalize sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            target='_blank'
            href={companyLink}
            className='capitalize text-primary-foreground/50 hover:underline'
          >
            @{company}
          </a>
        </h3>
        <span className='font-medium capitalize text-secondary-foreground/75  xs:text-sm'>
          {time} | {address}
        </span>
        <p className='w-full font-medium md:text-sm'>{work}</p>
      </motion.div>
    </li>
  )
}

export default Details
