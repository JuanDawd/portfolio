import {
	m,
	type TargetAndTransition,
	type VariantLabels,
	type ViewportOptions,
} from 'framer-motion'
import { type ReactElement, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/2025/ui/button'

// eslint-disable-next-line react-refresh/only-export-components
export const FramerImage = m.img
// eslint-disable-next-line react-refresh/only-export-components
export const FramerLink = m.create(Link)

type FramerButtonProps = {
	className: string
	children: ReactElement
	href: string
	ariaLabel: string
}

const FramerButton = m.create(Button)

export const FramerButtonIcon = ({
	className,
	children,
	href,
	ariaLabel,
}: FramerButtonProps) => {
	return (
		<FramerButton
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.9 }}
			className={`w-6 ${className}`}
			aria-label={ariaLabel}
		>
			<a href={href} target="_blank" rel="noreferrer">
				{children}
			</a>
		</FramerButton>
	)
}

type FramerLiProps = {
	className: string
	children: ReactNode
	initial: TargetAndTransition | VariantLabels | boolean
	whileInView: TargetAndTransition | VariantLabels
	viewport: ViewportOptions
}

export const FramerLi = ({
	className,
	children,
	initial,
	whileInView,
	viewport,
}: FramerLiProps) => {
	return (
		<m.li
			className={className}
			initial={initial}
			whileInView={whileInView}
			viewport={viewport}
		>
			{children}
		</m.li>
	)
}

type FramerNavbarProps = {
	className: string
}

export const FramerNavbar = ({ className }: FramerNavbarProps) => {
	return <m.header className={className}></m.header>
}
