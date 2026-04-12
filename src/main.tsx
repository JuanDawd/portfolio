import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

// 2026 is the default route — keep it eager so the landing page has no loading delay
import Layout2026 from './pages/2026/Layout.tsx'
import HomePage2026 from './pages/2026/HomePage.tsx'

// 2025 is only visited via /2025 — lazy-load to keep D3, embla-carousel,
// and the 2025 Framer Motion tree out of the initial bundle
// eslint-disable-next-line react-refresh/only-export-components
const Layout2025 = lazy(() => import('./pages/2025/Layout.tsx'))
// eslint-disable-next-line react-refresh/only-export-components
const HomePage2025 = lazy(() => import('./pages/2025/HomePage.tsx'))
// eslint-disable-next-line react-refresh/only-export-components
const ProjectsPage2025 = lazy(() => import('./pages/2025/ProjectsPage.tsx'))

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Analytics />
			<SpeedInsights />
			<Routes>
				<Route path="/" element={<Layout2026 />}>
					<Route index element={<HomePage2026 />} />
				</Route>
				<Route
					path="/2025"
					element={
						<Suspense>
							<Layout2025 />
						</Suspense>
					}
				>
					<Route
						index
						element={
							<Suspense>
								<HomePage2025 />
							</Suspense>
						}
					/>
					<Route
						path="projects"
						element={
							<Suspense>
								<ProjectsPage2025 />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
