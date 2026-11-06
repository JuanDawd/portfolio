import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { skillAreas, skillsList } from '@/pages/2027/constants'
import { Stack } from './Stack'

const namesIn = (area: string) =>
	within(screen.getByRole('list', { name: area }))
		.getAllByRole('listitem')
		.map((item) => item.textContent)

describe('2027 Stack', () => {
	it('shows the core skills first, then every skill once under its own area', async () => {
		render(<Stack />)
		for (const area of skillAreas) {
			expect(namesIn(area)).toEqual(skillsList.filter((s) => s.area === area && s.core).map((s) => s.name))
		}

		await userEvent.click(screen.getByRole('button', { name: /show all/ }))
		for (const area of skillAreas) {
			expect(namesIn(area)).toEqual(skillsList.filter((s) => s.area === area).map((s) => s.name))
		}
	})
})
