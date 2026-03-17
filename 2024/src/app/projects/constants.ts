// Project Images
import overnights from '@/public/projects/overnights.webp'
import selii from '@/public/projects/selii.png'
import faceself from '@/public/projects/faceself.png'
import myPokedexUnir from '@/public/projects/MyPokedexUnir.png'
import GuarapoSSR from '@/public/projects/GuarapoSSR.png'
import unirFullstackTest from '@/public/projects/UnirFullstackTest.png'

// Skill SVG
import React from '@/public/Skills/React.svg'
import Sequelize from '@/public/Skills/Sequelize.svg'
import Mongo from '@/public/Skills/Mongo.svg'
import Vite from '@/public/Skills/Vite.svg'
import Zustand from '@/public/Skills/Zustand.svg'
import Chartjs from '@/public/Skills/Chart.js.svg'
import Axios from '@/public/Skills/Axios.svg'
import Framer from '@/public/Skills/Framer.svg'
import Lottie from '@/public/Skills/Lottie.svg'
import MUI from '@/public/Skills/MUI.svg'
import StyledComponents from '@/public/Skills/StyledComponents.svg'
import Express from '@/public/Skills/Express.svg'
import TypeScript from '@/public/Skills/TypeScript.svg'
import Cloudinary from '@/public/Skills/Cloudinary.svg'
import Sendgrid from '@/public/Skills/TwilioSendgrid.svg'
import Mongoose from '@/public/Skills/mongoose.svg'
import Sass from '@/public/Skills/Sass.svg'
import ReduxToolkit from '@/public/Skills/ReduxToolkit.svg'
import NextJs from '@/public/Skills/Nextjs.svg'
import Tailwind from '@/public/Skills/Tailwind.svg'
import Jest from '@/public/Skills/Jest.svg'
import Postgres from '@/public/Skills/Postgres.svg'
import Prisma from '@/public/Skills/Prisma.svg'
import JavaScript from '@/public/Skills/JavaScript.svg'
import ESLint from '@/public/Skills/ESLint.svg'
import Ionic from '@/public/Skills/Ionic.svg'
import CSS3 from '@/public/Skills/CSS3.svg'
import Storybooks from '@/public/Skills/Storybook.svg'
import Capacitor from '@/public/Skills/Capacitor.svg'
// import Angular from '@/public/Skills/Angular.svg'
// import Auth0 from '@/public/Skills/Auth0.svg'
// import Swiper from '@/public/Skills/Swiper.svg'
// import NGXDatatable from '@/public/Skills/NgxDatatable.svg'
// import Firebase from '@/public/Skills/Firebase.svg'
// import MYSQL from '@/public/Skills/MySQL.svg'
// import Siigo from '@/public/Skills/Siigo.svg'
// import Nodemailer from '@/public/Skills/Nodemailer.svg'
// import Rails from '@/public/Skills/Rails.svg'
// import SQLite from '@/public/Skills/Sqlite.svg'
// import ShouldaMatchers from '@/public/Skills/ShouldaMatchers.svg'
// import RSPec from '@/public/Skills/RSpec.svg'

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
      { icon: Mongoose, name: 'Mongoose' },
      { icon: Cloudinary, name: 'Cloudinary' },
      { icon: Sendgrid, name: 'Sendgrid' },
    ],
    github: undefined,
    image: overnights,
    deployment: 'https://www.overnights.com/',
    type: 'Freelance',
    role: 'Fullstack',
    description:
      "Discover stress-free travel with Overnights—an intuitive app that simplifies your accommodation search. Easily find the perfect place for your stay with just a few taps, tailored to your preferences. For Jewish travelers, Overnights goes the extra mile by allowing you to locate kosher-friendly establishments and refine your search based on specific kosher standards. Whether you're a business traveler or a family on vacation, experience worry-free journeys with Overnights—your ultimate travel companion.",
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
      title: 'Modern Portfolio',
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
        'https://next-js-portfolio-with-framer-and-tailwindcss.vercel.app/',
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
    // {
    //   title: 'Kommit',
    //   technologies: [
    //     { icon: Rails, name: 'Rails' },
    //     { icon: SQLite, name: 'SQLite3' },
    //     { icon: ShouldaMatchers, name: 'Shoulda matchers' },
    //     { icon: RSPec, name: 'RSPec' },
    //     { icon: Postgres, name: 'Postgres' },
    //     { icon: Sass, name: 'SASS' },
    //     { icon: Tailwind, name: 'TAILWIND' },
    //   ],
    //   github: undefined,
    //   image: overnights,
    //   type: 'Freelance Job',
    //   role: 'Frontend',
    //   deployment: '',
    // },
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
