import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import { ThemeProvider } from '@/components/2025/theme-provider'
import { Navbar } from '@/components/2025/Navbar'

export default function Layout2025() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="portfolio-2025 min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <Outlet />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}
