import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { socialLinks } from '@/pages/2027/constants'
import { Contact } from './Contact'

describe('2027 Contact', () => {
	afterEach(() => vi.restoreAllMocks())

	it('shows the email as visible text and a mailto link', () => {
		render(<Contact />)
		const email = screen.getByRole('link', { name: socialLinks.email })
		expect(email).toHaveAttribute('href', `mailto:${socialLinks.email}`)
	})

	it('copies the email and announces it', async () => {
		const user = userEvent.setup()
		const writeText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue()
		render(<Contact />)

		await user.click(screen.getByRole('button', { name: 'Copy email' }))

		expect(writeText).toHaveBeenCalledWith(socialLinks.email)
		expect(screen.getByRole('button', { name: 'Email copied' })).toBeInTheDocument()
		expect(screen.getByRole('status')).toHaveTextContent('Email copied to clipboard')
	})

	it('keeps working when the clipboard is unavailable', async () => {
		const user = userEvent.setup()
		vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('denied'))
		render(<Contact />)

		await user.click(screen.getByRole('button', { name: 'Copy email' }))

		expect(screen.getByRole('button', { name: 'Copy email' })).toBeInTheDocument()
		expect(screen.getByRole('link', { name: socialLinks.email })).toBeInTheDocument()
	})
})
