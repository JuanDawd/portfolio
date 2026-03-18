import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import { ThemeProvider } from '@/components/2024/theme-provider'
import { Navbar } from '@/components/2024/Navbar'
import Footer from '@/components/2024/UI/Footer'

export default function Layout2024() {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='portfolio-2024 w-full bg-background font-rob'>
        <Navbar />
        <Outlet />
        <Analytics />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
