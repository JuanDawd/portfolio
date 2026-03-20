import type { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
  className?: string
}

export type TooltipedElementProps = {
  tTMessage: string
  children: ReactNode
}
