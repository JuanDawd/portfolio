'use client'

import { useRef } from 'react'

import { SideScrollBar } from '@/lib/FramerElements'

import { ExperienceDetails } from '../Details'
import { ExperienceList } from './Constants'

const Experience = () => {
  const ref = useRef(null)
  const offset = ['start end', 'center start']

  return (
    <div className='my-32'>
      <h2 className='mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-[75%] lg:w-[90%] md:w-full'>
        <SideScrollBar ref={ref} offset={offset} />
        <ul className='ml-4 flex w-full flex-col items-start justify-between xs:ml-2'>
          {ExperienceList.map((value, key) => (
            <ExperienceDetails key={key} {...value} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience
