import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import { ThemeProvider } from '@/components/2026/theme-provider'
import { Navbar } from '@/components/2026/Navbar'

export default function Layout2026() {
	return (
		<ThemeProvider>
			<div className="portfolio-2026 min-h-screen bg-background font-sans text-foreground">
				<Navbar />
				<Outlet />
				<Analytics />
			</div>
		</ThemeProvider>
	)
}
