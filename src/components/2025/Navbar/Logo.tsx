import { Link } from 'react-router-dom'
import { yearHref } from '@/years'

const Logo = () => {
	return (
		<div className="mt-1 flex items-center justify-center">
			<Link to={yearHref('2025')} className="font-share-tech flex h-16 w-24 items-center justify-center text-2xl">
				<span className="text-accent">{'<'}</span>
				JuanDawd
				<span className="text-accent">&nbsp;{'/>'}</span>
			</Link>
		</div>
	)
}

export default Logo
