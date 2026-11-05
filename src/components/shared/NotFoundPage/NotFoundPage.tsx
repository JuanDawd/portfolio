import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
	return (
		<main className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-32 text-center">
			<p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">404</p>
			<h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
			<p className="text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist.</p>
			<Button asChild size="sm">
				<Link to="/">Back to home</Link>
			</Button>
		</main>
	)
}
