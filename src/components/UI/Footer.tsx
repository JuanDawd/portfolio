'use client'

import React from 'react'
import Layout from './Layout'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-foreground bg-background text-lg font-medium sm:text-base'>
      <Layout className='flex items-center justify-between py-8 lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>
          Build With&nbsp;
          <Heart className='mx-1 text-accent' size={24} />
          &nbsp;by JuanDawd
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
