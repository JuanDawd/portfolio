import { Section } from '@/components/2027/Section'
import { certificationList, educationList } from '@/pages/2027/constants'

const certifications = certificationList.filter((c) => !c.hidden)

export function Background() {
	return (
		<div className="grid gap-8 md:grid-cols-2 md:gap-5">
			<Section id="education" command="cat ./" title="education">
				<ul className="glass divide-y divide-rule overflow-hidden rounded-xl">
					{educationList.map((item) => (
						<li key={item.degree} className="grid gap-1 p-4 sm:p-5">
							<p className="font-mono text-xs text-muted-foreground">{item.time}</p>
							<h3 className="text-sm font-semibold">{item.degree}</h3>
							<p className="text-sm text-muted-foreground">{item.institution}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section id="certifications" command="ls ./" title="certifications">
				<ul className="glass divide-y divide-rule overflow-hidden rounded-xl">
					{certifications.map((cert) => (
						<li key={cert.name}>
							{cert.url ? (
								<a
									href={cert.url}
									target="_blank"
									rel="noreferrer"
									className="grid gap-1 p-4 transition-colors hover:bg-accent sm:p-5"
								>
									<CertBody {...cert} />
								</a>
							) : (
								<div className="grid gap-1 p-4 sm:p-5">
									<CertBody {...cert} />
								</div>
							)}
						</li>
					))}
				</ul>
			</Section>
		</div>
	)
}

function CertBody({ name, issuer, year }: { name: string; issuer: string; year: string }) {
	return (
		<>
			<p className="font-mono text-xs text-muted-foreground">
				{issuer} · {year}
			</p>
			<h3 className="text-sm font-semibold">{name}</h3>
		</>
	)
}
