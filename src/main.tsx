import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

// Production HTML is prerendered (scripts/prerender.mjs) — hydrate it.
// In dev the root is empty, so render from scratch.
if (root.hasChildNodes()) {
	hydrateRoot(root, app)
} else {
	createRoot(root).render(app)
}
