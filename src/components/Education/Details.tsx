import { Button } from '@/components/ui/button'
import { LiIcon } from '@/lib/FramerElements'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const Details = ({
	type,
	place,
	info,
	time,
}: {
	type: string
	place: string
	info?: string
	time: string
}) => {
	const ref = useRef(null)
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}
			>
				<h3 className="capitalize font-bold text-2xl  sm:text-xl xs:text-lg">
					{type}&nbsp;
				</h3>
				<span className="capitalize font-medium text-secondary-foreground/75 xs:text-sm">
					{time} | {place}
				</span>
				<p className="font-medium w-full md:text-sm">{info}</p>
			</motion.div>
		</li>
	)
}

export default Details
