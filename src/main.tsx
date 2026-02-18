import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Calc } from './Calculator/calculator.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Calc/>
  </StrictMode>,
)
