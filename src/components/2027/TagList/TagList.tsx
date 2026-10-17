// The first few tags of a project or job; the full stack lives in the Stack section.
const VISIBLE = 4

type TagListProps = {
	tags: string[]
	label: string
}

export function TagList({ tags, label }: TagListProps) {
	const hidden = tags.length - VISIBLE
	return (
		<ul className="flex flex-wrap items-center gap-1.5" aria-label={label}>
			{tags.slice(0, VISIBLE).map((tag) => (
				<li key={tag} className="rounded border border-rule px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground">
					{tag}
				</li>
			))}
			{hidden > 0 && (
				<li className="px-1 font-mono text-[0.6875rem] text-muted-foreground" title={tags.slice(VISIBLE).join(', ')}>
					+{hidden}
					<span className="sr-only"> more: {tags.slice(VISIBLE).join(', ')}</span>
				</li>
			)}
		</ul>
	)
}
