import type { ReactNode } from 'react'

type SectionProps = {
	id: string
	// Shell command shown before the title, e.g. 'ls ./' → "ls ./projects".
	// Decorative: screen readers only hear the title.
	command: string
	title: string
	children: ReactNode
	className?: string
}

export function Section({ id, command, title, children, className = '' }: SectionProps) {
	return (
		<section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 ${className}`}>
			<h2 id={`${id}-title`} className="mb-3 px-1 font-mono text-sm font-medium tracking-wide">
				<span aria-hidden="true" className="text-muted-foreground">
					<span className="text-accent-text">$</span> {command}
				</span>
				{title}
			</h2>
			{children}
		</section>
	)
}
