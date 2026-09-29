import { Award } from 'lucide-react'
import { certificationList } from '@/pages/2026/constants'

const tileClass =
	'flex flex-col items-center justify-start gap-2 rounded-xl border border-border/30 bg-secondary/30 p-4 text-center transition-colors [&:last-child:nth-child(odd)]:col-span-2 sm:[&:last-child:nth-child(odd)]:col-span-1'

export function CertificationsCard() {
	const visibleCertifications = certificationList.filter((cert) => !cert.hidden)

	return (
		<div className="flex h-full flex-col gap-4">
			<h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
				Certifications
			</h2>
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
				{visibleCertifications.map((cert) => {
					const content = (
						<>
							<div className="rounded-md bg-accent/10 p-2">
								<Award className="h-4 w-4 text-accent" />
							</div>
							<h3 className="font-semibold">{cert.name}</h3>
							<p className="text-sm text-muted-foreground">
								{cert.issuer} &middot; {cert.year}
							</p>
						</>
					)

					return cert.url ? (
						<a
							key={cert.name}
							href={cert.url}
							target="_blank"
							rel="noreferrer"
							className={`${tileClass} hover:bg-primary/10`}
						>
							{content}
						</a>
					) : (
						<div key={cert.name} className={tileClass}>
							{content}
						</div>
					)
				})}
			</div>
		</div>
	)
}
