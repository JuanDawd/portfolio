'use client'

import { PlanetsList } from './Constants'
import Image from 'next/image'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/UI/carousel'
import { useEffect, useState } from 'react'

export function PlanetsCarousel() {
  const planets = PlanetsList
  const [api, setApi] = useState<CarouselApi>()
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      if (isPlaying) {
        api.scrollNext()
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [api, isPlaying])

  return (
    <div className='flex h-[200px] w-full items-center justify-center'>
      <Carousel
        className='w-full'
        setApi={setApi}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        opts={{
          align: 'center',
          loop: true,
          duration: 500,
          dragFree: true,
          skipSnaps: false,
        }}
      >
        <CarouselContent>
          {planets.map(planet => (
            <CarouselItem
              key={planet.planet}
              className='flex basis-1/3 flex-col items-center gap-2'
            >
              <div className='h-8 w-8'>
                <Image
                  src={planet.icon}
                  width={32}
                  height={32}
                  alt={planet.planet}
                  className='h-full w-full'
                />
              </div>
              <span className=' rounded-md bg-primary px-3 py-1 text-center text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'>
                {planet.planet}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
