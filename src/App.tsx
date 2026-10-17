import { StrictMode, lazy, Suspense, type ComponentType } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { NotFoundPage } from '@/components/shared/NotFoundPage'
import { usePageMeta } from '@/hooks/usePageMeta'
import { notFoundMeta, type PageMeta } from '@/lib/seo'
import { CURRENT_YEAR, years, yearHref } from '@/years'

// Every year's layout and pages are lazy chunks, so a route only downloads its own
// year. The prerendered HTML is visible immediately and scripts/prerender.mjs
// modulepreloads the route's chunks, so hydration doesn't wait on a waterfall.
const pageModules = import.meta.glob<{ default: ComponentType }>(['./pages/*/*.tsx', '!./pages/**/*.test.tsx'])

function lazyModule(year: string, name: string) {
	const load = pageModules[`./pages/${year}/${name}.tsx`]
	if (!load) throw new Error(`years: src/pages/${year}/${name}.tsx not found`)
	return lazy(load)
}

const yearRoutes = years.map(({ year, pages }) => ({
	year,
	path: yearHref(year),
	Layout: lazyModule(year, 'Layout'),
	pages: pages.map((page) => ({
		path: page.path,
		Page: lazyModule(year, page.component),
		meta: {
			title: page.title,
			description: page.description,
			path: yearHref(year, page.path),
		},
	})),
}))

function RoutePage({ meta, Page }: { meta: PageMeta; Page: ComponentType }) {
	usePageMeta(meta)
	return (
		<Suspense>
			<Page />
		</Suspense>
	)
}

// Shared by the client entry (main.tsx) and the prerender entry (entry-server.tsx);
// each wraps it in the router that fits its environment.
export default function App() {
	return (
		<StrictMode>
			<MotionConfig reducedMotion="user">
				<Analytics />
				<SpeedInsights />
				<Routes>
					{yearRoutes.map(({ year, path, Layout, pages }) => (
						<Route
							key={year}
							path={path}
							element={
								<Suspense>
									<Layout />
								</Suspense>
							}
						>
							{pages.map(({ path, Page, meta }) => {
								const element = <RoutePage meta={meta} Page={Page} />
								return path === '' ? (
									<Route key="index" index element={element} />
								) : (
									<Route key={path} path={path} element={element} />
								)
							})}
							{year === CURRENT_YEAR && (
								<Route path="*" element={<RoutePage meta={notFoundMeta} Page={NotFoundPage} />} />
							)}
						</Route>
					))}
				</Routes>
			</MotionConfig>
		</StrictMode>
	)
}
