import { Section } from '@/components/2027/Section'
import { TagList } from '@/components/2027/TagList'
import { experienceList } from '@/pages/2027/constants'

// Bullets shown before the rest fold into "more"
const VISIBLE_LINES = 3

export function Experience() {
	return (
		<Section id="experience" command="git log ./" title="experience">
			<ol className="panel divide-y divide-rule overflow-hidden rounded-xl">
				{experienceList.map((job) => (
					<li key={job.company + job.time} className="grid gap-2 p-4 sm:grid-cols-[10rem_1fr] sm:gap-5 sm:p-5">
						<p className="font-mono text-xs text-muted-foreground sm:pt-1">{job.time}</p>
						<div className="grid min-w-0 gap-2">
							<h3 className="font-mono text-base font-bold">
								{job.position}{' '}
								<span className="text-muted-foreground">@</span>{' '}
								{job.companyLink ? (
									<a href={job.companyLink} target="_blank" rel="noreferrer" className="text-accent-text hover:underline">
										{job.company}
									</a>
								) : (
									job.company
								)}
							</h3>
							<Bullets lines={job.description.slice(0, VISIBLE_LINES)} />
							{job.description.length > VISIBLE_LINES && (
								<details className="group">
									<summary className="inline-flex min-h-11 cursor-pointer list-none items-center font-mono text-xs text-accent-text hover:underline sm:min-h-0 [&::-webkit-details-marker]:hidden">
										<span className="group-open:hidden">+{job.description.length - VISIBLE_LINES} more</span>
										<span className="hidden group-open:inline">show less</span>
									</summary>
									<Bullets lines={job.description.slice(VISIBLE_LINES)} className="mt-1.5" />
								</details>
							)}
							<TagList tags={job.techStack} label="Tech stack" />
						</div>
					</li>
				))}
			</ol>
		</Section>
	)
}

function Bullets({ lines, className = '' }: { lines: string[]; className?: string }) {
	return (
		<ul className={`grid max-w-[58ch] gap-1.5 text-sm leading-relaxed text-muted-foreground ${className}`}>
			{lines.map((line) => (
				<li key={line} className="grid grid-cols-[1ch_1fr] gap-2">
					<span aria-hidden="true" className="font-mono text-accent-text">
						›
					</span>
					<span>{line}</span>
				</li>
			))}
		</ul>
	)
}
