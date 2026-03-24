import type { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div
      className={`grid auto-rows-[minmax(180px,auto)] grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ${className}`}
    >
      {children}
    </div>
  )
}
