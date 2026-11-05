import type { ReactNode } from 'react'

interface BentoGridProps {
	children: ReactNode
	className?: string
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
	return (
		<div className={`grid auto-rows-[minmax(180px,auto)] grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 ${className}`}>
			{children}
		</div>
	)
}
