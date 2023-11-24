import TypeScript from '@/assets/Skills/ts-logo-128.svg';
import Angular from '@/assets/Skills/angular.svg';
import Javascript from '@/assets/Skills/javascript-logo-svgrepo-com.svg';
import React from '@/assets/Skills/react-js-icon.svg';
import Next from '@/assets/Skills/nextjs-icon-svgrepo-com.svg';
import Sass from '@/assets/Skills/sass-svgrepo-com.svg';
import Styled from '@/assets/Skills/styled-components-1.png';
import Figma from '@/assets/Skills/figma.svg';
import Flutter from '@/assets/Skills/flutter-icon.svg';
import Tailwind from '@/assets/Skills/tailwind-css-icon.svg';

const SkillList = [
  {
    name: 'TypeScript',
    icon: TypeScript,
    x: '-17vw',
    y: '2vh',
    extras: '!w-12',
  },
  { name: 'AngularJs', icon: Angular, x: '-5vw', y: '-10vh' },
  {
    name: 'JavaScript',
    icon: Javascript,
    x: '20vw',
    y: '6vh',
    extras: '!w-12 rounded-sm',
  },
  {
    name: 'ReactJs',
    icon: React,
    x: '0vw',
    y: '12vh',
  },
  {
    name: 'NextJs',
    icon: Next,
    x: '-20vw',
    y: '-15vh',
    extras: 'bg-[#fff] rounded-full',
  },
  { name: 'Sass', icon: Sass, x: '15vw', y: '-12vh' },
  {
    name: 'Styled Components',
    icon: Styled,
    x: '32vw',
    y: '-5vh',
    extras: '!w-14',
  },
  { name: 'Figma', icon: Figma, x: '0vw', y: '-20vh', extras: '!w-12' },
  { name: 'Flutter', icon: Flutter, x: '-25vw', y: '18vh', extras: '!w-10' },
  { name: 'Tailwind CSS', icon: Tailwind, x: '18vw', y: '18vh' },
];

export { SkillList };
