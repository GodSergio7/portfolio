import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/manrope'
import './styles/bootstrap.scss'
import './styles/index.css'
import App from './App.jsx'
import { initAnalytics } from './lib/analytics'

// Google Analytics solo si el visitante ha aceptado las cookies
initAnalytics()

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// En producción el HTML ya viene prerenderizado (scripts/prerender.mjs) y
// React se engancha a él; en desarrollo el contenedor llega vacío.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
