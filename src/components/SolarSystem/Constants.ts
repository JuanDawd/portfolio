import TypeScript from '@/public/Skills/TypeScript.svg'
import Angular from '@/public/Skills/Angular.svg'
import Javascript from '@/public/Skills/JavaScript.svg'
import React from '@/public/Skills/React.svg'
import Next from '@/public/Skills/Nextjs.svg'
import Sass from '@/public/Skills/Sass.svg'
import Styled from '@/public/Skills/StyledComponents.svg'
import Figma from '@/public/Skills/figma.svg'
import Flutter from '@/public/Skills/flutter.svg'
import Tailwind from '@/public/Skills/Tailwind.svg'
import Framer from '@/public/Skills/Framer.svg'
import Dart from '@/public/Skills/Dart.svg'

const PlanetsList = [
  // Frontend Frameworks
  {
    planet: 'ReactJs',
    icon: React,
    radius: 100,
  },
  {
    planet: 'NextJs',
    icon: Next,
    radius: 100,
  },
  {
    planet: 'AngularJs',
    icon: Angular,
    radius: 100,
  },
  // Styling Solutions
  {
    planet: 'Sass',
    icon: Sass,
    radius: 150,
  },
  {
    planet: 'Styled Components',
    icon: Styled,
    radius: 150,
  },
  {
    planet: 'Tailwind CSS',
    icon: Tailwind,
    radius: 150,
  },
  // Languages
  {
    planet: 'TypeScript',
    icon: TypeScript,
    radius: 200,
  },
  {
    planet: 'JavaScript',
    icon: Javascript,
    radius: 200,
  },
  {
    planet: 'Dart',
    icon: Dart,
    radius: 200,
  },
  // Design & Mobile
  {
    planet: 'Figma',
    icon: Figma,
    radius: 250,
  },
  {
    planet: 'Flutter',
    icon: Flutter,
    radius: 250,
  },
  {
    planet: 'Framer',
    icon: Framer,
    radius: 250,
  },
]

const IconMap = {
  TypeScript,
  Angular,
  JavaScript: Javascript,
  ReactJs: React,
  NextJs: Next,
  Sass,
  'Styled Components': Styled,
  Figma,
  Flutter,
  'Tailwind CSS': Tailwind,
}

export { PlanetsList, IconMap }
