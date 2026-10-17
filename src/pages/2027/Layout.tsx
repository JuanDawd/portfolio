import { Outlet } from 'react-router-dom'
import './styles.css'

import { ThemeProvider } from '@/lib/theme'
import { Navbar } from '@/components/2027/Navbar'

export default function Layout2027() {
	return (
		<ThemeProvider>
			{/* gt-backdrop paints the still blue wash behind the page */}
			<div className="gt-backdrop min-h-screen bg-background font-sans text-foreground">
				<Navbar />
				<Outlet />
			</div>
		</ThemeProvider>
	)
}
