import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { projectsList } from '@/pages/2025/constants'

export function ProjectsCard() {
  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
        {projectsList.map((project) => (
          <Card
            key={project.title}
            className="group overflow-hidden border-border/30 bg-secondary/30 p-0"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {project.type} &middot; {project.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                {project.deployment && (
                  <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                    <a href={project.deployment} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-1 h-3.5 w-3.5" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="mr-1 h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
