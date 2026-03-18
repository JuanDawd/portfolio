const skill = (name: string) => `/2024/Skills/${name}.svg`

const PlanetsList = [
  { planet: 'ReactJs', icon: skill('React'), radius: 100 },
  { planet: 'NextJs', icon: skill('Nextjs'), radius: 100 },
  { planet: 'AngularJs', icon: skill('Angular'), radius: 100 },
  { planet: 'Sass', icon: skill('Sass'), radius: 150 },
  { planet: 'Styled Components', icon: skill('StyledComponents'), radius: 150 },
  { planet: 'Tailwind CSS', icon: skill('Tailwind'), radius: 150 },
  { planet: 'TypeScript', icon: skill('TypeScript'), radius: 200 },
  { planet: 'JavaScript', icon: skill('JavaScript'), radius: 200 },
  { planet: 'Dart', icon: skill('Dart'), radius: 200 },
  { planet: 'Figma', icon: skill('figma'), radius: 250 },
  { planet: 'Flutter', icon: skill('flutter'), radius: 250 },
  { planet: 'Framer', icon: skill('Framer'), radius: 250 },
]

const IconMap: Record<string, string> = {
  TypeScript: skill('TypeScript'),
  Angular: skill('Angular'),
  JavaScript: skill('JavaScript'),
  ReactJs: skill('React'),
  NextJs: skill('Nextjs'),
  Sass: skill('Sass'),
  'Styled Components': skill('StyledComponents'),
  Figma: skill('figma'),
  Flutter: skill('flutter'),
  'Tailwind CSS': skill('Tailwind'),
}

export { PlanetsList, IconMap }
