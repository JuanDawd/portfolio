import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { skillAreas, skillsList } from '@/pages/2027/constants'
import { Stack } from './Stack'

describe('2027 Stack', () => {
	it('lists every skill once, under its own area', () => {
		render(<Stack />)
		for (const area of skillAreas) {
			const list = screen.getByRole('list', { name: area })
			const names = within(list)
				.getAllByRole('listitem')
				.map((item) => item.textContent)
			expect(names).toEqual(skillsList.filter((skill) => skill.area === area).map((skill) => skill.name))
		}
	})
})
