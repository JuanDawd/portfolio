import { Badge } from '@/components/ui/badge'
import { skillsList } from '@/pages/2025/constants'

export function SkillsCard() {
	return (
		<div className="flex h-full flex-col gap-4">
			<h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
				Skills
			</h2>
			<div className="flex flex-wrap gap-3">
				{skillsList.map(({ name, icon, hex }) => (
					<Badge
						variant="secondary"
						className="flex h-auto cursor-default items-center gap-2 px-3 py-1.5 text-sm transition-colors hover:bg-primary/10"
						key={name}
					>
						{icon && (
							<svg
								role="img"
								viewBox="0 0 24 24"
								className="h-5 w-5 shrink-0"
								fill={`#${hex}`}
								aria-label={name}
							>
								<path d={icon} />
							</svg>
						)}
						{name}
					</Badge>
				))}
			</div>
		</div>
	)
}
