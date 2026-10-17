import { Section } from '@/components/2027/Section'
import { skillsList } from '@/pages/2027/constants'

export function Stack() {
	return (
		<Section id="stack" command="cat ./" title="stack">
			<ul className="panel flex flex-wrap gap-2 rounded-xl p-4 sm:p-5">
				{skillsList.map((skill) => (
					<li
						key={skill.name}
						className="inline-flex items-center gap-1.5 rounded border border-rule bg-background px-2 py-1 font-mono text-xs"
					>
						{skill.icon && (
							<svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current text-muted-foreground">
								<path d={skill.icon} />
							</svg>
						)}
						{skill.name}
					</li>
				))}
			</ul>
		</Section>
	)
}
