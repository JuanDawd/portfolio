'use client'

import Image from 'next/image'
import {
  motion,
  type TargetAndTransition,
  type VariantLabels,
  type ViewportOptions,
} from 'framer-motion'
import { type ReactElement, type ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/UI/button'

export const FramerImage = motion(Image)
export const FramerLink = motion(Link)

type FramerButtonProps = {
  className: string
  children: ReactElement
  href: string
  ariaLabel: string
}

const FramerButton = motion(Button)

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
      <Link href={href} target='_blank'>
        {children}
      </Link>
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
