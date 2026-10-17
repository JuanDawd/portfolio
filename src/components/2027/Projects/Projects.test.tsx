import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { projectsList } from '@/pages/2027/constants'
import { Projects } from './Projects'

// URL paths of the files in public/2027 ('/public/2027/x.webp' → '/2027/x.webp')
const publicFiles = Object.keys(import.meta.glob('/public/2027/**/*')).map((f) =>
	f.replace(/^\/public/, ''),
)

describe('2027 Projects', () => {
	it('lists every project with its title', () => {
		render(<Projects />)
		for (const { title } of projectsList) {
			expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
		}
	})

	it('uses only images from public/2027', () => {
		for (const { title, image } of projectsList) {
			if (!image) continue
			expect(image, `${title} image`).toMatch(/^\/2027\//)
			expect(publicFiles, `${title} image`).toContain(image)
		}
	})
})
