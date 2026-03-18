import {
  motion,
  type TargetAndTransition,
  type VariantLabels,
  type ViewportOptions,
} from 'framer-motion'
import { type ReactElement, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/2024/UI/button'

export const FramerImage = motion.img
export const FramerLink = motion.create(Link)

type FramerButtonProps = {
  className: string
  children: ReactElement
  href: string
  ariaLabel: string
}

const FramerButton = motion.create(Button)

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
      <a href={href} target='_blank' rel='noreferrer'>
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
    <motion.li
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.li>
  )
}

type FramerNavbarProps = {
  className: string
}

export const FramerNavbar = ({ className }: FramerNavbarProps) => {
  return <motion.header className={className}></motion.header>
}
