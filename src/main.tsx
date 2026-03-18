import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout2025 from './pages/2025/Layout.tsx'
import HomePage2025 from './pages/2025/HomePage.tsx'

import Layout2024 from './pages/2024/Layout.tsx'
import HomePage2024 from './pages/2024/HomePage.tsx'
import ProjectsPage2024 from './pages/2024/ProjectsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout2025 />}>
          <Route index element={<HomePage2025 />} />
        </Route>
        <Route path="/2024" element={<Layout2024 />}>
          <Route index element={<HomePage2024 />} />
          <Route path="projects" element={<ProjectsPage2024 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
