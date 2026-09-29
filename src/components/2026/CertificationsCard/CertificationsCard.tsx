import { Award, ExternalLink } from 'lucide-react'
import { certificationList } from '@/pages/2026/constants'

export function CertificationsCard() {
	const visibleCertifications = certificationList.filter((cert) => !cert.hidden)

	return (
		<div className="flex h-full flex-col gap-4">
			<h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
				Certifications
			</h2>
			<div className="flex flex-col gap-4">
				{visibleCertifications.map((cert) => (
					<div key={cert.name} className="flex items-start gap-3">
						<div className="mt-1 rounded-md bg-accent/10 p-2">
							<Award className="h-4 w-4 text-accent" />
						</div>
						<div>
							<h3 className="font-semibold">
								{cert.url ? (
									<a
										href={cert.url}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1.5 underline-offset-2 hover:underline"
									>
										{cert.name}
										<ExternalLink className="h-3 w-3 text-muted-foreground" />
									</a>
								) : (
									cert.name
								)}
							</h3>
							<p className="text-sm text-muted-foreground">
								{cert.issuer} &middot; {cert.year}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
