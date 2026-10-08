import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

/**
 * HTML de la página para el prerenderizado (ver scripts/prerender.mjs).
 * Los componentes con carga diferida (Flip Card, carrusel, Specular
 * Button) salen con su versión de espera; el navegador los carga después.
 */
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
