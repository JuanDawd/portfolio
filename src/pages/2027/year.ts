import type { YearDefinition } from '@/years'

export default {
	year: '2027',
	// Work in progress: live at /2027 but noindex, out of the sitemap and
	// not linked from other years. Remove when launching.
	draft: true,
	// ogImage: '/2027/og-image.jpg', // 1200×630 in public/; defaults to /og-image.jpg
	pages: [
		{
			path: '',
			component: 'HomePage',
			// Placeholders — final wording before launch
			title: 'Juan Dawd | Full-Stack Developer — React, Next.js, Node.js',
			description:
				'Full-stack developer building production web and mobile apps with React, Next.js, Node.js and real-time data pipelines.',
		},
	],
} satisfies YearDefinition
