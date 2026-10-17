import { ExternalLink } from 'lucide-react'

import { GithubIcon } from '@/components/shared/icons/GithubIcon'
import { Section } from '@/components/2027/Section'
import { TagList } from '@/components/2027/TagList'
import { projectsList, type Project } from '@/pages/2027/constants'

// The first project is the flagship: the proof of "ships SaaS products on my own"
const [featured, ...rest] = projectsList

export function Projects() {
	return (
		<Section id="work" command="ls ./" title="projects">
			<div className="grid gap-4">
				<article
					aria-labelledby="featured-project"
					className="panel grid overflow-hidden rounded-xl lg:grid-cols-[3fr_2fr]"
				>
					{featured.image && (
						<img
							src={featured.image}
							alt=""
							width={960}
							height={540}
							decoding="async"
							className="aspect-video w-full border-b border-rule object-cover object-top lg:h-full lg:border-r lg:border-b-0"
						/>
					)}
					<div className="grid content-start gap-3 p-5 sm:p-8">
						<h3
							id="featured-project"
							className="font-mono text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-3xl"
						>
							{featured.title}
						</h3>
						<Meta project={featured} note="built solo" />
						<p className="max-w-[52ch] leading-relaxed text-muted-foreground">{featured.description}</p>
						<TagList tags={featured.technologies} label="Technologies" />
						<Links project={featured} />
					</div>
				</article>

				<ol className="panel divide-y divide-rule overflow-hidden rounded-xl">
					{rest.map((project) => (
						<li
							key={project.title}
							className="grid gap-3 p-4 sm:grid-cols-[1fr_11rem] sm:gap-5 sm:p-5 lg:grid-cols-[1fr_16rem] lg:gap-8"
						>
							<div className="grid min-w-0 content-start gap-2">
								<h3 className="font-mono text-base font-extrabold tracking-tight uppercase">{project.title}</h3>
								<Meta project={project} />
								<p className="max-w-[58ch] text-sm leading-relaxed text-muted-foreground">{project.description}</p>
								<TagList tags={project.technologies} label="Technologies" />
								<Links project={project} />
							</div>

							{project.image && (
								<img
									src={project.image}
									alt=""
									width={960}
									height={540}
									loading="lazy"
									decoding="async"
									className="order-first aspect-video w-full rounded-md border border-rule object-cover sm:order-none"
								/>
							)}
						</li>
					))}
				</ol>
			</div>
		</Section>
	)
}

function Meta({ project, note }: { project: Project; note?: string }) {
	return (
		<p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
			<span className="bg-foreground px-1.5 py-0.5 text-[0.6875rem] leading-none font-bold text-background uppercase">
				{project.role}
			</span>
			{project.type}
			{note && (
				<>
					<span aria-hidden="true">·</span>
					<span className="text-accent-text">{note}</span>
				</>
			)}
		</p>
	)
}

function Links({ project }: { project: Project }) {
	if (!project.deployment && !project.github) return null
	return (
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
	)
}
