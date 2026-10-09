import { Suspense, lazy } from 'react'
import { useHydrated } from '../../hooks/useHydrated'

// Carga diferida: el fondo (y su librería WebGL, ogl) no va en el HTML
// prerenderizado ni retrasa la carga; aparece con un fundido al estar listo
const GhostFibers = lazy(() => import('../ui/reactbits/GhostFibers'))

/**
 * Fondo animado de toda la web (Ghost Fibers de React Bits), fijo detrás
 * del contenido. Colores ajustados a la identidad: fondo `--bg` y fibras
 * en tonos menta oscuros, con poca intensidad para no restar legibilidad.
 */
export default function SiteBackground() {
  const hydrated = useHydrated()
  if (!hydrated) return null

  return (
    <div className="site-bg" aria-hidden="true">
      <Suspense fallback={null}>
        <GhostFibers
          backdrop="#1d1f23"
          lineColor="#12352f"
          glowColor="#2a6e60"
          blueBoost={1}
          brightness={1.4}
          glowIntensity={1.1}
          vignette={0.85}
          grain={0.03}
          speed={0.15}
          fps={30}
          dpr={1}
        />
      </Suspense>
    </div>
  )
}
