'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import MobileNavBar from './MobileNavBar'
import DesktopNavBar from './DesktopNavBar'

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen((pastValue) => {
			return !pastValue
		})
	}

	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between  z-10 lg:px-16 md:px-12 sm:px-8 bg-background sticky top-0 border-b-2 border-accent">
			{/*
			// TODO: change here to radixUI Button
			*/}
			<button
				aria-label="menu"
				className="flex-col justify-center items-center hidden lg:flex"
				onClick={handleClick}
			>
				<span
					className={`bg-accent block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
						isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
					}`}
				/>
				<span
					className={`bg-accent block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				/>
				<span
					className={`bg-accent block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
					}`}
				/>
			</button>

			<DesktopNavBar />

			{isOpen && <MobileNavBar handleClick={handleClick} />}

			<div className="absolute left-1/2  top-1/2 -translate-x-1/2  -translate-y-1/2">
				<Logo />
			</div>
		</header>
	)
}
export default NavBar
