import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, {Header} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
  </StrictMode>,
)
