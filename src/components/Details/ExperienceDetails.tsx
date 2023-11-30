import Link from 'next/link'

import { Label } from '../UI/label'

import DetailsWrapper from './DetailsWrapper'

import { ExperienceDetailsProps } from './Details.type'

const ExperienceDetails = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: ExperienceDetailsProps) => {
  return (
    <DetailsWrapper>
      <h3 className='text-2xl font-bold capitalize sm:text-xl xs:text-lg'>
        {position}&nbsp;
        {companyLink !== '' ? (
          <Link
            target='_blank'
            href={companyLink}
            className='capitalize text-primary-foreground/50'
          >
            @{company}
          </Link>
        ) : (
          <Label className='text-2xl font-bold capitalize text-primary-foreground/50 sm:text-xl xs:text-lg'>
            @{company}
          </Label>
        )}
      </h3>
      <span className='font-medium capitalize text-secondary-foreground/75  xs:text-sm'>
        {time} | {address}
      </span>
      <p className='w-full font-medium md:text-sm'>{work}</p>
    </DetailsWrapper>
  )
}

export default ExperienceDetails
