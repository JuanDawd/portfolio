import { useEffect, useRef, useState, useSyncExternalStore, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/lib/theme'
import { YearSwitcher } from '@/components/shared/YearSwitcher'
import { yearHref } from '@/years'
import { Logo } from './Logo'

const emptySubscribe = () => () => {}

const sections = [
	{ id: 'work', label: 'projects' },
	{ id: 'experience', label: 'experience' },
	{ id: 'stack', label: 'stack' },
	{ id: 'education', label: 'education' },
	{ id: 'contact', label: 'contact' },
]
const sectionIds = sections.map((s) => s.id)

// The section whose top has passed just under the navbar, for the nav's "you are here" mark.
// A clicked link wins until its smooth scroll ends, so short sections like stack still light up
const SPY_LINE = 140

function useActiveSection(ids: string[]) {
	const [active, setActive] = useState<string | null>(null)
	const locked = useRef(false)

	useEffect(() => {
		function update() {
			if (locked.current) return
			let current: string | null = null
			for (const id of ids) {
				const el = document.getElementById(id)
				if (el && el.getBoundingClientRect().top <= SPY_LINE) current = id
			}
			// The last section may never reach the line, so the bottom of the page selects it
			if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) current = ids[ids.length - 1]
			setActive(current)
		}
		update()
		addEventListener('scroll', update, { passive: true })
		return () => removeEventListener('scroll', update)
	}, [ids])

	function select(id: string) {
		setActive(id)
		locked.current = true
		const release = () => {
			locked.current = false
			clearTimeout(timer)
			removeEventListener('scrollend', release)
		}
		// scrollend isn't everywhere yet, so a timeout releases the lock too
		const timer = setTimeout(release, 1200)
		addEventListener('scrollend', release)
	}

	return [active, select] as const
}

export function Navbar() {
	const [active, select] = useActiveSection(sectionIds)
	const { setTheme, resolvedTheme } = useTheme()
	// The theme is only known in the browser, so the toggle renders after hydration
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	)
	const isDark = resolvedTheme === 'dark'

	// The new theme grows out of the toggle as a circle. Browsers without view transitions,
	// and visitors who prefer reduced motion, get an instant switch
	function toggleTheme(e: MouseEvent<HTMLButtonElement>) {
		const next = isDark ? 'light' : 'dark'
		if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setTheme(next)
			return
		}
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
		const x = left + width / 2
		const y = top + height / 2
		const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
		const transition = document.startViewTransition(() => {
			flushSync(() => setTheme(next))
			document.documentElement.classList.toggle('dark', next === 'dark')
		})
		transition.ready.then(() => {
			document.documentElement.animate(
				{ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
				{ duration: 650, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
			)
		})
	}

	return (
		<header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-6">
			<nav
				aria-label="Main"
				className="glass mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-lg py-1.5 pr-1.5 pl-4 font-mono text-sm 2xl:max-w-7xl"
			>
				<Link
					to={yearHref('2027')}
					aria-label="Juan Dawd, home"
					className="-my-1.5 -ml-2 inline-flex min-h-11 shrink-0 items-center rounded-md px-2"
				>
					<Logo />
				</Link>

				<div className="flex items-center gap-0.5 md:gap-1">
					<ul className="hidden items-center gap-1 md:flex">
						{sections.map(({ id, label }) => (
							<li key={id}>
								<a
									href={`#${id}`}
									onClick={() => select(id)}
									aria-current={active === id ? 'location' : undefined}
									className="rounded px-2 py-1.5 text-muted-foreground underline-offset-[6px] transition-[color,text-decoration-color] duration-300 hover:text-foreground aria-[current=location]:text-foreground aria-[current=location]:underline aria-[current=location]:decoration-accent-text aria-[current=location]:decoration-2"
								>
									{label}
								</a>
							</li>
						))}
					</ul>

					{/* Phones: the two exits, the CVs in the hero and the email at the contact card */}
					<a
						href="#cv"
						className="inline-flex h-11 items-center rounded px-1 text-muted-foreground transition-colors hover:text-foreground md:hidden"
					>
						cv
					</a>
					<a
						href="#contact"
						className="inline-flex h-11 items-center rounded px-1 text-muted-foreground transition-colors hover:text-foreground md:hidden"
					>
						contact
					</a>

					<YearSwitcher
						year="2027"
						className="h-11 border-glass-border font-mono text-muted-foreground hover:text-foreground md:h-9"
					/>

					<button
						type="button"
						onClick={toggleTheme}
						aria-label="Dark theme"
						// Before hydration the theme is unknown, so the state is left out
						aria-pressed={mounted ? isDark : undefined}
						className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:h-9 md:w-9"
					>
						{mounted && (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
					</button>
				</div>
			</nav>
		</header>
	)
}
