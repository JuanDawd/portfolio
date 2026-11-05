import { Check, ChevronDown } from 'lucide-react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { CURRENT_YEAR, switcherYears, yearHref } from '@/years'

type YearSwitcherProps = {
	// The year whose pages render the switcher
	year: string
	// Trigger styling, so each year can match its own navbar
	className?: string
	// Menu alignment against the trigger
	align?: 'start' | 'center' | 'end'
}

// Shows the year being viewed and lists every published portfolio year.
// Items are plain <a>: switching years is a full page load, so only one
// year's stylesheet is ever active.
export function YearSwitcher({ year, className, align = 'end' }: YearSwitcherProps) {
	const options = switcherYears(year)
	if (options.length < 2) return null

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger
				aria-label={`Portfolio year: ${year}. Switch year`}
				className={cn(
					'inline-flex h-9 items-center gap-1 rounded-md border border-border px-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
					className,
				)}
			>
				{year}
				<ChevronDown aria-hidden="true" className="h-3.5 w-3.5 opacity-70" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align={align} className="min-w-44">
				<DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Portfolio by year</DropdownMenuLabel>
				{options.map((option) => (
					<DropdownMenuItem key={option} asChild>
						<a
							href={yearHref(option)}
							aria-current={option === year ? 'page' : undefined}
							className="flex min-h-10 cursor-pointer items-center justify-between gap-4"
						>
							<span className="flex items-center gap-2">
								<Check aria-hidden="true" className={cn('h-4 w-4', option === year ? 'opacity-100' : 'opacity-0')} />
								{option}
							</span>
							{option === CURRENT_YEAR && <span className="text-xs text-muted-foreground">latest</span>}
						</a>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
