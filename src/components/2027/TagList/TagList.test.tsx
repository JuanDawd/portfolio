import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TagList } from './TagList'

describe('2027 TagList', () => {
	it('shows every tag when there are four or fewer', () => {
		render(<TagList tags={['React', 'Vite']} label="Tech" />)
		expect(screen.getAllByRole('listitem')).toHaveLength(2)
		expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
	})

	it('shows four tags and counts the rest, naming them for screen readers', () => {
		render(<TagList tags={['A', 'B', 'C', 'D', 'E', 'F']} label="Tech" />)
		expect(screen.getByRole('list', { name: 'Tech' })).toBeInTheDocument()
		expect(screen.getByText('+2')).toBeInTheDocument()
		expect(screen.getByText('more: E, F')).toBeInTheDocument()
	})
})
