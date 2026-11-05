import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('2027 Hero', () => {
	it('names the owner as the page heading', () => {
		render(<Hero />)
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Juan Dawd')
	})

	it('offers both CVs and the contact section', () => {
		render(<Hero />)
		expect(screen.getByRole('link', { name: './resume.pdf' })).toHaveAttribute('href', '/resume/JuanDawd_ATS_Eng_CV.pdf')
		const spanish = screen.getByRole('link', { name: './hoja-de-vida.pdf' })
		expect(spanish).toHaveAttribute('href', '/resume/JuanDawd_ATS_Esp_CV.pdf')
		expect(spanish).toHaveAttribute('lang', 'es')
		expect(screen.getByRole('link', { name: 'contact --me' })).toHaveAttribute('href', '#contact')
	})
})
