import { Link } from 'react-router-dom'

function App() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background text-foreground">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight">Juan Dawd</h1>
				<p className="mt-4 text-lg text-muted-foreground">
					Portfolio — Coming Soon
				</p>
				<Link
					to="/2025"
					className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-primary"
				>
					View 2025 Portfolio
				</Link>
			</div>
		</div>
	)
}

export default App
