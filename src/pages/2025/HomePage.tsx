import { BentoGrid, BentoCard } from '@/components/2025/BentoGrid'
import { HeroCard } from '@/components/2025/HeroCard'
import { BiographyCard } from '@/components/2025/BiographyCard'
import { SkillsCard } from '@/components/2025/SkillsCard'
import { ExperienceCard } from '@/components/2025/ExperienceCard'
import { EducationCard } from '@/components/2025/EducationCard'
import { CertificationsCard } from '@/components/2025/CertificationsCard'
import { ProjectsCard } from '@/components/2025/ProjectsCard'
import { ContactCard } from '@/components/2025/ContactCard'

export default function HomePage2025() {
	return (
		<main className="mx-auto max-w-5xl px-6 py-12">
			<BentoGrid>
				<BentoCard colSpan={2} rowSpan={2}>
					<HeroCard />
				</BentoCard>

				<BentoCard colSpan={2}>
					<BiographyCard />
				</BentoCard>

				<BentoCard colSpan={2}>
					<SkillsCard />
				</BentoCard>

				<BentoCard colSpan={2}>
					<EducationCard />
				</BentoCard>

				<BentoCard colSpan={2}>
					<CertificationsCard />
				</BentoCard>

				<BentoCard colSpan={4}>
					<ExperienceCard />
				</BentoCard>

				<BentoCard colSpan={4} rowSpan={2}>
					<ProjectsCard />
				</BentoCard>

				<BentoCard colSpan={4}>
					<ContactCard />
				</BentoCard>
			</BentoGrid>
		</main>
	)
}
