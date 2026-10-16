import { Outlet } from 'react-router-dom'
import './styles.css'

import { ThemeProvider } from '@/lib/theme'
import { Navbar } from '@/components/2025/Navbar'
import Footer from '@/components/2025/ui/Footer'

export default function Layout2025() {
	return (
		<ThemeProvider>
			<div className="w-full bg-background font-roboto-mono">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</ThemeProvider>
	)
}
