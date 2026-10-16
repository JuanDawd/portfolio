import { Section } from '@/components/2027/Section'
import { experienceList } from '@/pages/2027/constants'

export function Experience() {
	return (
		<Section id="experience" command="git log ./" title="experience">
			<ol className="glass divide-y divide-rule overflow-hidden rounded-xl">
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
							<ul className="grid gap-1.5 text-sm leading-relaxed text-muted-foreground">
								{job.description.map((line) => (
									<li key={line} className="grid grid-cols-[1ch_1fr] gap-2">
										<span aria-hidden="true" className="font-mono text-accent-text">›</span>
										<span>{line}</span>
									</li>
								))}
							</ul>
							<ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
								{job.techStack.map((tech) => (
									<li
										key={tech}
										className="rounded border border-glass-border px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
									>
										{tech}
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ol>
		</Section>
	)
}
