import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import App from './App.tsx'

export { routePages, SITE_URL } from './lib/seo'

// Renders a route to static HTML. prerender waits for every
// Suspense boundary, so the lazy 2025 routes are fully rendered too.
export async function render(url: string): Promise<string> {
	const { prelude } = await prerender(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>,
	)
	return new Response(prelude).text()
}
