const skill = (name: string) => `/2024/Skills/${name}.svg`

const SkillList = [
  {
    name: 'TypeScript',
    icon: skill('TypeScript'),
    x: '-17vw',
    y: '2vh',
  },
  { name: 'AngularJs', icon: skill('Angular'), x: '-5vw', y: '-10vh' },
  {
    name: 'JavaScript',
    icon: skill('JavaScript'),
    x: '20vw',
    y: '6vh',
  },
  {
    name: 'ReactJs',
    icon: skill('React'),
    x: '0vw',
    y: '12vh',
  },
  {
    name: 'NextJs',
    icon: skill('Nextjs'),
    x: '-20vw',
    y: '-15vh',
  },
  { name: 'Sass', icon: skill('Sass'), x: '15vw', y: '-12vh' },
  {
    name: 'Styled Components',
    icon: skill('StyledComponents'),
    x: '0vw',
    y: '20vh',
  },
  { name: 'Figma', icon: skill('figma'), x: '0vw', y: '-20vh' },
  { name: 'Flutter', icon: skill('flutter'), x: '-20vw', y: '18vh' },
  { name: 'Tailwind CSS', icon: skill('Tailwind'), x: '18vw', y: '18vh' },
]

export { SkillList }
