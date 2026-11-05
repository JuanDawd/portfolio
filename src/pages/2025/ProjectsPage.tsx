import AnimatedText from '@/components/2025/AnimatedText/AnimatedText'
import Layout from '@/components/2025/ui/Layout'

import FeaturedProject from './projects/FeaturedProject'
import Project from './projects/Project'
import { projectsConstants } from './projects/constants'

export default function ProjectsPage() {
	const { featuredProject, projects } = projectsConstants
	return (
		<Layout className="py-16">
			<AnimatedText
				text="Imagination Trumps Knowledge!"
				className="xs:text-4xl! mb-16 sm:mb-8 sm:text-6xl! lg:text-7xl!"
			/>
			<div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-x-0 md:gap-y-24 lg:gap-x-8 xl:gap-x-16">
				<div className="col-span-12">
					<FeaturedProject {...featuredProject} />
				</div>
				{projects.map((value, key) => (
					<div className="col-span-6 sm:col-span-12" key={key}>
						<Project {...value!} />
					</div>
				))}
			</div>
		</Layout>
	)
}
