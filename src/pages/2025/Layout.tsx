import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import { ThemeProvider } from '@/components/2026/theme-provider'
import { Navbar } from '@/components/2025/Navbar'
import Footer from '@/components/2025/UI/Footer'

export default function Layout2025() {
	return (
		<ThemeProvider>
			<div className="portfolio-2025 w-full bg-background font-roboto-mono">
				<Navbar />
				<Outlet />
				<Analytics />
				<Footer />
			</div>
		</ThemeProvider>
	)
}
