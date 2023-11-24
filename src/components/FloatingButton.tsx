'use client'

import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const FloatingButton = () => {
	return (
		<div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:top-0 md:left-auto md:bottom-auto md:absolute sm:right-0">
			<div className="w-48 h-auto flex items-center justify-center relative md:w-24">
				{/* 
					// TODO: Change Image Outer Ring
				*/}
				<CircularText className="animate-spin-slow" />

				<Link
					href="mailto:juandawdb@gmail.com"
					className=" flex items-center justify-center absolute left-1/2 top-1/2 
					-translate-x-1/2 -translate-y-1/2 shadow-md border border-solid  w-20 h-20 rounded-full font-semibold
					md:w-12 md:h-12 md:text-[10px]
					"
				>
					Hire me
				</Link>
			</div>
		</div>
	)
}

export default FloatingButton
