export type Technology = {
  name: string
  icon: string
}

export type FeaturedProjectProps = {
  title: string
  technologies: Technology[]
  github: string | undefined
  image: string
  type: string
  deployment: string
  description: string
  role: string
}

export type ProjectProps = {
  title: string
  technologies: Technology[]
  image: string
  github: string | undefined
  type: string
  role: string
  deployment: string
}
