import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Layout2024 from './pages/2024/Layout.tsx'
import HomePage2024 from './pages/2024/HomePage.tsx'
import ProjectsPage2024 from './pages/2024/ProjectsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/2024" element={<Layout2024 />}>
          <Route index element={<HomePage2024 />} />
          <Route path="projects" element={<ProjectsPage2024 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
