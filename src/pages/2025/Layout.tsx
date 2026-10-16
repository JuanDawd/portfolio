import { domAnimation, LazyMotion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import './styles.css'

import { ThemeProvider } from '@/lib/theme'
import { Navbar } from '@/components/2025/Navbar'
import Footer from '@/components/2025/ui/Footer'

export default function Layout2025() {
	return (
		<ThemeProvider>
			<LazyMotion features={domAnimation}>
				<div className="w-full bg-background">
					<Navbar />
					<Outlet />
					<Footer />
				</div>
			</LazyMotion>
		</ThemeProvider>
	)
}
