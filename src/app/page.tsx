'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const quote = {
	initial: { opacity: 1 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
}

const singleWord = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 1,
		},
	},
}

const words = 'Work In Progress'
/** 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',**/
export default function Home() {
	return (
		<main className="min-w-screen min-h-screen static">
			<div className="min-w-[75%] min-h-[75%] bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg blur-md" />
			<motion.h1
				className="inline-block  text-light font-bold capitalize text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				variants={quote}
				initial="initial"
				animate="animate"
			>
				{words.split(' ').map((word, index) => (
					<motion.span
						key={word + ' - ' + index}
						className="inline-block"
						variants={singleWord}
					>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</main>
	)
}
