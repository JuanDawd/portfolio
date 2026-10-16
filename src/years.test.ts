import { describe, it, expect } from 'vitest'
import { CURRENT_YEAR, otherYears, yearHref, years } from './years'
import { routePages } from './lib/seo'

const modules = import.meta.glob('./pages/*/*.tsx')

describe('year registry', () => {
	it('serves the current year at the root and others under /{year}', () => {
		expect(yearHref(CURRENT_YEAR)).toBe('/')
		expect(yearHref(CURRENT_YEAR, 'projects')).toBe('/projects')
		expect(yearHref('2025')).toBe('/2025')
		expect(yearHref('2025', 'projects')).toBe('/2025/projects')
	})

	it('has a Layout and page module for every registered page', () => {
		for (const { year, pages } of years) {
			expect(modules[`./pages/${year}/Layout.tsx`], `${year}/Layout.tsx`).toBeDefined()
			for (const page of pages) {
				expect(modules[`./pages/${year}/${page.component}.tsx`], `${year}/${page.component}.tsx`).toBeDefined()
			}
		}
	})

	it('has unique page URLs', () => {
		const paths = routePages().map((p) => p.meta.path)
		expect(new Set(paths).size).toBe(paths.length)
	})

	it('links only to published years', () => {
		const drafts = years.filter((y) => y.draft).map((y) => y.year)
		for (const { year } of years) {
			expect(otherYears(year)).not.toContain(year)
			for (const draft of drafts) expect(otherYears(year)).not.toContain(draft)
		}
	})
})
