import type { YearDefinition } from '@/years'

export default {
	year: '2025',
	pages: [
		{
			path: '',
			component: 'HomePage',
			title: 'Juan Dawd | 2025 Portfolio',
			description:
				"The 2025 edition of Juan Dawd's portfolio: experience, education, skills and certifications.",
		},
		{
			path: 'projects',
			component: 'ProjectsPage',
			title: 'Juan Dawd | Projects (2025)',
			description:
				'Web and mobile projects by Juan Dawd, built with React, Next.js, Node.js and TypeScript.',
		},
	],
} satisfies YearDefinition
