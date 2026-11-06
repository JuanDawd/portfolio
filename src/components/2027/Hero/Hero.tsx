import type { ReactNode } from 'react'

import { experienceList } from '@/pages/2027/constants'

const current = experienceList[0]

export function Hero() {
	return (
		<section
			aria-labelledby="hero-title"
			className="glass grid min-w-0 gap-5 rounded-xl p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-x-12 lg:p-10"
		>
			{/* lg+: name and pitch on the left, terminal output and actions on the right */}
			<div className="grid min-w-0 gap-4">
				<p className="mb-1 font-mono text-sm text-muted-foreground" aria-hidden="true">
					<span className="text-accent-text">$</span> whoami
				</p>
				<h1
					id="hero-title"
					// Below sm the size follows the screen width, so the name fits a 320px phone on one line
					className="font-mono text-[clamp(2.25rem,12.5vw,3rem)] leading-[0.95] font-extrabold tracking-tighter whitespace-nowrap uppercase sm:text-7xl 2xl:text-8xl"
				>
					Juan <span className="bg-primary [box-decoration-break:clone] px-[0.12em] text-primary-foreground">Dawd</span>
				</h1>
				{/* The positioning, in plain words: the one line a visitor should leave with */}
				<p className="mt-2 max-w-[34ch] text-xl leading-snug text-balance sm:mt-3 sm:text-2xl">
					I design, build and ship SaaS products end to end, on my own.
				</p>
			</div>

			<div className="grid gap-5">
				{/* Each phrase stays on one line, so narrow phones wrap between phrases, not inside them */}
				<ul className="grid gap-1 font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
					<li>
						<span aria-hidden="true">&gt; </span>
						<Phrase>mid-senior</Phrase> <Phrase>{current.position.toLowerCase()}</Phrase>{' '}
						<Phrase>@ {current.company.toLowerCase()}</Phrase>
					</li>
					<li>
						<span aria-hidden="true">&gt; </span>
						<Phrase>shipped atelier,</Phrase> <Phrase>in production</Phrase> <Phrase>@ innovations befine</Phrase>
					</li>
					<li>
						<span aria-hidden="true">&gt; </span>
						<Phrase>react · next.js · node.js</Phrase> <Phrase>· postgres</Phrase>
					</li>
					<li>
						<span aria-hidden="true">&gt; </span>
						<Phrase>real-time:</Phrase>{' '}
						<Phrase>
							redis, mqtt, sse <span aria-hidden="true" className="gt-cursor" />
						</Phrase>
					</li>
				</ul>

				{/* Phone: one full-width button per row. sm+: side by side. */}
				<div className="grid gap-2 font-mono text-sm sm:flex sm:flex-wrap">
					<a
						href="/resume/JuanDawd_ATS_Eng_CV.pdf"
						target="_blank"
						rel="noreferrer"
						className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 font-bold text-primary-foreground transition-opacity hover:opacity-90"
					>
						./resume.pdf
					</a>
					<a
						href="/resume/JuanDawd_ATS_Esp_CV.pdf"
						target="_blank"
						rel="noreferrer"
						lang="es"
						className="glass-flat inline-flex min-h-11 items-center justify-center rounded-md px-4 transition-colors hover:text-accent-text"
					>
						./hoja-de-vida.pdf
					</a>
					<a
						href="#contact"
						className="glass-flat inline-flex min-h-11 items-center justify-center rounded-md px-4 transition-colors hover:text-accent-text"
					>
						contact --me
					</a>
				</div>
			</div>
		</section>
	)
}

function Phrase({ children }: { children: ReactNode }) {
	return <span className="whitespace-nowrap">{children}</span>
}
