import { ProjectSlideshow } from '@/components/Slideshows/ProjectSlideshow';
import TooltipedElement from '@/components/ui/TooltipedButton';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import TechBadge from '@/lib/TechBadge';
import { ExternalLink } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProject = ({
  title,
  technologies,
  github,
  image,
  type,
  deployment,
  description,
  role,
}: {
  title: string;
  technologies: string[];
  github: string | undefined;
  image: StaticImageData;
  type: string;
  deployment: string;
  description: string;
  role: string;
}) => {
  return (
    <Link href={deployment} target='_blank'>
      <article className='border-primary-background relative flex w-full items-center justify-between rounded-2xl border border-solid bg-background p-12 shadow-2xl lg:flex-col lg:p-8 xs:px-4'>
        <div className='absolute left-3 top-3 -z-10 h-[100%] w-[100%] rounded-[1.75rem] bg-primary/10 xs:w-full' />
        <div className='w-1/2 overflow-hidden lg:w-full'>
          <ProjectSlideshow imagesArray={[image]} />
          {github === undefined ? (
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
          ) : (
            <Button
              asChild
              variant='link'
              className='mt-4 flex w-full items-center justify-center gap-4 text-primary-foreground'
            >
              <Link
                className='text-lg font-semibold md:text-base'
                href={github}
              >
                Check the source code
                <ExternalLink className='h-4 w-4' />
              </Link>
            </Button>
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

          <Link
            href={'deployment'}
            target='_blank'
            className='underline-offset-2 hover:underline'
          >
            <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>
              {title}
            </h2>
          </Link>
          <p className='text-dark my-2 font-medium sm:text-sm'>{description}</p>
          <div className='mt-2 flex flex-wrap items-center justify-center gap-2'>
            {technologies.map((value, key) => (
              <TechBadge name={value} key={key} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedProject;
