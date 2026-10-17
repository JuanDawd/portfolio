import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { experienceList } from '@/pages/2027/constants'
import { Experience } from './Experience'

const longJob = experienceList.find((job) => job.description.length > 3)!

describe('2027 Experience', () => {
	it('folds long jobs and expands them in place, with the toggle below the list', async () => {
		render(<Experience />)
		const firstHidden = longJob.description[3]
		expect(screen.queryByText(firstHidden)).not.toBeInTheDocument()

		const toggle = screen.getByRole('button', { name: `+${longJob.description.length - 3} more` })
		await userEvent.click(toggle)

		const line = screen.getByText(firstHidden)
		expect(toggle).toHaveAttribute('aria-expanded', 'true')
		expect(toggle).toHaveTextContent('show less')
		// Same list as the first lines, and the toggle comes after it
		expect(line.closest('ul')).toBe(screen.getByText(longJob.description[0]).closest('ul'))
		expect(line.compareDocumentPosition(toggle) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
	})
})
