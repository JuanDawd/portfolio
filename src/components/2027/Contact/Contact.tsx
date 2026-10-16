import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { GithubIcon } from '@/components/shared/icons/GithubIcon'
import { LinkedInIcon } from '@/components/shared/icons/LinkedInIcon'
import { Section } from '@/components/2027/Section'
import { socialLinks } from '@/pages/2027/constants'
import { otherYears, yearHref } from '@/years'

export function Contact() {
	const [copied, setCopied] = useState(false)

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(socialLinks.email)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch {
			// Clipboard unavailable: the address stays visible and selectable
		}
	}

	return (
		<Section id="contact" command="./" title="contact">
			<div className="glass grid gap-5 rounded-xl p-5 sm:p-8">
				<p className="max-w-[48ch] text-lg leading-snug">
					Building something with React, Next.js or real-time data? I'd like to hear about it.
				</p>

				<div className="flex flex-wrap items-center gap-2 font-mono text-sm">
					<a
						href={`mailto:${socialLinks.email}`}
						className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 font-bold text-primary-foreground transition-opacity select-all hover:opacity-90"
					>
						{socialLinks.email}
					</a>
					<button
						type="button"
						onClick={copyEmail}
						aria-label={copied ? 'Email copied' : 'Copy email'}
						className="glass inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:text-accent-text"
					>
						{copied ? <Check aria-hidden="true" className="h-4 w-4" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
					</button>
					<span role="status" className="sr-only">
						{copied ? 'Email copied to clipboard' : ''}
					</span>
				</div>

				<div className="flex flex-wrap gap-2 font-mono text-sm">
					<a
						href={socialLinks.github}
						target="_blank"
						rel="noreferrer"
						className="glass inline-flex min-h-11 items-center gap-2 rounded-md px-4 transition-colors hover:text-accent-text"
					>
						<GithubIcon aria-hidden="true" className="h-4 w-4" />
						github
					</a>
					<a
						href={socialLinks.linkedin}
						target="_blank"
						rel="noreferrer"
						className="glass inline-flex min-h-11 items-center gap-2 rounded-md px-4 transition-colors hover:text-accent-text"
					>
						<LinkedInIcon aria-hidden="true" className="h-4 w-4" />
						linkedin
					</a>
				</div>
			</div>

			<footer className="mt-8 flex flex-wrap items-center justify-between gap-3 px-1 font-mono text-xs text-muted-foreground">
				<span>© 2027 Juan Dawd</span>
				<span className="flex flex-wrap gap-3">
					{/* Plain <a>: switching years is a full page load */}
					{otherYears('2027').map((year) => (
						<a key={year} href={yearHref(year)} className="inline-flex min-h-11 items-center hover:text-accent-text sm:min-h-0">
							cd ./archive/{year}
						</a>
					))}
				</span>
			</footer>
		</Section>
	)
}
