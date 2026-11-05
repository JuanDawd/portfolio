import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { CURRENT_YEAR, switcherYears, yearHref } from '@/years'
import { YearSwitcher } from './YearSwitcher'

describe('YearSwitcher', () => {
	it('shows the year being viewed on the trigger', () => {
		render(<YearSwitcher year="2025" />)
		expect(screen.getByRole('button', { name: /Portfolio year: 2025/ })).toHaveTextContent('2025')
	})

	it('lists every published year as a full-page link and marks the current one', async () => {
		render(<YearSwitcher year="2025" />)
		await userEvent.click(screen.getByRole('button', { name: /Portfolio year/ }))

		for (const year of switcherYears('2025')) {
			const item = screen.getByRole('menuitem', { name: new RegExp(year) })
			expect(item).toHaveAttribute('href', yearHref(year))
		}
		expect(screen.getByRole('menuitem', { name: /2025/ })).toHaveAttribute('aria-current', 'page')
		expect(screen.getByRole('menuitem', { name: new RegExp(CURRENT_YEAR) })).toHaveTextContent('latest')
	})
})
