import { useState, type CSSProperties } from 'react'

import { useTheme } from '@/lib/theme'

type Mode = 'light' | 'dark'

// The mark's colours per theme: the glass J sits over a red D, and the glass blurs a backdrop
// colour chosen to keep the J readable on that theme's navbar
const PALETTE = {
	light: { d0: '#f07a80', d1: '#ea5f66', tint0: 0.85, tint1: 0.3, backdrop: '#14161b', shadow: 0.5 },
	dark: { d0: '#d95256', d1: '#b3262f', tint0: 0.95, tint1: 0.45, backdrop: '#f1f2f4', shadow: 0.32 },
} as const

const D = 'M64 32 H136 A96 96 0 0 1 136 224 H64 Z'
const J = 'M96 32 H136 V160 A60 60 0 0 1 16 160 V144 H56 V160 A20 20 0 0 0 96 160 Z'

const vars = (m: Mode) => {
	const p = PALETTE[m]
	return `--jd-d0:${p.d0};--jd-d1:${p.d1};--jd-t0:${p.tint0};--jd-t1:${p.tint1};--jd-bd:${p.backdrop}`
}
const SETTLE = 'cubic-bezier(.2,.8,.2,1)'
const SWEEP = 'cubic-bezier(.45,0,.25,1)'

// The colours follow the .dark class, so the right mark shows before hydration.
// On load the glass J slides in over the D. On a theme change the J sweeps across the D,
// repainting it in the new red behind it, then slides back.
const CSS = `
:root,.jd-from-light{${vars('light')}}
.dark,.jd-from-dark{${vars('dark')}}
.jd-logo{view-transition-name:jd-logo}
.jd-s0{stop-color:var(--jd-d0)}.jd-s1{stop-color:var(--jd-d1)}
.jd-t0{stop-opacity:var(--jd-t0)}.jd-t1{stop-opacity:var(--jd-t1)}
.jd-bg{fill:var(--jd-bd)}
.jd-sh{filter:url(#jd-sh-light)}.dark .jd-sh{filter:url(#jd-sh-dark)}
.jd-d{transform-box:fill-box;transform-origin:center;animation:jd-in-d .5s ${SETTLE} both}
.jd-j-in{animation:jd-in-j .9s .15s ${SETTLE} both}
.jd-bd-in{animation:jd-in-bd .9s .15s ${SETTLE} both}
.jd-wipe{animation:jd-wipe 1.4s .15s ${SWEEP} both}
.jd-j-swap{animation:jd-swap-j 1.4s .15s ${SWEEP} both}
.jd-bd-swap{animation:jd-swap-bd 1.4s .15s ${SWEEP} both}
.jd-bg-swap{animation:jd-bg 1.1s .15s ease both}
@keyframes jd-in-d{from{opacity:0;transform:scale(.9)}}
@keyframes jd-in-j{from{opacity:0;transform:translateX(-72px)}40%{opacity:1}}
@keyframes jd-in-bd{from{transform:translateX(72px)}}
@keyframes jd-wipe{55%,to{transform:translateX(176px)}}
@keyframes jd-swap-j{55%{transform:translateX(110px)}}
@keyframes jd-swap-bd{55%{transform:translateX(-110px)}}
@keyframes jd-bg{from{fill:var(--jd-from-bd)}}
@media (prefers-reduced-motion:reduce){.jd-logo *{animation:none!important}}
`

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** The JD mark: a frosted glass J over a red D */
export function Logo() {
	const { resolvedTheme } = useTheme()
	const [shown, setShown] = useState(resolvedTheme)
	// The theme the mark is changing from, and a counter that restarts the sweep on every change
	const [swap, setSwap] = useState<{ from: Mode; n: number } | null>(null)

	if (shown !== resolvedTheme) {
		setShown(resolvedTheme)
		setSwap(reducedMotion() ? null : { from: shown, n: (swap?.n ?? 0) + 1 })
	}

	const from = swap?.from
	// The D twice: the old red underneath, the new red on top, revealed by the sweep
	const dPair = (opacity?: number) =>
		from ? (
			<>
				<path fill="url(#jd-og)" d={D} opacity={opacity} />
				<path fill="url(#jd-dg)" d={D} opacity={opacity} clipPath="url(#jd-wc)" />
			</>
		) : (
			<path fill="url(#jd-dg)" d={D} opacity={opacity} />
		)

	return (
		<svg
			viewBox="46 54 166 156"
			width={34}
			height={32}
			overflow="visible"
			aria-hidden="true"
			focusable="false"
			className="jd-logo h-8 w-auto"
		>
			<style>{CSS}</style>
			<defs>
				{(['light', 'dark'] as const).map((m) => (
					<filter key={m} id={`jd-sh-${m}`} x="-30%" y="-30%" width="160%" height="160%">
						<feGaussianBlur in="SourceAlpha" stdDeviation="6" />
						<feOffset dy="6" />
						<feComponentTransfer>
							<feFuncA type="linear" slope={PALETTE[m].shadow} />
						</feComponentTransfer>
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				))}
				<filter id="jd-blur" x="-30%" y="-30%" width="160%" height="160%">
					<feGaussianBlur stdDeviation="7" />
				</filter>
				<clipPath id="jd-jc">
					<path d={J} />
				</clipPath>
				<linearGradient id="jd-dg" x1="64" y1="32" x2="232" y2="224" gradientUnits="userSpaceOnUse">
					<stop offset="0" className="jd-s0" />
					<stop offset="1" className="jd-s1" />
				</linearGradient>
				<linearGradient id="jd-gl" x1="16" y1="220" x2="136" y2="32" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fff" className="jd-t0" />
					<stop offset="1" stopColor="#fff" className="jd-t1" />
				</linearGradient>
			</defs>
			{/* Keyed so each theme change remounts it and replays the sweep */}
			<g key={swap?.n ?? 0} transform="translate(132 128) scale(.7) translate(-128 -128)">
				{from && (
					<defs>
						<linearGradient
							id="jd-og"
							className={`jd-from-${from}`}
							x1="64"
							y1="32"
							x2="232"
							y2="224"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" className="jd-s0" />
							<stop offset="1" className="jd-s1" />
						</linearGradient>
						<clipPath id="jd-wc">
							<rect className="jd-wipe" x="-400" y="0" width="464" height="300" />
						</clipPath>
					</defs>
				)}
				{from ? dPair() : <path className="jd-d" fill="url(#jd-dg)" d={D} />}
				<g className="jd-sh">
					<g className={from ? 'jd-j-swap' : 'jd-j-in'}>
						<g clipPath="url(#jd-jc)">
							<g className={from ? 'jd-bd-swap' : 'jd-bd-in'}>
								<g filter="url(#jd-blur)">
									<rect
										className={from ? 'jd-bg jd-bg-swap' : 'jd-bg'}
										style={from ? ({ '--jd-from-bd': PALETTE[from].backdrop } as CSSProperties) : undefined}
										x="-200"
										y="-200"
										width="656"
										height="656"
									/>
									{dPair(0.85)}
								</g>
							</g>
						</g>
						<path fill="url(#jd-gl)" d={J} />
					</g>
				</g>
			</g>
		</svg>
	)
}
