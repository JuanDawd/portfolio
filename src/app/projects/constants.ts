// Project Images
import overnights from '@/assets/projects/overnights.webp'
import selii from '@/assets/projects/selii.png'
import faceself from '@/assets/projects/faceself.png'
import myPokedexUnir from '@/assets/projects/MyPokedexUnir.png'
import GuarapoSSR from '@/assets/projects/GuarapoSSR.png'
import unirFullstackTest from '@/assets/projects/UnirFullstackTest.png'

// Skill SVG
import React from '@/assets/Skills/React.svg'
import Sequelize from '@/assets/Skills/Sequelize.svg'
import Mongo from '@/assets/Skills/Mongo.svg'
import Vite from '@/assets/Skills/Vite.svg'
import Zustand from '@/assets/Skills/Zustand.svg'
import Chartjs from '@/assets/Skills/Chart.js.svg'
import Axios from '@/assets/Skills/Axios.svg'
import Framer from '@/assets/Skills/Framer.svg'
import Lottie from '@/assets/Skills/Lottie.svg'
import MUI from '@/assets/Skills/MUI.svg'
import StyledComponents from '@/assets/Skills/StyledComponents.svg'
import Express from '@/assets/Skills/Express.svg'
import TypeScript from '@/assets/Skills/TypeScript.svg'
import Cloudinary from '@/assets/Skills/Cloudinary.svg'
import Sendgrid from '@/assets/Skills/TwilioSendgrid.svg'
import Mongoose from '@/assets/Skills/mongoose.svg'
import Sass from '@/assets/Skills/Sass.svg'
import ReduxToolkit from '@/assets/Skills/ReduxToolkit.svg'
import NextJs from '@/assets/Skills/Nextjs.svg'
import Tailwind from '@/assets/Skills/Tailwind.svg'
import Jest from '@/assets/Skills/Jest.svg'
import Postgres from '@/assets/Skills/Postgres.svg'
import Prisma from '@/assets/Skills/Prisma.svg'
import JavaScript from '@/assets/Skills/JavaScript.svg'
import ESLint from '@/assets/Skills/ESLint.svg'
import Ionic from '@/assets/Skills/Ionic.svg'
import CSS3 from '@/assets/Skills/CSS3.svg'
import Storybooks from '@/assets/Skills/Storybook.svg'
import Capacitor from '@/assets/Skills/Capacitor.svg'
import Angular from '@/assets/Skills/Angular.svg'
import Auth0 from '@/assets/Skills/Auth0.svg'
import Swiper from '@/assets/Skills/Swiper.svg'
import NGXDatatable from '@/assets/Skills/NgxDatatable.svg'
//!Fix import Epayco from '@/assets/Skills/E.svg'
import Firebase from '@/assets/Skills/Firebase.svg'
import MYSQL from '@/assets/Skills/MySQL.svg'
import Siigo from '@/assets/Skills/Siigo.svg'
import Nodemailer from '@/assets/Skills/Nodemailer.svg'
import Rails from '@/assets/Skills/Rails.svg'
import SQLite from '@/assets/Skills/Sqlite.svg'
import ShouldaMatchers from '@/assets/Skills/ShouldaMatchers.svg'
import RSPec from '@/assets/Skills/RSpec.svg'
//! Fix import Faker from '@/assets/Skills/Faker.svg'

export const projectsConstants = {
  featuredProject: {
    title: 'Overnights',
    technologies: [
      { icon: React, name: 'React' },
      { icon: Sequelize, name: 'Sequelize' },
      { icon: Mongo, name: 'Mongo' },
      { icon: Vite, name: 'Vite' },
      { icon: Zustand, name: 'Zustand' },
      { icon: Chartjs, name: 'Chartjs' },
      { icon: Axios, name: 'Axios' },
      { icon: Framer, name: 'Framer' },
      { icon: Lottie, name: 'Lottie' },
      { icon: MUI, name: 'MUI' },
      { icon: StyledComponents, name: 'Styled Components' },
      { icon: Express, name: 'Express' },
      { icon: TypeScript, name: 'TypeScript' },
      { icon: Mongoose, name: 'Mongoose' }, // !Fix: Find this logo
      { icon: Cloudinary, name: 'Cloudinary' },
      { icon: Sendgrid, name: 'Sendgrid' },
    ],
    github: undefined,
    image: overnights,
    deployment: 'https://www.overnights.com/',
    type: 'Freelance',
    role: 'Fullstack',
    description: 'Change Here!',
  },

  projects: [
    {
      title: 'My Pokedex UNIR',
      technologies: [
        { icon: React, name: 'React' },
        { icon: TypeScript, name: 'TypeScript' },
        { icon: MUI, name: 'MUI' },
        { icon: Sass, name: 'Sass' },
        { icon: Vite, name: 'Vite' },
        { icon: ReduxToolkit, name: 'ReduxToolkit' },
      ],
      image: myPokedexUnir,
      github: 'https://github.com/JuankDawd/my-pokedex-unir',
      type: 'College Assignment',
      role: 'Frontend',
      deployment: 'https://my-pokedex-unir.netlify.app/',
    },
    {
      title: 'NextJs Portfolio with Framer and TailwindCss',
      technologies: [
        { icon: NextJs, name: 'NextJs' },
        { icon: React, name: 'React' },
        { icon: Framer, name: 'Framer' },
        { icon: Tailwind, name: 'Tailwind' },
        { icon: TypeScript, name: 'TypeScript' },
      ],
      github:
        'https://github.com/JuankDawd/next.js-portfolio-with-framer-and-tailwindcss',
      image: overnights,
      type: 'Personal Development',
      role: 'Frontend',
      deployment:
        'https://next-js-portfolio-with-framer-and-tailwindcss.vercel.app/about',
    },
    {
      title: 'Guarapo-SSR',
      technologies: [
        { icon: NextJs, name: 'NextJs' },
        { icon: Jest, name: 'Jest' },
        { icon: Tailwind, name: 'Tailwind' },
        { icon: TypeScript, name: 'TypeScript' },
        { icon: Axios, name: 'Axios' },
        { icon: Postgres, name: 'Postgres' },
        { icon: Prisma, name: 'Prisma' },
      ],
      github: 'https://github.com/JuankDawd/guarapo-ssr/tree/main',
      image: GuarapoSSR,
      type: 'Technical Review',
      role: 'Backend',
      deployment: 'https://guarapo-ssr.vercel.app/blocks/',
    },
    {
      title: 'UnirFullStackTest',
      technologies: [
        { icon: JavaScript, name: 'JavaScript' },
        { icon: React, name: 'React' },
        { icon: ESLint, name: 'ESLint' },
        { icon: Jest, name: 'Jest' },
        { icon: Sass, name: 'Sass' },
        { icon: Ionic, name: 'Ionic' },
        { icon: Vite, name: 'Vite' },
      ],
      github: 'https://github.com/JuankDawd/UnirFullStackTest',
      image: unirFullstackTest,
      type: 'Fullstack',
      role: 'Frontend',
      deployment: '',
    },
    {
      title: 'Selii Ecommerce',
      technologies: [
        { icon: JavaScript, name: 'JavaScript' },
        { icon: React, name: 'React' },
        { icon: MUI, name: 'MUI' },
        { icon: CSS3, name: 'CSS3' },
        { icon: Storybooks, name: 'Storybooks' },
        { icon: Ionic, name: 'Ionic' },
        { icon: Vite, name: 'Vite' },
      ],
      github: undefined,
      image: selii,
      type: 'Freelance',
      role: 'Frontend',
      deployment: '',
    },
    {
      title: 'Faceself',
      technologies: [
        { icon: Ionic, name: 'Ionic' },
        { icon: React, name: 'React' },
        { icon: ReduxToolkit, name: 'Redux Toolkit' },
        { icon: Sass, name: 'Sass' },
        { icon: Axios, name: 'Axios' },
        { icon: Capacitor, name: 'Capacitor' },
        { icon: Chartjs, name: 'Chartjs' },
        { icon: TypeScript, name: 'TypeScript' },
      ],
      github: undefined,
      image: faceself,
      type: 'Freelance Job',
      role: 'Mobile',
      deployment: '',
    },
    // {
    //   title: 'Cheeseokay',
    //   technologies: [
    //     { icon: Angular, name: 'Angular' },
    //     { icon: Capacitor, name: 'Capacitor' },
    //     { icon: Auth0, name: 'Auth0' },
    //     { icon: Swiper, name: 'Swiper' },
    //     { icon: NGXDatatable, name: 'NGX-Datatable' },
    //     { icon: ESLint, name: 'ESLint' },
    //     { icon: Express, name: 'Express' },
    //     //!fix {icon:Epayco,name:'ePayco'},
    //     { icon: Cloudinary, name: 'Cloudinary' },
    //     { icon: Firebase, name: 'Firebase' },
    //     { icon: MYSQL, name: 'MySQL' },
    //     { icon: Siigo, name: 'Siigo' },
    //     { icon: Postgres, name: 'Postgres' },
    //     { icon: Sequelize, name: 'Sequelize' },
    //     { icon: TypeScript, name: 'TypeScript' },
    //     { icon: Nodemailer, name: 'Nodemailer' },
    //   ],
    //   github: undefined,
    //   image: overnights,
    //   type: 'Freelance Job',
    //   role: 'Fullstack',
    //   deployment: '',
    // },
    {
      title: 'Kommit',
      technologies: [
        { icon: Rails, name: 'Rails' },
        { icon: SQLite, name: 'SQLite3' },
        { icon: ShouldaMatchers, name: 'Shoulda matchers' },
        { icon: RSPec, name: 'RSPec' },
        //!Fix {icon:Faker,name:'Faker'},
        { icon: Postgres, name: 'Postgres' },
        { icon: Sass, name: 'SASS' },
        { icon: Tailwind, name: 'TAILWIND' },
      ],
      github: undefined,
      image: overnights,
      type: 'Freelance Job',
      role: 'Frontend',
      deployment: '',
    },
    // {
    //   title: 'Doc.tors',
    //   technologies: [
    //     'FLUTTER',
    //     'RXDART',
    //     'HTTP',
    //     'FILE-PICKER',
    //     'PROGRESS-DIALOG',
    //     'AWESOME-DIALOG',
    //     'SOCKET-IO',
    //     'AGORA-RTC',
    //     'PERMISSION-HANDLER',
    //     'JWT',
    //     'ONE-SIGNAL',
    //   ],
    //   github: undefined,
    //   image: overnights,
    //   type: 'Freelance Job',
    //   role: 'Fullstack',
    //   deployment: '',
    // },
  ],
}
