import { useRef } from 'react'

import { motion, useScroll } from 'framer-motion'

import KnowledgeDetails from '../Details/KnowledgeDetails'
import { EducationList } from './Constants'

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className='my-32'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl'>
        Education
      </h2>
      <div
        ref={ref}
        className='relative mx-auto w-[75%]  lg:w-[90%] md:w-full '
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 mt-2 h-full w-1 origin-top bg-accent md:left-[30px] md:w-[2px] xs:left-[20px] '
        />
        <ul className='ml-4 flex w-full flex-col items-start justify-between xs:ml-2'>
          {EducationList.map((value, key) => (
            <KnowledgeDetails key={key} {...value} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Education
