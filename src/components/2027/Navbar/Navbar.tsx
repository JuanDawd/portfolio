import { useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/lib/theme'
import { otherYears, yearHref } from '@/years'

const emptySubscribe = () => () => {}

const sections = [
	{ id: 'work', label: 'work' },
	{ id: 'experience', label: 'experience' },
	{ id: 'stack', label: 'stack' },
	{ id: 'contact', label: 'contact' },
]

export function Navbar() {
	const { setTheme, resolvedTheme } = useTheme()
	// The theme is only known in the browser, so the toggle renders after hydration
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	)
	const isDark = resolvedTheme === 'dark'

	return (
		<header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-6">
			<nav
				aria-label="Main"
				className="glass mx-auto flex max-w-5xl 2xl:max-w-7xl items-center justify-between gap-3 rounded-lg py-1.5 pr-1.5 pl-4 font-mono text-sm"
			>
				<Link to={yearHref('2027')} className="font-bold">
					~/juandawd
				</Link>

				<div className="flex items-center gap-1">
					<ul className="hidden items-center gap-1 md:flex">
						{sections.map(({ id, label }) => (
							<li key={id}>
								<a
									href={`#${id}`}
									className="rounded px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
								>
									{label}
								</a>
							</li>
						))}
					</ul>

					{/* Phones: contact is the one section link; the archive lives in the footer */}
					<a
						href="#contact"
						className="inline-flex h-11 items-center rounded px-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
					>
						contact
					</a>

					{/* Plain <a>: switching years is a full page load, so only one
					    year's stylesheet is ever active */}
					<div className="hidden items-center md:flex">
						<span aria-hidden="true" className="pl-2 text-muted-foreground/70">
							archive/
						</span>
						{otherYears('2027').map((year) => (
							<a
								key={year}
								href={yearHref(year)}
								className="inline-flex h-9 items-center rounded px-1.5 text-muted-foreground transition-colors hover:text-foreground"
							>
								{year}
							</a>
						))}
					</div>

					<button
						type="button"
						onClick={() => setTheme(isDark ? 'light' : 'dark')}
						aria-label="Toggle theme"
						className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:h-9 md:w-9"
					>
						{mounted && (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
					</button>
				</div>
			</nav>
		</header>
	)
}
