import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@/lib/theme'
import { yearHref } from '@/years'
import { Navbar } from './Navbar'

function renderNavbar() {
	return render(
		<MemoryRouter>
			<ThemeProvider>
				<Navbar />
			</ThemeProvider>
		</MemoryRouter>,
	)
}

describe('2027 Navbar', () => {
	beforeEach(() => {
		localStorage.clear()
		document.documentElement.classList.remove('dark')
		vi.stubGlobal(
			'matchMedia',
			vi.fn().mockImplementation((query: string) => ({
				matches: false,
				media: query,
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			})),
		)
	})
	afterEach(() => vi.unstubAllGlobals())

	it('links the brand to the 2027 home page', () => {
		renderNavbar()
		expect(screen.getByRole('link', { name: '~/juandawd' })).toHaveAttribute('href', yearHref('2027'))
	})

	it('has a year switcher showing 2027', () => {
		renderNavbar()
		expect(screen.getByRole('button', { name: /Portfolio year: 2027/ })).toBeInTheDocument()
	})

	it('links to the page sections', () => {
		renderNavbar()
		expect(screen.getByRole('link', { name: 'work' })).toHaveAttribute('href', '#work')
		// One contact link for phones, one in the md+ section list
		for (const link of screen.getAllByRole('link', { name: 'contact' })) {
			expect(link).toHaveAttribute('href', '#contact')
		}
	})

	it('toggles between light and dark', async () => {
		renderNavbar()
		const toggle = screen.getByRole('button', { name: 'Dark theme' })

		await userEvent.click(toggle)
		expect(localStorage.getItem('theme')).toBe('dark')
		expect(document.documentElement).toHaveClass('dark')
		expect(toggle).toHaveAttribute('aria-pressed', 'true')

		await userEvent.click(toggle)
		expect(localStorage.getItem('theme')).toBe('light')
		expect(document.documentElement).not.toHaveClass('dark')
		expect(toggle).toHaveAttribute('aria-pressed', 'false')
	})
})
