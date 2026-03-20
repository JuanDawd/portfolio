import { useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme'
import { Github, MoonStarIcon, SunIcon } from 'lucide-react'

import { LinkedInIcon } from '@/components/icons/LinkedInIcon'

import CustomMobileLink from './CustomMobileLink'

import type { MobileNavbarProps } from './Navbar.types'
import { Button } from '../UI/button'

const emptySubscribe = () => () => {}

const MobileNavbar = ({ handleClick }: MobileNavbarProps) => {
	const { theme, setTheme, resolvedTheme } = useTheme()
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	)

	const isDark =
		theme === 'system' && resolvedTheme
			? resolvedTheme === 'dark'
			: theme === 'dark'

	const handleChangeMode = () => {
		setTheme(isDark ? 'light' : 'dark')
	}

	return (
		<div className="fixed inset-0 z-30 flex items-center justify-center">
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				className="flex min-w-[70vw] flex-col items-center justify-between gap-10 rounded-lg bg-background/50 py-20 backdrop-blur-md"
			>
				<nav className="flex flex-col items-center justify-center">
					<CustomMobileLink href="/2025" title="Home" toggle={handleClick} />
					<CustomMobileLink
						href="/2025/projects"
						title="Projects"
						toggle={handleClick}
					/>
				</nav>

				<nav className="flex flex-wrap items-center justify-center">
					<motion.a
						aria-label="Check more about me in my Github"
						href="https://github.com/Juandawd"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="mr-3 w-6 sm:mr-1"
					>
						<Github />
					</motion.a>

					<motion.a
						aria-label="Check more about me in my LinkedIn"
						href="https://linkedin.com/in/juandawd"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="mx-3 w-6 sm:mx-1"
					>
						<LinkedInIcon />
					</motion.a>
					<Button
						aria-label="Toggle Dark Mode"
						className="ml-3 h-6 w-6 sm:ml-1"
						variant="outline"
						size="icon"
						onClick={handleChangeMode}
					>
						{mounted ? (
							isDark ? (
								<MoonStarIcon className="h-4 w-4" />
							) : (
								<SunIcon className="h-4 w-4" />
							)
						) : (
							<span className="h-4 w-4" />
						)}
					</Button>
				</nav>
			</motion.div>
		</div>
	)
}

export default MobileNavbar
