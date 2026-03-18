import { Award } from 'lucide-react'
import { certificationList } from '@/pages/2025/constants'

export function CertificationsCard() {
  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Certifications
      </h2>
      <div className="flex flex-col gap-4">
        {certificationList.map((cert) => (
          <div key={cert.name} className="flex items-start gap-3">
            <div className="mt-1 rounded-md bg-accent/10 p-2">
              <Award className="h-4 w-4 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} &middot; {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
