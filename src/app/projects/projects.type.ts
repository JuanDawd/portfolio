import { StaticImageData } from 'next/image'

export type Technology = {
  name: string
  icon: any
}

export type FeaturedProjectProps = {
  title: string
  technologies: Technology[]
  github: string | undefined
  image: StaticImageData
  type: string
  deployment: string
  description: string
  role: string
}

export type ProjectProps = {
  title: string
  technologies: Technology[]
  image: StaticImageData
  github: string | undefined
  type: string
  role: string
  deployment: string
}
