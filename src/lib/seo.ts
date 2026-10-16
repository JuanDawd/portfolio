import { CURRENT_YEAR, years, yearHref } from '@/years'

export const SITE_URL = 'https://www.juandawd.dev'

export interface PageMeta {
	title: string
	description: string
	// Route path, e.g. '/2025/projects'
	path: string
	noindex?: boolean
	// Path in public/; when unset the template's /og-image.jpg is kept
	ogImage?: string
}

export const notFoundMeta: PageMeta = {
	title: 'Page not found | Juan Dawd',
	description: 'This page does not exist.',
	path: '/404',
	noindex: true,
}

export interface RoutePage {
	meta: PageMeta
	// Source modules rendered on this route — scripts/prerender.mjs preloads their
	// chunks and CSS from the Vite manifest
	modules: string[]
}

// Every prerendered page, derived from the year registry
export function routePages(): RoutePage[] {
	const pages: RoutePage[] = years.flatMap(({ year, draft, ogImage, pages }) =>
		pages.map((page) => ({
			meta: {
				title: page.title,
				description: page.description,
				path: yearHref(year, page.path),
				noindex: draft,
				ogImage,
			},
			modules: [`src/pages/${year}/Layout.tsx`, `src/pages/${year}/${page.component}.tsx`],
		})),
	)
	// Unknown URLs render inside the current year's layout
	pages.push({ meta: notFoundMeta, modules: [`src/pages/${CURRENT_YEAR}/Layout.tsx`] })
	return pages
}
