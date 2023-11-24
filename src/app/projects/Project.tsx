import TooltipedElement from '@/components/UI/TooltipedButton';
import { Button } from '@/components/UI/button';
import { Label } from '@/components/UI/label';
import { FramerImage } from '@/lib/FramerElements';
import TechBadge from '@/lib/TechBadge';
import { ExternalLink } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

const Project = ({
  title,
  technologies,
  github,
  image,
  type,
  role,
  deployment,
}: {
  title: string;
  technologies: string[];
  image: StaticImageData;
  github: string | undefined;
  type: string;
  role: string;
  deployment: string;
}) => {
  return (
    <Link href={deployment} target='_blank'>
      <article className='relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-foreground bg-background p-6 xs:p-4'>
        <div className='absolute left-3 top-3 -z-10 h-[100%] w-[100%] rounded-[1.75rem] bg-primary/10' />
        <Link
          href={'deployment'}
          target='_blank'
          className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
          <FramerImage
            src={image}
            alt={title}
            className='h-auto w-full'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
          />
        </Link>

        <div className='mt-4 flex w-full flex-col items-start justify-between'>
          <div className='flex w-full items-center justify-between'>
            <span className='text-xl font-medium text-secondary-foreground/50 lg:text-lg md:text-base'>
              {type}
            </span>

            <span className='text-xl font-medium text-primary-foreground/50 xs:text-base'>
              {role}
            </span>
          </div>
          <Link
            href='deployment'
            target='_blank'
            className='underline-offset-2 hover:underline'
          >
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>
              {title}
            </h2>
          </Link>
          <div className='mt-2 flex flex-wrap items-center justify-center gap-2'>
            {technologies.map((item, index) => (
              <TechBadge key={index + item} name={item} />
            ))}
          </div>

          <div className='mt-2 flex w-full items-center justify-center'>
            {github === undefined ? (
              <TooltipedElement tTMessage='This project is private'>
                <Button
                  asChild
                  variant='link'
                  className='flex w-full items-center justify-center gap-4 text-primary-foreground'
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
                className='flex w-full items-center justify-center gap-4 text-primary-foreground'
              >
                <Link
                  href={github}
                  target='_blank'
                  className='text-lg font-semibold md:text-base'
                >
                  Check the source code
                  <ExternalLink className='h-4 w-4' />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Project;
