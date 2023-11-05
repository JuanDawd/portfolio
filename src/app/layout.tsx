import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
})

export const metadata: Metadata = {
	title: 'Juan Dawd',
	description:
		'This is Juan C. Dawd B. Web Dev Portfolio, If you see this, the website is under maintenance or there is a new revision coming underway',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} font-mont`}>{children}</body>
		</html>
	)
}
