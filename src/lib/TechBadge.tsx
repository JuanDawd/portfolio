'use client';

import { Badge } from '@/components/UI/badge';
import { XCircle } from 'lucide-react';

type TechBadgeProps = {
  name: string;
};

export default function TechBadge({ name }: TechBadgeProps) {
  const currentBadge = {
    REACT: (
      <BadgeLayout
        className='border-blue-800 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-gray-300'
        title='ReactJs'
      />
    ),
    NEXT: (
      <BadgeLayout
        className='border-white bg-black text-white dark:bg-gray-800 dark:text-gray-300'
        title='NextJs'
      />
    ),
    // Fails: Light - Dark
    EXPRESS: (
      <BadgeLayout
        className='border-white bg-green-800 text-white  dark:bg-green-300 dark:text-stone-800'
        title='ExpressJs'
      />
    ),
    // Fails: Light - Dark
    NODE: (
      <BadgeLayout
        className='border-white bg-green-400 text-white dark:bg-green-600 dark:text-gray-300'
        title='NodeJs'
      />
    ),
    // Fails: Light - Dark
    ANGULAR: (
      <BadgeLayout
        className='bg-red-500 text-white dark:bg-red-700 dark:text-gray-300'
        title='AngularJs'
      />
    ),
    // Fails: Light - Dark
    JAVA: (
      <BadgeLayout
        className='bg-orange-500 text-white dark:bg-orange-700 dark:text-gray-300'
        title='Java'
      />
    ),
    // Fails: Light - Dark
    REDUX: (
      <BadgeLayout
        className='bg-purple-500 text-white dark:bg-purple-700 dark:text-gray-300'
        title='Redux Toolkit'
      />
    ),
    // Fails: Dark
    RAILS: (
      <BadgeLayout
        className='bg-red-800 text-white dark:bg-red-900 dark:text-gray-300'
        title='Rails'
      />
    ),
    // Fails: Light - Dark
    SASS: (
      <BadgeLayout
        className='bg-pink-500 text-white dark:bg-pink-700 dark:text-gray-300'
        title='Sass'
      />
    ),
    // Fails: Light - Dark
    STYLED: (
      <BadgeLayout
        className='bg-purple-400 text-white dark:bg-purple-600 dark:text-gray-300'
        title='Styled Components'
      />
    ),
    // Fails: Light - Dark
    ZUSTAND: (
      <BadgeLayout
        className='bg-teal-500 text-white dark:bg-teal-700 dark:text-gray-300'
        title='Zustand'
      />
    ),
    // Fails: Light - Dark
    FLUTTER: (
      <BadgeLayout
        className='bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-300'
        title='Flutter'
      />
    ),
    TYPESCRIPT: (
      <BadgeLayout
        className='bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-300'
        title='Typescript'
      />
    ),
    MUI: (
      <BadgeLayout
        className='bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-300'
        title='MUI'
      />
    ),
    FRAMER: <BadgeLayout className='bg-zinc-900' title='Framer' />,
    SEQUELIZE: <BadgeLayout className='bg-blue-600' title='Sequelize' />,
    MONGO: (
      <BadgeLayout className='bg-[#001E2B] dark:bg-[#023430]' title='Mongo' />
    ),
    VITE: (
      <BadgeLayout
        className=' bg-gradient-to-tl from-[#bd34fe] from-30% to-[#41d1ff]'
        title='Vite'
      />
    ),
    CHARTJS: <BadgeLayout className=' bg-[#36A2EB] ' title='ChartJs' />,
    AXIOS: <BadgeLayout className=' bg-[#671ddf] ' title='Axios' />,
    LOTTIE: (
      <BadgeLayout className=' bg-[#00c1a2] text-gray-700 ' title='Lottie' />
    ),
    MONGOOSE: <BadgeLayout className='bg-[#800]' title='Mongoose' />,
    CLOUDINARY: <BadgeLayout className='bg-[#3448c5]' title='Cloudinary' />,
    SENDGRID: <BadgeLayout className='bg-sky-600' title='Twilio Sendgrid' />,
    TAILWIND: <BadgeLayout className='bg-sky-500' title='Tailwind' />,
    JEST: <BadgeLayout className='bg-[#10910E]' title='Jest' />,
    PRISMA: <BadgeLayout className='bg-[#2d3748]' title='Prisma' />,
    JAVASCRIPT: (
      <BadgeLayout className='bg-[#fde047] text-black' title='Javascript' />
    ),
    ESLINT: <BadgeLayout className='bg-[#4B32C3]' title='ESLint' />,

    IONIC: <BadgeLayout className='bg-[#176bff]' title='Ionic' />,
    STORYBOOKS: <BadgeLayout className='bg-[#FF4785]' title='Storybook' />,
    CSS: <BadgeLayout className='bg-[#264DE4]' title='CSS3' />,
  }[name] ?? (
    <BadgeLayout
      className='border border-dashed bg-background'
      title={name}
      icon={<XCircle />}
    />
  );

  return <>{currentBadge}</>;
}

export const BadgeLayout = ({
  className,
  title,
  icon,
}: {
  className: string;
  title: string;
  icon?: any;
}) => (
  <>
    <Badge
      className={`flex flex-row items-center justify-center gap-1 px-4 py-1 text-xs font-medium ${className}`}
      variant='outline'
    >
      {icon}
      {title}
    </Badge>
  </>
);
