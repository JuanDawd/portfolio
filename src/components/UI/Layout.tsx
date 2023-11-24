'use client'

import React from 'react'

const Layout = ({
	children,
	className = '',
}: {
	children: any
	className?: string
}) => {
	return (
		<main className='flex w-full max-w-[1200px] mx-auto flex-col items-center justify-center'>

		<div
			className={`w-full max-w-[1200px] h-full bg-background inline-block z-0 p-24 xl:p-16 lg:p-8 md:p-6 sm:p-4 ${className}`}
		>
			{children}
		</div>
		</main>
	)
}

export default Layout
