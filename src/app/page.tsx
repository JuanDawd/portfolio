'use client'

import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../../public/profilePic.jpg'

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/UI/Layout'
import Education from '@/components/Education/Education'
import Experience from '@/components/Experience/Experience'
import Skills from '@/components/Skills/Skills'
import { Button } from '@/components/UI/button'
import { Biography } from './Constants'
import { FileDown } from 'lucide-react'
import Certifications from '@/components/Certifications/Certifications'
import { DropdownMenuItem } from '@/components/UI/dropdown-menu'
import DropdownContext from '@/components/DropdownContext/DropdownContext'

export default function Home() {
  return (
    <Layout className='pt-16'>
      <AnimatedText
        text='Passion Fuels Purpose!'
        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
      />
      <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
        <div className='col-span-4 flex flex-col items-center justify-center md:order-2  md:col-span-8'>
          <h2 className='mb-4 text-2xl font-bold uppercase text-secondary-foreground/75'>
            Biography
          </h2>

          <p className='text-lg font-medium'>{Biography[0]}</p>
          <div className='flex w-full flex-row items-center justify-around pt-24'>
            <DropdownContext
              triggerButtonTittle={'Resume'}
              triggerButtonIcon={<FileDown size={20} />}
            >
              <DropdownMenuItem>
                <Link href='/JuanDawdENG.pdf' download={true} target='_blank'>
                  English
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/JuanDawdESP.pdf' download={true} target='_blank'>
                  Spanish
                </Link>
              </DropdownMenuItem>
            </DropdownContext>
            <Button variant='outline' asChild>
              <Link
                href='mailto:JuanDawdB@gmail.com'
                target='_blank'
                className='ml-4 text-lg font-medium capitalize md:text-base '
              >
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        <div className='relative col-span-4 h-max rounded-2xl border-2 border-solid border-primary-foreground bg-background p-4 md:order-1 md:col-span-8'>
          <div className='absolute left-3 top-3 -z-10 h-[100%] w-[100%] rounded-[1.75rem] bg-primary/10' />
          <Image
            src={profilePic}
            alt='JuanDawd'
            className='h-auto w-full rounded-2xl'
            priority
            sizes='(max-width:768px) 75vw, (max-width:1200px) 50vw, 33vw'
          />
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
      <Certifications />
    </Layout>
  )
}
