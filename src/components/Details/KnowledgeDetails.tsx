import React from 'react'
import DetailsWrapper from './DetailsWrapper'
type KnowledgeDetailsProps ={
  type: string
  place: string
  time: string
}
const KnowledgeDetails = ({
  type,
  place,
  time,
}:KnowledgeDetailsProps) => {
  return (
   <DetailsWrapper>
     <h3 className='text-2xl font-bold capitalize  sm:text-xl xs:text-lg'>
          {type}&nbsp;
        </h3>
        <span className='font-medium capitalize text-secondary-foreground/75 xs:text-sm'>
          {time} | {place}
        </span>
   </DetailsWrapper>
  )
}

export default KnowledgeDetails