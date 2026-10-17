import type { ReactNode } from 'react'

type SectionProps = {
	id: string
	// Shell command shown before the title, e.g. 'ls ./' → "ls ./projects".
	// Decorative: screen readers only hear the title.
	command: string
	title: string
	aside?: ReactNode
	children: ReactNode
	className?: string
}

export function Section({ id, command, title, aside, children, className = '' }: SectionProps) {
	return (
		<section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 ${className}`}>
			<div className="mb-3 flex items-baseline justify-between gap-4 px-1">
				<h2 id={`${id}-title`} className="font-mono text-sm font-medium tracking-wide">
					<span aria-hidden="true" className="text-muted-foreground">
						<span className="text-accent-text">$</span> {command}
					</span>
					{title}
				</h2>
				{aside && <span className="font-mono text-xs text-muted-foreground">{aside}</span>}
			</div>
			{children}
		</section>
	)
}
