import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { skillsList } from '@/pages/2025/constants'

export function SkillsCard() {
  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        <TooltipProvider delay={200}>
          {skillsList.map(({ name, icon }) => (
            <Tooltip key={name}>
              <TooltipTrigger>
                <Badge
                  variant="secondary"
                  className="flex h-auto cursor-default items-center gap-2 px-3 py-1.5 text-sm transition-colors hover:bg-primary/10"
                >
                  <img src={icon} alt={name} className="h-5 w-5 shrink-0" />
                  {name}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  )
}
