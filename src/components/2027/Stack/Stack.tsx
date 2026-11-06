import { useState } from 'react'

import { Section } from '@/components/2027/Section'
import { skillAreas, skillsList } from '@/pages/2027/constants'

const extra = skillsList.filter((skill) => !skill.core).length

export function Stack() {
	// The core tools first; everything else folds behind one toggle
	const [showAll, setShowAll] = useState(false)

	return (
		<Section id="stack" command="tree ./" title="stack">
			<div id="stack-list" className="panel divide-y divide-rule rounded-xl">
				{skillAreas.map((area) => (
					<div key={area} className="grid gap-2.5 p-4 sm:p-5 md:grid-cols-[11rem_1fr] md:gap-5">
						<h3 className="font-mono text-xs text-muted-foreground md:pt-1.5">{area}</h3>
						<ul className="flex flex-wrap gap-2" aria-label={area}>
							{skillsList
								.filter((skill) => skill.area === area && (showAll || skill.core))
								.map((skill) => (
									<li
										key={skill.name}
										className="inline-flex items-center gap-1.5 rounded border border-rule bg-background px-2 py-1 font-mono text-xs"
									>
										<svg
											aria-hidden="true"
											viewBox="0 0 24 24"
											className="h-3.5 w-3.5 fill-current text-muted-foreground"
										>
											<path d={skill.icon} />
										</svg>
										{skill.name}
									</li>
								))}
						</ul>
					</div>
				))}
			</div>
			<button
				type="button"
				aria-expanded={showAll}
				aria-controls="stack-list"
				onClick={() => setShowAll((open) => !open)}
				className="mt-2 inline-flex min-h-11 items-center px-1 font-mono text-xs text-accent-text hover:underline"
			>
				{showAll ? 'show core tools only' : `show all (+${extra} more)`}
			</button>
		</Section>
	)
}
