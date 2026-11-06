import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { GithubIcon } from '@/components/shared/icons/GithubIcon'
import { LinkedInIcon } from '@/components/shared/icons/LinkedInIcon'
import { Section } from '@/components/2027/Section'
import { socialLinks } from '@/pages/2027/constants'

export function Contact() {
	const [copy, setCopy] = useState<'idle' | 'copied' | 'failed'>('idle')
	const copied = copy === 'copied'

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(socialLinks.email)
			setCopy('copied')
			setTimeout(() => setCopy('idle'), 2000)
		} catch {
			// Clipboard unavailable: say so; the address stays visible and selectable
			setCopy('failed')
		}
	}

	return (
		<Section id="contact" command="./" title="contact">
			{/* The closing bookend: a slab like the hero, restating the pitch, email first */}
			<div className="slab grid gap-6 rounded-xl p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-10">
				<p className="max-w-[30ch] text-2xl leading-snug text-balance sm:text-3xl">
					Have a product to build, or a team that needs someone who can ship one? Write to me.
				</p>

				<div className="grid gap-3 font-mono">
					<div className="flex gap-2">
						<a
							href={`mailto:${socialLinks.email}`}
							className="inline-flex min-h-14 min-w-0 flex-1 items-center justify-center rounded-md bg-primary px-3 text-sm font-bold text-primary-foreground transition-opacity select-all hover:opacity-90 sm:px-5 sm:text-lg"
						>
							{socialLinks.email}
						</a>
						<button
							type="button"
							onClick={copyEmail}
							aria-label={copied ? 'Email copied' : 'Copy email'}
							className="glass-flat inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md transition-colors hover:text-accent-text"
						>
							{copied ? (
								<Check aria-hidden="true" className="h-5 w-5" />
							) : (
								<Copy aria-hidden="true" className="h-5 w-5" />
							)}
						</button>
						<span role="status" className="sr-only">
							{copied ? 'Email copied to clipboard' : ''}
						</span>
					</div>
					{copy === 'failed' && (
						<p role="alert" className="text-sm text-muted-foreground">
							Couldn't copy it. Select the address above instead.
						</p>
					)}

					<div className="flex flex-wrap gap-x-5 text-sm text-muted-foreground">
						<a
							href={socialLinks.github}
							target="_blank"
							rel="noreferrer"
							className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent-text"
						>
							<GithubIcon aria-hidden="true" className="h-4 w-4" />
							github
						</a>
						<a
							href={socialLinks.linkedin}
							target="_blank"
							rel="noreferrer"
							className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent-text"
						>
							<LinkedInIcon aria-hidden="true" className="h-4 w-4" />
							linkedin
						</a>
					</div>
				</div>
			</div>
		</Section>
	)
}
