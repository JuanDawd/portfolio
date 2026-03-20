import { biography } from '@/pages/2026/constants'

export function BiographyCard() {
	return (
		<div className="flex h-full flex-col justify-center gap-4">
			<h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
				About
			</h2>
			<p className="text-base leading-relaxed">{biography}</p>
		</div>
	)
}
