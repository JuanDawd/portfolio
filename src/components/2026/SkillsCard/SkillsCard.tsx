import { Badge } from '@/components/ui/badge'
import { skillsList } from '@/pages/2026/constants'

// Brand colors that are near-black disappear on the dark theme, so those
// icons follow the text color instead (still readable in the light theme).
function isDark(hex: string) {
	const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
	return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.35
}

export function SkillsCard() {
	return (
		<div className="flex h-full flex-col gap-4">
			<h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
				Skills
			</h2>
			<div className="flex flex-wrap gap-2 after:grow-[999] after:content-['']">
				{skillsList.map(({ name, icon, hex }) => (
					<Badge
						variant="secondary"
						className="flex h-auto grow cursor-default items-center justify-center gap-1.5 px-2.5 py-1 text-[13px] font-normal transition-colors hover:bg-primary/10"
						key={name}
					>
						{icon && (
							<svg
								role="img"
								viewBox="0 0 24 24"
								className="h-3.5 w-3.5 shrink-0"
								fill={isDark(hex) ? 'currentColor' : `#${hex}`}
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
