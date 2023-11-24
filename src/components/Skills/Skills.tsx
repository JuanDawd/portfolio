'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillList } from './Constants';
import Skill from './Skill';

const Skills = () => {
  return (
    <>
      <h2 className='mb-10 mt-64 w-full text-center text-8xl font-bold md:mt-32 md:text-6xl'>
        Skills
      </h2>
      <div
        className='relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh]
							lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
							md:bg-circularLightMd md:dark:bg-circularDarkMd 
							sm:h-[60vh] sm:bg-circularLightSm 
							sm:dark:bg-circularDarkSm xs:h-[50vh] 
			'
      >
        <motion.div
          className='flex cursor-pointer items-center justify-center rounded-full bg-primary p-8
							 font-semibold text-primary-foreground
							 lg:p-6 md:p-4 xs:p-2 xs:text-xs'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {SkillList.map((values, key) => (
          <Skill key={key} {...values} />
        ))}
      </div>
    </>
  );
};

export default Skills;
