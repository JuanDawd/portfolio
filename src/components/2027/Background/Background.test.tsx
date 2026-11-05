import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { certificationList, educationList } from '@/pages/2027/constants'
import { Background } from './Background'

describe('2027 Background', () => {
	it('lists every degree', () => {
		render(<Background />)
		for (const item of educationList) {
			expect(screen.getByRole('heading', { name: item.degree })).toBeInTheDocument()
		}
	})

	it('shows visible certifications, linked when they have a URL, and hides the rest', () => {
		render(<Background />)
		for (const cert of certificationList) {
			const heading = screen.queryByRole('heading', { name: cert.name })
			if (cert.hidden) {
				expect(heading).not.toBeInTheDocument()
				continue
			}
			expect(heading).toBeInTheDocument()
			if (cert.url) expect(heading!.closest('a')).toHaveAttribute('href', cert.url)
		}
	})
})
