'use client'
import { FramerImage } from '@/lib/FramerElements'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

type ProjectSlideshowType = {
	imagesArray: StaticImageData[]
}

export function ProjectSlideshow({ imagesArray }: ProjectSlideshowType) {
	const [slide, setSlide] = useState<number>(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSlide((prevValue) => (prevValue + 1) % imagesArray.length)
		}, 10000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div className="relative flex items-center">
			<div className="overflow-hidden flex-auto relative z-0 rounded-lg">
				<div className="flex gap-1 transition-all left-1/2 items-center">
					{imagesArray.map((item, index) => (
						<FramerImage
							key={index}
							src={item}
							alt={item.src}
							className="w-full h-auto rounded-lg"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
							priority
							sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
						/>
					))}
				</div>
			</div>
			{imagesArray.length > 1 && (
				<div className="absolute bottom-4 rounded-lg h-4 left-1/2 -translate-x-1/2 flex px-0 py-2 items-center z-10">
					{imagesArray.map((item, index) => (
						<div
							key={index}
							className={
								'w-2 h-2 bg-zinc-600 cursor-pointer m-[0.2rem] rounded-xl active:bg-zinc-50' +
								(slide === index ? ' active' : '')
							}
							onClick={() => setSlide(index)}
						></div>
					))}
				</div>
			)}
		</div>
	)
}
