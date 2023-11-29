import DetailsWrapper from './DetailsWrapper'

type ExperienceDetailsProps = {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}
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
        <a
          target='_blank'
          href={companyLink}
          className='capitalize text-primary-foreground/50 hover:underline'
        >
          @{company}
        </a>
      </h3>
      <span className='font-medium capitalize text-secondary-foreground/75  xs:text-sm'>
        {time} | {address}
      </span>
      <p className='w-full font-medium md:text-sm'>{work}</p>
    </DetailsWrapper>
  )
}

export default ExperienceDetails
