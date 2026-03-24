import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@/lib/theme'
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

describe('Navbar', () => {
	beforeEach(() => {
		localStorage.clear()
		document.documentElement.classList.remove('dark')
	})

	it('renders the brand link', () => {
		renderNavbar()
		const brand = screen.getByRole('link', { name: 'JD' })
		expect(brand).toBeInTheDocument()
		expect(brand).toHaveAttribute('href', '/')
	})

	it('renders a link to the 2025 portfolio', () => {
		renderNavbar()
		const link = screen.getByRole('link', { name: '2025' })
		expect(link).toHaveAttribute('href', '/2025')
	})

	it('renders the theme toggle button', () => {
		renderNavbar()
		expect(
			screen.getByRole('button', { name: 'Toggle theme' }),
		).toBeInTheDocument()
	})

	it('toggles theme on click', async () => {
		const matchMediaMock = vi.fn().mockImplementation((query: string) => ({
			matches: false,
			media: query,
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
		}))
		vi.stubGlobal('matchMedia', matchMediaMock)

		renderNavbar()
		const toggle = screen.getByRole('button', { name: 'Toggle theme' })

		await userEvent.click(toggle)
		expect(localStorage.getItem('theme')).toBe('dark')

		await userEvent.click(toggle)
		expect(localStorage.getItem('theme')).toBe('light')

		vi.unstubAllGlobals()
	})
})
