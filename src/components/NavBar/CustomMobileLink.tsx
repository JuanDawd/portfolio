'use client'

import { usePathname, useRouter } from 'next/navigation'

const CustomMobileLink = ({
	href,
	title,
	className = '',
	toggle,
}: {
	href: string
	title: string
	className?: string
	toggle: () => void
}) => {
	const pathname = usePathname()
	const router = useRouter()
	const handleClick = () => {
		toggle()
		setTimeout(() => {
			router.push(href)
		}, 100)
	}
	return (
		<button
			onClick={handleClick}
			className={`${className} relative group my-2`}
		>
			{title}
			{/* Change the BG here with the accent color later*/}
			<span
				className={`h-[2px] inline-block bg-accent absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					pathname === href ? 'w-full' : 'w-0'
				} `}
			>
				&nbsp;
			</span>
		</button>
	)
}

export default CustomMobileLink
