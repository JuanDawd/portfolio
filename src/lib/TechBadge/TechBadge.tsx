'use client'

import { XCircle } from 'lucide-react'
import { Layout } from './Layout'

type TechBadgeProps = {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  const currentBadge = {
    REACT: (
      <Layout
        className='border-blue-800 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-gray-300'
        title='ReactJs'
      />
    ),
    NEXT: (
      <Layout
        className='border-white bg-black text-white dark:bg-gray-800 dark:text-gray-300'
        title='NextJs'
      />
    ),
    // Fails: Light - Dark
    EXPRESS: (
      <Layout
        className='border-white bg-green-800 text-white  dark:bg-green-300 dark:text-stone-800'
        title='ExpressJs'
      />
    ),
    // Fails: Light - Dark
    NODE: (
      <Layout
        className='border-white bg-green-400 text-white dark:bg-green-600 dark:text-gray-300'
        title='NodeJs'
      />
    ),
    // Fails: Light - Dark
    ANGULAR: (
      <Layout
        className='bg-red-500 text-white dark:bg-red-700 dark:text-gray-300'
        title='AngularJs'
      />
    ),
    // Fails: Light - Dark
    JAVA: (
      <Layout
        className='bg-orange-500 text-white dark:bg-orange-700 dark:text-gray-300'
        title='Java'
      />
    ),
    // Fails: Light - Dark
    REDUX: (
      <Layout
        className='bg-purple-500 text-white dark:bg-purple-700 dark:text-gray-300'
        title='Redux Toolkit'
      />
    ),
    // Fails: Dark
    RAILS: (
      <Layout
        className='bg-red-800 text-white dark:bg-red-900 dark:text-gray-300'
        title='Rails'
      />
    ),
    // Fails: Light - Dark
    SASS: (
      <Layout
        className='bg-pink-500 text-white dark:bg-pink-700 dark:text-gray-300'
        title='Sass'
      />
    ),
    // Fails: Light - Dark
    STYLED: (
      <Layout
        className='bg-purple-400 text-white dark:bg-purple-600 dark:text-gray-300'
        title='Styled Components'
      />
    ),
    // Fails: Light - Dark
    ZUSTAND: (
      <Layout
        className='bg-teal-500 text-white dark:bg-teal-700 dark:text-gray-300'
        title='Zustand'
      />
    ),
    // Fails: Light - Dark
    FLUTTER: (
      <Layout
        className='bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-300'
        title='Flutter'
      />
    ),
    TYPESCRIPT: (
      <Layout
        className='bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-300'
        title='Typescript'
      />
    ),
    MUI: (
      <Layout
        className='bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-300'
        title='MUI'
      />
    ),
    FRAMER: <Layout className='bg-zinc-900' title='Framer' />,
    SEQUELIZE: <Layout className='bg-blue-600' title='Sequelize' />,
    MONGO: <Layout className='bg-[#001E2B] dark:bg-[#023430]' title='Mongo' />,
    VITE: (
      <Layout
        className=' bg-gradient-to-tl from-[#bd34fe] from-30% to-[#41d1ff]'
        title='Vite'
      />
    ),
    CHARTJS: <Layout className=' bg-[#36A2EB] ' title='ChartJs' />,
    AXIOS: <Layout className=' bg-[#671ddf] ' title='Axios' />,
    LOTTIE: <Layout className=' bg-[#00c1a2] text-gray-700 ' title='Lottie' />,
    MONGOOSE: <Layout className='bg-[#800]' title='Mongoose' />,
    CLOUDINARY: <Layout className='bg-[#3448c5]' title='Cloudinary' />,
    SENDGRID: <Layout className='bg-sky-600' title='Twilio Sendgrid' />,
    TAILWIND: <Layout className='bg-sky-500' title='Tailwind' />,
    JEST: <Layout className='bg-[#10910E]' title='Jest' />,
    PRISMA: <Layout className='bg-[#2d3748]' title='Prisma' />,
    JAVASCRIPT: (
      <Layout className='bg-[#fde047] text-black' title='Javascript' />
    ),
    ESLINT: <Layout className='bg-[#4B32C3]' title='ESLint' />,

    IONIC: <Layout className='bg-[#176bff]' title='Ionic' />,
    STORYBOOKS: <Layout className='bg-[#FF4785]' title='Storybook' />,
    CSS: <Layout className='bg-[#264DE4]' title='CSS3' />,
    CAPACITOR: <Layout className='bg-[#119EFF]' title='Capacitor' />,
    SQLITE3: <Layout className='bg-[#004B66]' title='SQLite3' />,
    PG: <Layout className='bg-[#699eca]' title='Postgress' />,
    MYSQL: (
      <Layout
        className=' bg-gradient-to-r from-[#02758F] from-25% to-[#F29111]'
        title='MySQL'
      />
    ),
    AUTH0: <Layout className=' bg-zinc-950' title='Auth0' />,
    SWIPER: <Layout className='bg-[#007aff]' title='Swiper' />,
    'NGX-DATATABLE': (
      <Layout
        className='bg-gradient-to-tl from-[#00ACFF] from-25% to-[#00FEF4]'
        title='ngx-datatable'
      />
    ),
    EPAYCO: <Layout className=' bg-[#FF6720]' title='ePayco' />,
    FIREBASE: (
      <Layout
        className=' bg-gradient-to-r from-[#FFA300] from-10% via-[#FF7D00] via-25% to-[#FFC900]'
        title='Firebase'
      />
    ),
    SIIGO: <Layout className=' bg-[#00A5FF]' title='Siigo' />,
    NODEMAILER: (
      <Layout
        className=' bg-gradient-to-r from-[#00B86D] from-40% via-[#00AEE7] via-70% to-[#00A0D3]'
        title='Nodemailer'
      />
    ),
    'SHOULDA-MATCHERS': (
      <Layout
        className=' bg-gradient-to-r from-[#F15F30] from-20%  to-[#39BFC2]'
        title='shoulda matchers'
      />
    ),
    'RSPEC-RAILS': (
      <Layout
        className='bg-gradient-to-r from-[#77F3FF] from-10% via-[#00DEF8] via-30%  to-[#FF1C5A]'
        title='RSpec'
      />
    ),
    FAKER: (
      <Layout
        className='bg-gradient-to-r from-[#fff] from-10% via-[#D60010] via-30%  to-[#000]'
        title='Faker'
      />
    ),
  }[name] ?? (
    <Layout
      className='border border-dashed bg-background'
      title={name}
      icon={<XCircle />}
    />
  )

  return <>{currentBadge}</>
}
