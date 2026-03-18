import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { socialLinks } from '@/pages/2025/constants'

export function ContactCard() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Let's Connect
      </h2>
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="icon"
          render={<a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" />}
        >
          <Github className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          render={<a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" />}
        >
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          render={<a href={`mailto:${socialLinks.email}`} aria-label="Email" />}
        >
          <Mail className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
