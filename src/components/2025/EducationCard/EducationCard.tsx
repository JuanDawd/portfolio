import { GraduationCap } from 'lucide-react'
import { educationList } from '@/pages/2025/constants'

export function EducationCard() {
  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Education
      </h2>
      <div className="flex flex-col gap-4">
        {educationList.map((edu) => (
          <div key={edu.degree} className="flex items-start gap-3">
            <div className="mt-1 rounded-md bg-primary/10 p-2">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {edu.institution} &middot; {edu.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
