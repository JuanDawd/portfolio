import { Github, Mail } from 'lucide-react'

import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { Button } from '@/components/ui/button'
import { socialLinks } from '@/pages/2026/constants'

export function ContactCard() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-4">
			<h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
				Let's Connect
			</h2>
			<div className="flex gap-3">
				<Button variant="outline" size="icon" asChild>
					<a
						href={socialLinks.github}
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
					>
						<Github className="h-5 w-5" />
					</a>
				</Button>
				<Button variant="outline" size="icon" asChild>
					<a
						href={socialLinks.linkedin}
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
					>
						<LinkedInIcon className="h-5 w-5" />
					</a>
				</Button>
				<Button variant="outline" size="icon" asChild>
					<a href={`mailto:${socialLinks.email}`} aria-label="Email">
						<Mail className="h-5 w-5" />
					</a>
				</Button>
			</div>
		</div>
	)
}
