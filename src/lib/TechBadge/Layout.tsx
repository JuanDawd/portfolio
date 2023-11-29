import { Badge } from '@/components/UI/badge'

export const Layout = ({
  className,
  title,
  icon,
}: {
  className: string
  title: string
  icon?: any
}) => (
  <>
    <Badge
      className={`flex flex-row items-center justify-center gap-1 px-4 py-1 text-xs font-medium ${className}`}
      variant='outline'
    >
      {icon}
      {title}
    </Badge>
  </>
)
