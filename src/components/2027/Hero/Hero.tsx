import { biography, experienceList } from '@/pages/2027/constants'

const current = experienceList[0]

export function Hero() {
	return (
		<section
			aria-labelledby="hero-title"
			className="glass grid gap-6 rounded-xl p-5 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10"
		>
			<div className="grid content-start gap-5">
				<p className="font-mono text-sm text-muted-foreground" aria-hidden="true">
					<span className="text-accent-text">$</span> whoami
				</p>

				<h1
					id="hero-title"
					className="font-mono text-5xl leading-[0.95] font-extrabold tracking-tighter uppercase sm:text-7xl"
				>
					Juan{' '}
					<span className="bg-primary px-[0.12em] text-primary-foreground [box-decoration-break:clone]">
						Dawd
					</span>
				</h1>

				<ul className="grid gap-1 font-mono text-sm leading-relaxed sm:text-base">
					<li>
						<span aria-hidden="true" className="text-muted-foreground">&gt; </span>
						{current.position.toLowerCase()} @ {current.company.toLowerCase()}
					</li>
					<li>
						<span aria-hidden="true" className="text-muted-foreground">&gt; </span>
						react · next.js · node.js · postgres
					</li>
					<li>
						<span aria-hidden="true" className="text-muted-foreground">&gt; </span>
						real-time: redis, mqtt, sse <span aria-hidden="true" className="gt-cursor" />
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
						className="glass inline-flex min-h-11 items-center justify-center rounded-md px-4 transition-colors hover:text-accent-text"
					>
						./hoja-de-vida.pdf
					</a>
					<a
						href="#contact"
						className="glass inline-flex min-h-11 items-center justify-center rounded-md px-4 transition-colors hover:text-accent-text"
					>
						contact --me
					</a>
				</div>
			</div>

			{/* Wide screens: the bio fills the right half of the card */}
			<div className="grid content-start gap-3 border-t border-rule pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
				<p className="font-mono text-sm text-muted-foreground" aria-hidden="true">
					<span className="text-accent-text">$</span> cat ./about.md
				</p>
				<p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:text-base">{biography}</p>
			</div>
		</section>
	)
}
