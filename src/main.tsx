import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Layout2026 from './pages/2026/Layout.tsx'
import HomePage2026 from './pages/2026/HomePage.tsx'

import Layout2025 from './pages/2025/Layout.tsx'
import HomePage2025 from './pages/2025/HomePage.tsx'
import ProjectsPage2025 from './pages/2025/ProjectsPage.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Analytics />
		<SpeedInsights />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout2026 />}>
					<Route index element={<HomePage2026 />} />
				</Route>
				<Route path="/2025" element={<Layout2025 />}>
					<Route index element={<HomePage2025 />} />
					<Route path="projects" element={<ProjectsPage2025 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
