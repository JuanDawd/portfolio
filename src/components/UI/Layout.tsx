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
		<div
			className={`w-full h-full bg-background inline-block z-0 p-24 xl:p-16 lg:p-8 md:p-6 sm:p-4 ${className}`}
		>
			{children}
		</div>
	)
}

export default Layout
