import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './pages/Layout.tsx'
import { ThemeContextProvider } from '../contexts/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Layout />
    </ThemeContextProvider>
  </StrictMode>,
)
