'use client'

import Link from 'next/link'
import React from 'react'

import { Share_Tech_Mono } from 'next/font/google'
import { Label } from '../ui/label'

const ShareTechMono = Share_Tech_Mono({
	weight: '400',
	subsets: ['latin'],
})

const Logo = () => {
	// const { theme } = useTheme()
	return (
		<div className="flex items-center justify-center mt-1">
			<Link
				href="/"
				className={`w-24 h-16 flex items-center justify-center text-2xl ${ShareTechMono.className}`}
			>
				<Label className="text-accent">{'<'}</Label>
				Juank
				<Label className="text-accent">&nbsp;{'/>'}</Label>
			</Link>
		</div>
	)
}

export default Logo
