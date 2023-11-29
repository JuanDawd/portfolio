'use client'
import { FramerImage } from '@/lib/FramerElements'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

type ProjectSlideshowType = {
  imagesArray: StaticImageData[]
}

export function ProjectSlideshow({ imagesArray }: ProjectSlideshowType) {
  const [slide, setSlide] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prevValue => (prevValue + 1) % imagesArray.length)
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='relative flex items-center'>
      <div className='relative z-0 flex-auto overflow-hidden rounded-lg'>
        <div className='left-1/2 flex items-center gap-1 transition-all'>
          {imagesArray.map((item, index) => (
            <FramerImage
              key={index}
              src={item}
              alt={item.src}
              className='h-auto w-full rounded-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              priority
              sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
            />
          ))}
        </div>
      </div>
      {imagesArray.length > 1 && (
        <div className='absolute bottom-4 left-1/2 z-10 flex h-4 -translate-x-1/2 items-center rounded-lg px-0 py-2'>
          {imagesArray.map((item, index) => (
            <div
              key={index}
              className={
                'm-[0.2rem] h-2 w-2 cursor-pointer rounded-xl bg-zinc-600 active:bg-zinc-50' +
                (slide === index ? ' active' : '')
              }
              onClick={() => setSlide(index)}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}
