import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

import { ProjectSlideshow } from '@/components/ProjectSlideshow'
import TooltipedElement from '@/components/UI/TooltipedButton'
import { Label } from '@/components/UI/label'

import { FeaturedProjectProps } from './projects.type'
import { Button } from '@/components/UI/button'

const FeaturedProject = ({
  title,
  technologies,
  github,
  image,
  type,
  deployment,
  description,
  role,
}: FeaturedProjectProps) => {
  return (
    <article className='relative flex w-full items-center justify-between rounded-2xl border border-solid border-foreground bg-background p-12 shadow-2xl lg:flex-col lg:p-8 xs:px-4'>
      <div className='absolute left-3 top-3 -z-10 h-[100%] w-[100%] rounded-[1.75rem] bg-primary/10 xs:w-full' />
      <div className='w-1/2 overflow-hidden lg:w-full'>
        <ProjectSlideshow imagesArray={[image]} />
        {github !== undefined && (
          <TooltipedElement tTMessage='This project is private'>
            <Button
              variant='link'
              asChild
              className='mt-4 flex w-full items-center justify-center gap-4 text-primary-foreground'
            >
              <Label className='text-lg font-semibold md:text-base'>
                Check the source code
                <ExternalLink className='h-4 w-4' />
              </Label>
            </Button>
          </TooltipedElement>
        )}
      </div>

      <div className='flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <div className='flex w-full items-center justify-between'>
          <span className='text-xl font-medium text-primary-foreground/50 xs:text-base'>
            {type}
          </span>
          <span className='text-xl font-medium text-primary-foreground/50 xs:text-base'>
            {role}
          </span>
        </div>
        <TooltipedElement
          tTMessage={
            deployment === '' ? 'This project has no demo.' : 'Check the demo.'
          }
        >
          {deployment === '' ? (
            <Link
              href={'deployment'}
              target='_blank'
              className='underline-offset-2 hover:underline'
            >
              <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>
                {title}
              </h2>
            </Link>
          ) : (
            <h2 className='my-2 w-full text-left text-4xl font-bold underline-offset-2  hover:underline sm:text-sm'>
              {title}
            </h2>
          )}
        </TooltipedElement>

        <p className='text-dark my-2 text-justify font-normal sm:text-sm'>
          {description}
        </p>

        <div className='mt-2 flex flex-col gap-2'>
          <span className='text-xl font-medium text-secondary-foreground/50 lg:text-lg md:text-base'>
            Technologies
          </span>
          <div className='mt-2 flex flex-wrap items-center justify-center gap-2'>
            {technologies.map(({ icon, name }, key) => (
              <TooltipedElement tTMessage={name} key={name + '-' + key}>
                <Image
                  src={icon}
                  alt={name}
                  className=' h-9 w-9 md:h-6 md:w-6'
                />
              </TooltipedElement>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedProject
