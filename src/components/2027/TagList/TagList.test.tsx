import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { TagList } from './TagList'

describe('2027 TagList', () => {
	it('shows every tag when there are four or fewer', () => {
		render(<TagList tags={['React', 'Vite']} label="Tech" />)
		expect(screen.getAllByRole('listitem')).toHaveLength(2)
		expect(screen.queryByRole('button')).not.toBeInTheDocument()
	})

	it('shows four tags and expands the rest in place', async () => {
		render(<TagList tags={['A', 'B', 'C', 'D', 'E', 'F']} label="Tech" />)
		expect(screen.getByRole('list', { name: 'Tech' })).toBeInTheDocument()
		expect(screen.queryByText('E')).not.toBeInTheDocument()

		const toggle = screen.getByRole('button', { name: '+2 tags' })
		await userEvent.click(toggle)

		expect(screen.getByText('E')).toBeInTheDocument()
		expect(screen.getByText('F')).toBeInTheDocument()
		expect(toggle).toHaveAttribute('aria-expanded', 'true')
		expect(toggle).toHaveTextContent('fewer tags')
	})
})
