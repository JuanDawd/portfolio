import { ExternalLink } from 'lucide-react'

import { GithubIcon } from '@/components/shared/icons/GithubIcon'
import { Section } from '@/components/2027/Section'
import { projectsList } from '@/pages/2027/constants'

export function Projects() {
	return (
		<Section id="work" command="ls ./" title="projects" aside={`${projectsList.length} total`}>
			<ol className="glass divide-y divide-rule overflow-hidden rounded-xl">
				{projectsList.map((project, i) => (
					<li key={project.title} className="grid gap-3 p-4 sm:grid-cols-[1fr_11rem] sm:gap-5 lg:grid-cols-[1fr_18rem] lg:gap-8 sm:p-5">
						<div className="grid min-w-0 content-start gap-2">
							<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<span className="font-mono text-xs text-muted-foreground tabular-nums">
									{String(i + 1).padStart(2, '0')}
								</span>
								<h3 className="font-mono text-base font-extrabold tracking-tight uppercase">
									{project.title}
								</h3>
								<span className="bg-foreground px-1.5 py-0.5 font-mono text-[0.6875rem] leading-none font-bold text-background uppercase">
									{project.role}
								</span>
								<span className="font-mono text-xs text-muted-foreground">{project.type}</span>
							</div>

							<p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

							<ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
								{project.technologies.map((tech) => (
									<li
										key={tech}
										className="rounded border border-glass-border px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
									>
										{tech}
									</li>
								))}
							</ul>

							{(project.deployment || project.github) && (
								<div className="flex flex-wrap gap-4 font-mono text-sm">
									{project.deployment && (
										<a
											href={project.deployment}
											target="_blank"
											rel="noreferrer"
											className="inline-flex min-h-11 items-center gap-1.5 text-accent-text hover:underline sm:min-h-0"
										>
											<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
											open {project.title}
										</a>
									)}
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noreferrer"
											className="inline-flex min-h-11 items-center gap-1.5 text-accent-text hover:underline sm:min-h-0"
										>
											<GithubIcon aria-hidden="true" className="h-3.5 w-3.5" />
											source
										</a>
									)}
								</div>
							)}
						</div>

						{project.image && (
							<img
								src={project.image}
								alt=""
								width={960}
								height={540}
								loading="lazy"
								decoding="async"
								className="order-first aspect-video w-full rounded-md border border-glass-border object-cover sm:order-none"
							/>
						)}
					</li>
				))}
			</ol>
		</Section>
	)
}
