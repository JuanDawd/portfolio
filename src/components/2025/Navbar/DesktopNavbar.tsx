import { useSyncExternalStore } from 'react'
import { useTheme } from '@/lib/theme'
import { m } from 'framer-motion'
import { MoonStar, Sun, ArrowLeft } from 'lucide-react'
import { CURRENT_YEAR, yearHref } from '@/years'

import { GithubIcon } from '@/components/shared/icons/GithubIcon'
import { LinkedInIcon } from '@/components/shared/icons/LinkedInIcon'
import CustomLink from './CustomLink'
import { Button } from '../ui/button'

const emptySubscribe = () => () => {}

const DesktopNavbar = () => {
	const { theme, setTheme, resolvedTheme } = useTheme()
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	)

	const isDark = theme === 'system' && resolvedTheme ? resolvedTheme === 'dark' : theme === 'dark'

	const handleChangeMode = () => {
		setTheme(isDark ? 'light' : 'dark')
	}

	return (
		<div className="flex w-full items-center justify-between lg:hidden">
			<nav aria-label="Main" className="flex items-center">
				<a
					href={yearHref(CURRENT_YEAR)}
					className="mr-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<ArrowLeft className="h-3.5 w-3.5" />
					{CURRENT_YEAR}
				</a>
				<CustomLink href={yearHref('2025')} title="Home" className="mr-4" />
				<CustomLink href={yearHref('2025', 'projects')} title="Projects" className="ml-4" />
			</nav>

			<nav aria-label="Social" className="flex flex-wrap items-center justify-center">
				<m.a
					aria-label="Check more about me in my Github"
					href="https://github.com/Juandawd"
					target="_blank"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="mr-3 w-6"
				>
					<GithubIcon />
				</m.a>

				<m.a
					aria-label="Check more about me in my LinkedIn"
					href="https://linkedin.com/in/juandawd"
					target="_blank"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="mx-3 w-6"
				>
					<LinkedInIcon />
				</m.a>

				<Button
					aria-label="Toggle Dark Mode"
					className="ml-3 h-6 w-6"
					variant="outline"
					size="icon"
					onClick={handleChangeMode}
				>
					{mounted ? (
						isDark ? (
							<MoonStar className="h-4 w-4" />
						) : (
							<Sun className="h-4 w-4" />
						)
					) : (
						<span className="h-4 w-4" />
					)}
				</Button>
			</nav>
		</div>
	)
}

export default DesktopNavbar
