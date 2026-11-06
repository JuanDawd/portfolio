import { Outlet } from 'react-router-dom'
import './styles.css'

import { ThemeProvider } from '@/lib/theme'
import { Navbar } from '@/components/2027/Navbar'

export default function Layout2027() {
	return (
		<ThemeProvider>
			{/* gt-backdrop paints the still blue wash behind the page */}
			<div className="gt-backdrop min-h-screen bg-background font-sans text-foreground">
				{/* First tab stop: jumps past the navbar */}
				<a
					href="#main"
					className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-md bg-primary px-4 py-3 font-mono text-sm font-bold text-primary-foreground transition-transform focus-visible:translate-y-0"
				>
					skip to content
				</a>
				<Navbar />
				<Outlet />
				<footer className="mx-auto max-w-5xl px-4 pb-10 font-mono text-xs text-muted-foreground sm:px-7 2xl:max-w-7xl">
					<p className="border-t border-rule pt-4">© 2027 Juan Dawd</p>
				</footer>
			</div>
		</ThemeProvider>
	)
}
