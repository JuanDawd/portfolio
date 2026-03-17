import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { ThemeProvider } from '@/components/theme-provider'

import { Navbar } from '@/components/Navbar'

import Footer from '@/components/UI/Footer'
import './globals.css'

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-rob' })

export const metadata: Metadata = {
  title: {
    default: 'JuanDawd | Home',
    template: 'JuanDawd | %s',
  },
  description: 'JuanDawd Portfolio - Software Developer',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`w-full bg-background ${roboto.className} font-rob`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
