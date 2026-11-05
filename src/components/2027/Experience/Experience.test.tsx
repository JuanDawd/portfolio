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

	it('links each client project to its case study', () => {
		render(<Experience />)
		for (const job of experienceList.filter((j) => j.clients)) {
			for (const client of job.clients!) {
				expect(screen.getByRole('link', { name: client.name })).toHaveAttribute('href', client.url)
			}
		}
	})

	it('folds the older jobs behind one toggle below the list', async () => {
		render(<Experience />)
		const oldest = experienceList[experienceList.length - 1]
		expect(screen.queryByText(oldest.description[0])).not.toBeInTheDocument()

		const toggle = screen.getByRole('button', { name: `+${experienceList.length - 3} earlier roles` })
		await userEvent.click(toggle)

		expect(screen.getByText(oldest.description[0])).toBeInTheDocument()
		expect(toggle).toHaveAttribute('aria-expanded', 'true')
		expect(toggle).toHaveTextContent('show fewer roles')
	})
})
