import React, { useRef } from 'react'
import Details from './Details'
import { ExperienceList } from './Constants'
import { SideScrollBar } from '@/lib/FramerElements'

const Experience = () => {
  const ref = useRef(null)
  const offset = ['start end', 'center start']

  return (
    <div className='my-64'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-[75%] lg:w-[90%] md:w-full'>
        <SideScrollBar ref={ref} offset={offset} />
        <ul className='ml-4 flex w-full flex-col items-start justify-between xs:ml-2'>
          {ExperienceList.map((value, key) => (
            <Details key={key} {...value} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience
