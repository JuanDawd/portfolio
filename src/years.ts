// Year registry — the single place that knows which portfolio years exist.
// Routes (App.tsx), prerendered pages + sitemap (scripts/prerender.mjs) and the
// cross-year links in each navbar are all derived from it.
//
// Adding a year = creating src/pages/{year}/year.ts (see the /new-portfolio-year
// skill). Making it the live one = changing CURRENT_YEAR.

export interface YearPage {
	// Route segment under the year's base path ('' = the year's home page)
	path: string
	// Module in src/pages/{year}/ that default-exports the page, e.g. 'HomePage'
	component: string
	title: string
	description: string
}

export interface YearDefinition {
	year: string
	// Work in progress: reachable at /{year}, but noindex, left out of the
	// sitemap and hidden from the other years' navbars
	draft?: boolean
	// Social preview image for this year's pages: a path in public/, 1200×630.
	// Defaults to the shared /og-image.jpg
	ogImage?: string
	pages: YearPage[]
}

// The year served at "/". Every other year is served at "/{year}".
export const CURRENT_YEAR = '2026'

const definitions = import.meta.glob<YearDefinition>('./pages/*/year.ts', {
	eager: true,
	import: 'default',
})

// Newest first
export const years: YearDefinition[] = Object.values(definitions).sort((a, b) =>
	b.year.localeCompare(a.year),
)

const current = years.find((y) => y.year === CURRENT_YEAR)
if (!current) {
	throw new Error(`years: CURRENT_YEAR ${CURRENT_YEAR} has no src/pages/${CURRENT_YEAR}/year.ts`)
}
if (current.draft) {
	throw new Error(`years: CURRENT_YEAR ${CURRENT_YEAR} is still marked draft`)
}

// URL of a year's page: yearHref('2025', 'projects') → '/2025/projects'
export function yearHref(year: string, page = ''): string {
	const base = year === CURRENT_YEAR ? '' : `/${year}`
	return `${base}/${page}`.replace(/\/$/, '') || '/'
}

// Published years other than `year`, newest first — for year switcher links
export function otherYears(year: string): string[] {
	return years.filter((y) => !y.draft && y.year !== year).map((y) => y.year)
}
