import { ReactNode } from 'react'

export type DetailsProps = {
  children: ReactNode
}

export type ExperienceDetailsProps = {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

export type KnowledgeDetailsProps = {
  type: string
  place: string
  time: string
}
