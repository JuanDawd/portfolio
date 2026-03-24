import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { experienceList } from '@/pages/2026/constants'

export function ExperienceCard() {
	return (
		<div className="flex h-full flex-col gap-4">
			<h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
				Experience
			</h2>
			<div className="flex flex-col gap-3 overflow-y-auto">
				{experienceList.map((exp, i) => (
					<div key={exp.company}>
						<div className="flex items-baseline justify-between gap-2">
							<div className="min-w-0">
								<h3 className="truncate font-semibold">{exp.position}</h3>
								<p className="text-sm text-muted-foreground">
									{exp.companyLink ? (
										<a
											href={exp.companyLink}
											target="_blank"
											rel="noreferrer"
											className="underline-offset-2 hover:underline"
										>
											{exp.company}
										</a>
									) : (
										exp.company
									)}
								</p>
							</div>
							<span className="shrink-0 text-xs text-muted-foreground">
								{exp.time}
							</span>
						</div>
						{Array.isArray(exp.description) ? (
							<ul className="mt-1 list-inside list-disc space-y-0.5 text-sm leading-relaxed text-foreground/80">
								{exp.description.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						) : (
							<p className="mt-1 text-sm leading-relaxed text-foreground/80">
								{exp.description}
							</p>
						)}
						{exp.techStack?.length > 0 && (
							<div className="mt-2 flex flex-wrap gap-1">
								{exp.techStack.map((tech) => (
									<Badge key={tech} variant="secondary">
										{tech}
									</Badge>
								))}
							</div>
						)}
						{i < experienceList.length - 1 && <Separator className="mt-3" />}
					</div>
				))}
			</div>
		</div>
	)
}
