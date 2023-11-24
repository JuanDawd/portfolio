'use client'

import React from 'react'
import Layout from './Layout'
import { Heart } from 'lucide-react'

const Footer = () => {
	return (
		<footer className="w-full border-t-2 border-solid border-foreground font-medium text-lg sm:text-base bg-background">
			<Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className="flex items-center lg:py-2">
					Build With
					<Heart className="text-accent mx-1" size={24} />
					by JuanDawd
				</div>
			</Layout>
		</footer>
	)
}

export default Footer
