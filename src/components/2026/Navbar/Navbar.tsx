import { useSyncExternalStore } from 'react'
import { useTheme } from '@/lib/theme'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { YearSwitcher } from '@/components/shared/YearSwitcher'
import { yearHref } from '@/years'

const emptySubscribe = () => () => {}

export function Navbar() {
	const { theme, setTheme, resolvedTheme } = useTheme()
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	)

	const isDark = theme === 'system' && resolvedTheme ? resolvedTheme === 'dark' : theme === 'dark'

	return (
		<header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
			<nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
				<Link to={yearHref('2026')} className="text-lg font-bold tracking-tight">
					JD
				</Link>

				<div className="flex items-center gap-4">
					<YearSwitcher year="2026" className="text-muted-foreground hover:text-foreground" />

					{mounted && (
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setTheme(isDark ? 'light' : 'dark')}
							aria-label="Toggle theme"
							className="h-9 w-9"
						>
							{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</Button>
					)}
				</div>
			</nav>
		</header>
	)
}
