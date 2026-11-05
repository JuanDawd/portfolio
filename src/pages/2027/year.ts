import type { YearDefinition } from '@/years'

export default {
	year: '2027',
	ogImage: '/2027/og-image.jpg',
	pages: [
		{
			path: '',
			component: 'HomePage',
			title: 'Juan Dawd | Full-Stack Developer — React, Next.js, Node.js',
			description:
				'Full-stack developer who designs, builds and ships SaaS products end to end. React, Next.js, Node.js, PostgreSQL and real-time pipelines (Redis, MQTT, SSE).',
		},
	],
} satisfies YearDefinition
