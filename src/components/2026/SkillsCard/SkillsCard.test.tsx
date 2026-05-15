import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SkillsCard } from './SkillsCard'
import { skillsList } from '@/pages/2026/constants'

describe('SkillsCard', () => {
	it('renders the Skills heading', () => {
		render(<SkillsCard />)
		expect(screen.getByText('Skills')).toBeInTheDocument()
	})

	it('renders all skills from the constants list', () => {
		render(<SkillsCard />)
		for (const skill of skillsList) {
			expect(screen.getByText(skill.name)).toBeInTheDocument()
		}
	})

	it('renders an SVG icon for each skill that has one', () => {
		render(<SkillsCard />)
		for (const skill of skillsList.filter((s) => s.icon)) {
			expect(screen.getByLabelText(skill.name)).toBeInTheDocument()
		}
	})

	it('applies the correct fill color from the skill hex value', () => {
		render(<SkillsCard />)
		const firstSkill = skillsList.find((s) => s.icon)!
		const icon = screen.getByLabelText(firstSkill.name)
		expect(icon).toHaveAttribute('fill', `#${firstSkill.hex}`)
	})
})
