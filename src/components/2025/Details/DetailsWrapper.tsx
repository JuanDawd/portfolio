import { useRef } from 'react'

import { motion, useScroll } from 'framer-motion'

import type { DetailsProps } from './Details.type'

const DetailsWrapper = ({ children }: DetailsProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  })
  return (
    <li
      ref={ref}
      className='mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]'
    >
      <figure className='absolute left-0 stroke-accent'>
        <svg
          className='-rotate-90 md:h-[60px] md:w-[60px] xs:h-[40px] xs:w-[40px] '
          width={75}
          height={75}
          viewBox='0 0 100 100'
        >
          <circle cx={75} cy={50} r={20} className=' fill-none stroke-1' />
          <motion.circle
            cx={75}
            cy={50}
            r={20}
            className=' fill-background stroke-[5px] '
            style={{ pathLength: scrollYProgress }}
          />
          <circle
            cx={75}
            cy={50}
            r={10}
            className='animate-pulse fill-accent stroke-1'
          />
        </svg>
      </figure>
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
