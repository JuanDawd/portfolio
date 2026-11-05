import { useRef } from 'react'
import { m, useScroll } from 'framer-motion'
import { CertificationList } from './Constants'
import KnowledgeDetails from '../Details/KnowledgeDetails'

const Certifications = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center'],
	})
	return (
		<div className="my-32">
			<h2 className="xs:text-4xl mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl">Certification</h2>
			<div ref={ref} className="relative mx-auto w-[75%] md:w-full lg:w-[90%]">
				<m.div
					style={{ scaleY: scrollYProgress }}
					className="xs:left-[20px] absolute top-0 left-9 mt-2 h-full w-1 origin-top bg-accent md:left-[30px] md:w-[2px]"
				/>
				<ul className="xs:ml-2 ml-4 flex w-full flex-col items-start justify-between">
					{CertificationList.map((value, key) => (
						<KnowledgeDetails key={key} {...value} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Certifications
