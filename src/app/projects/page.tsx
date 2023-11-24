'use client';

import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/ui/Layout';

import FeaturedProject from './FeaturedProject';
import Project from './Project';
import { projectsConstants } from './constants';

const projects = () => {
  const { featuredProject, projects } = projectsConstants;
  return (
    <main className='mb-16 flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText
          text='Imagination Trumps Knowledge!'
          className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
        />
        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
          <div className='col-span-12'>
            <FeaturedProject {...featuredProject} />
          </div>
          {projects.map((value, key) => (
            <div className='col-span-6 sm:col-span-12' key={key}>
              <Project {...value!} />
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default projects;
