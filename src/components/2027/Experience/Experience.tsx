import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

import { Section } from '@/components/2027/Section'
import { TagList } from '@/components/2027/TagList'
import { experienceList } from '@/pages/2027/constants'

// Bullets shown before the rest fold into "more"
const VISIBLE_LINES = 3

export function Experience() {
	return (
		<Section id="experience" command="git log ./" title="experience">
			<ol className="panel divide-y divide-rule overflow-hidden rounded-xl">
				{experienceList.map((job, i) => (
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
							{job.clients && (
								<p className="flex flex-wrap items-center gap-x-2.5 font-mono text-[0.8125rem] text-muted-foreground">
									{/* Phones: the label takes its own line so the three names fit on one row */}
									<span className="basis-full sm:basis-auto">clients:</span>
									{job.clients.map((client, n) => (
										<span key={client.name} className="inline-flex items-center gap-2.5">
											{n > 0 && <span aria-hidden="true" className="opacity-50">·</span>}
											<a
												href={client.url}
												target="_blank"
												rel="noreferrer"
												className="inline-flex min-h-11 items-center gap-1 font-bold text-accent-text hover:underline sm:min-h-7"
											>
												{client.name}
												<ExternalLink aria-hidden="true" className="h-3 w-3" />
											</a>
										</span>
									))}
								</p>
							)}
							<JobBullets id={`job-${i}`} lines={job.description} />
							<TagList tags={job.techStack} label="Tech stack" />
						</div>
					</li>
				))}
			</ol>
		</Section>
	)
}

// One list: the extra lines join it when expanded, and the toggle always sits below it
function JobBullets({ id, lines }: { id: string; lines: string[] }) {
	const [expanded, setExpanded] = useState(false)
	const hidden = lines.length - VISIBLE_LINES
	const shown = expanded || hidden <= 0 ? lines : lines.slice(0, VISIBLE_LINES)

	return (
		<div className="grid justify-items-start gap-1.5">
			<ul id={id} className="grid max-w-[58ch] gap-1.5 text-sm leading-relaxed text-muted-foreground">
				{shown.map((line) => (
					<li key={line} className="grid grid-cols-[1ch_1fr] gap-2">
						<span aria-hidden="true" className="font-mono text-accent-text">
							›
						</span>
						<span>{line}</span>
					</li>
				))}
			</ul>
			{hidden > 0 && (
				<button
					type="button"
					aria-expanded={expanded}
					aria-controls={id}
					onClick={() => setExpanded((open) => !open)}
					className="inline-flex min-h-11 items-center font-mono text-xs text-accent-text hover:underline sm:min-h-0"
				>
					{expanded ? 'show less' : `+${hidden} more`}
				</button>
			)}
		</div>
	)
}
