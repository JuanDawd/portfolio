import { useState } from 'react'

// The first few tags of a project or job; "+N" shows the rest in place.
const VISIBLE = 4

type TagListProps = {
	tags: string[]
	label: string
}

export function TagList({ tags, label }: TagListProps) {
	const [expanded, setExpanded] = useState(false)
	const hidden = tags.length - VISIBLE
	const shown = expanded || hidden <= 0 ? tags : tags.slice(0, VISIBLE)

	return (
		<ul className="flex flex-wrap items-center gap-1.5" aria-label={label}>
			{shown.map((tag) => (
				<li key={tag} className="rounded border border-rule px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
					{tag}
				</li>
			))}
			{hidden > 0 && (
				<li>
					<button
						type="button"
						aria-expanded={expanded}
						onClick={() => setExpanded((open) => !open)}
						className="inline-flex min-h-11 items-center px-1 font-mono text-xs text-accent-text hover:underline pointer-fine:min-h-6"
					>
						{expanded ? 'fewer tags' : `+${hidden} tags`}
					</button>
				</li>
			)}
		</ul>
	)
}
