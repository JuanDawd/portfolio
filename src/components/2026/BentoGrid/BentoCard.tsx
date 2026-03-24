import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface BentoCardProps {
  children: ReactNode
  colSpan?: 1 | 2 | 3 | 4
  rowSpan?: 1 | 2 | 3
  className?: string
}

const colSpanMap = {
  1: 'col-span-1',
  2: 'col-span-2 md:col-span-1',
  3: 'col-span-3 md:col-span-2 sm:col-span-1',
  4: 'col-span-4 md:col-span-2 sm:col-span-1',
} as const

const rowSpanMap = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
} as const

export function BentoCard({
  children,
  colSpan = 1,
  rowSpan = 1,
  className = '',
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${colSpanMap[colSpan]} ${rowSpanMap[rowSpan]}`}
    >
      <Card
        className={`h-full overflow-hidden border-border/50 bg-card p-6 transition-shadow duration-300 hover:shadow-lg ${className}`}
      >
        {children}
      </Card>
    </motion.div>
  )
}
