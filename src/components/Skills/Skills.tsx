'use client'

import { SolarSystemPlot } from '../SolarSystem'
import { PlanetsCarousel } from '../SolarSystem/PlanetsCarousel'

const Skills = () => {
  return (
    <>
      <div className='m-24'>
        <div className='block md:hidden '>
          <SolarSystemPlot />
        </div>
        <div className='hidden md:block'>
          <h2 className='mb-10 mt-64 w-full text-center text-8xl font-bold md:mt-32 md:text-6xl'>
            Skills
          </h2>
          <PlanetsCarousel />
        </div>
      </div>
    </>
  )
}

export default Skills
