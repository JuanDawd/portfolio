import React, { useRef } from 'react'

import { SideScrollBar } from '@/lib/FramerElements'

import { EducationList } from './Constants'
import Details from './Details'

const Education = () => {
	const ref = useRef(null)
	const offset = ['start end', 'center start']
	return (
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
				Education
			</h2>
			<div
				ref={ref}
				className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full "
			>
				<SideScrollBar ref={ref} offset={offset} />

				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					{EducationList.map((value, key) => (
						<Details key={key} {...value} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Education
