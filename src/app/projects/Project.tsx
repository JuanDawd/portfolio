import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

import { FramerImage } from '@/lib/FramerElements'

import TooltipedElement from '@/components/UI/TooltipedButton'

import { ProjectProps } from './projects.type'
import { Button } from '@/components/UI/button'

const Project = ({
  title,
  technologies,
  github,
  image,
  type,
  role,
  deployment,
}: ProjectProps) => {
  return (
    <article className='relative flex w-full flex-col items-center justify-start rounded-2xl border border-solid border-foreground bg-background p-6 md:min-h-[382px] xs:p-4'>
      <div className='absolute left-3 top-3 -z-10 h-[100%] w-[100%] rounded-[1.75rem] bg-primary/10' />

      <FramerImage
        src={image}
        alt={title}
        className='h-auto w-full overflow-hidden rounded-lg'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
      />

      <div className='mt-4 flex w-full flex-col items-start justify-between'>
        <div className='flex w-full items-center justify-between text-xl font-medium text-secondary-foreground/50 lg:text-lg md:gap-1 md:text-base'>
          <span>{type}</span>

          <span>{role}</span>
        </div>
        <TooltipedElement
          tTMessage={
            deployment === '' ? 'This project has no demo.' : 'Check the demo.'
          }
        >
          {deployment !== '' ? (
            <Link
              href={deployment}
              target='_blank'
              className='underline-offset-2 hover:underline'
            >
              <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>
                {title}
              </h2>
            </Link>
          ) : (
            <h2 className='my-2 w-full text-left text-3xl font-bold underline-offset-2 hover:underline lg:text-2xl'>
              {title}
            </h2>
          )}
        </TooltipedElement>
        <div className='my-2 flex w-full flex-col gap-2'>
          <div className='flex w-full items-center justify-between'>
            <span className='text-xl font-medium text-secondary-foreground/50 lg:text-lg md:text-base'>
              Technologies
            </span>

            {github && (
              <Button
                asChild
                variant='link'
                size='icon'
                className='flex items-center justify-center gap-4 text-primary-foreground'
              >
                <Link
                  href={github}
                  target='_blank'
                  className='text-lg font-semibold md:text-base'
                >
                  {' '}
                  <ExternalLink className='h-4 w-4' />
                </Link>
              </Button>
            )}
          </div>
          <div className='mt-2 flex flex-wrap items-center justify-start gap-2'>
            {technologies.map(({ icon, name }, key) => (
              <TooltipedElement tTMessage={name} key={name + '-' + key}>
                <Image
                  src={icon}
                  alt={name}
                  className=' h-5 w-5  md:h-4 md:w-4'
                />
              </TooltipedElement>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
