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
			<div className="panel grid gap-5 rounded-xl p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
				<p className="max-w-[48ch] text-lg leading-snug">
					Building something with React, Next.js or real-time data? I'd like to hear about it.
				</p>

				{/* Phone: email + copy on one row, socials split the row below. sm+: one row. */}
				<div className="grid gap-2 font-mono text-sm sm:flex sm:flex-wrap sm:items-center">
					<div className="flex gap-2">
						<a
							href={`mailto:${socialLinks.email}`}
							className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-md bg-primary px-4 font-bold text-primary-foreground transition-opacity select-all hover:opacity-90 sm:flex-none"
						>
							{socialLinks.email}
						</a>
						<button
							type="button"
							onClick={copyEmail}
							aria-label={copied ? 'Email copied' : 'Copy email'}
							className="inline-flex border border-rule bg-background h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors hover:text-accent-text"
						>
							{copied ? <Check aria-hidden="true" className="h-4 w-4" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
						</button>
						<span role="status" className="sr-only">
							{copied ? 'Email copied to clipboard' : ''}
						</span>
					</div>

					<div className="grid grid-cols-2 gap-2 sm:flex">
						<a
							href={socialLinks.github}
							target="_blank"
							rel="noreferrer"
							className="inline-flex border border-rule bg-background min-h-11 items-center justify-center gap-2 rounded-md px-4 transition-colors hover:text-accent-text"
						>
							<GithubIcon aria-hidden="true" className="h-4 w-4" />
							github
						</a>
						<a
							href={socialLinks.linkedin}
							target="_blank"
							rel="noreferrer"
							className="inline-flex border border-rule bg-background min-h-11 items-center justify-center gap-2 rounded-md px-4 transition-colors hover:text-accent-text"
						>
							<LinkedInIcon aria-hidden="true" className="h-4 w-4" />
							linkedin
						</a>
					</div>
				</div>
			</div>

			<footer className="mt-10 flex items-center justify-between gap-3 border-t border-rule px-1 pt-2 font-mono text-xs text-muted-foreground">
				<span>© 2027 Juan Dawd</span>
				<nav aria-label="Previous years" className="-mr-2 flex items-center">
					<span aria-hidden="true" className="mr-1">archive/</span>
					{/* Plain <a>: switching years is a full page load */}
					{otherYears('2027').map((year) => (
						<a
							key={year}
							href={yearHref(year)}
							className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-accent-text"
						>
							{year}
						</a>
					))}
				</nav>
			</footer>
		</Section>
	)
}
