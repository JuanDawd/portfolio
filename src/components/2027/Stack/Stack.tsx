import { Section } from '@/components/2027/Section'
import { skillAreas, skillsList } from '@/pages/2027/constants'

export function Stack() {
	return (
		<Section id="stack" command="cat ./" title="stack">
			<div className="panel divide-y divide-rule rounded-xl">
				{skillAreas.map((area) => (
					<div key={area} className="grid gap-2.5 p-4 sm:p-5 md:grid-cols-[11rem_1fr] md:gap-5">
						<h3 className="font-mono text-xs text-muted-foreground md:pt-1.5">{area}</h3>
						<ul className="flex flex-wrap gap-2" aria-label={area}>
							{skillsList
								.filter((skill) => skill.area === area)
								.map((skill) => (
									<li
										key={skill.name}
										className="inline-flex items-center gap-1.5 rounded border border-rule bg-background px-2 py-1 font-mono text-xs"
									>
										{skill.icon && (
											<svg
												aria-hidden="true"
												viewBox="0 0 24 24"
												className="h-3.5 w-3.5 fill-current text-muted-foreground"
											>
												<path d={skill.icon} />
											</svg>
										)}
										{skill.name}
									</li>
								))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	)
}
