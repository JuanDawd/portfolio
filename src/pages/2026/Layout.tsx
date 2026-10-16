import { Outlet } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import './styles.css'

import { ThemeProvider } from '@/lib/theme'
import { Navbar } from '@/components/2026/Navbar'

export default function Layout2026() {
	return (
		<ThemeProvider>
			{/* Load only the animation features the 2026 page uses (m.* components) */}
			<LazyMotion features={domAnimation}>
				<div className="min-h-screen bg-background font-sans text-foreground">
					<Navbar />
					<Outlet />
				</div>
			</LazyMotion>
		</ThemeProvider>
	)
}
