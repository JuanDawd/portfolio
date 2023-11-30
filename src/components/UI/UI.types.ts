import { ReactNode } from 'react'

export type LayoutProps = {
  children: any
  className?: string
}

export type TooltipedElementProps = {
  tTMessage: string
  children: ReactNode
}
