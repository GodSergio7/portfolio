import { Suspense, lazy, useEffect, useState } from 'react'

// Carga diferida: el fondo animado (y su librería WebGL, ogl) solo se
// descarga si el dispositivo puede dibujarlo con soltura
const GhostFibers = lazy(() => import('../ui/reactbits/GhostFibers'))

/**
 * ¿Puede el dispositivo dibujar el shader con la GPU?
 * Sin GPU (renderizado por software: SwiftShader, llvmpipe…) cada
 * fotograma lo calcula el procesador y bloquea la página, así que en ese
 * caso, o sin WebGL2, se queda el fondo estático.
 */
function canRenderFibers() {
  try {
    const canvas = document.createElement('canvas')
    // null si el navegador solo puede hacerlo por software
    const gl = canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: true })
    if (!gl) return false
    const info = gl.getExtension('WEBGL_debug_renderer_info')
    const renderer = String(
      info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
    )
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    return !/swiftshader|llvmpipe|software|basic render/i.test(renderer)
  } catch {
    return false
  }
}

/**
 * Fondo de toda la web, fijo detrás del contenido.
 * - Siempre: un fondo estático en CSS (degradados menta muy suaves), que
 *   también va en el HTML prerenderizado.
 * - Encima, con un fundido, Ghost Fibers de React Bits: solo si hay GPU,
 *   no se ha pedido ahorro de datos, y cuando la página ya ha cargado y el
 *   navegador está libre, para no competir con el contenido.
 */
export default function SiteBackground() {
  const [fibers, setFibers] = useState(null)

  useEffect(() => {
    let cancelled = false
    let idleId = 0
    let timeoutId = 0

    const decide = () => {
      if (cancelled || navigator.connection?.saveData || !canRenderFibers()) return
      // En móvil, resolución interna al 75 %: las fibras son difusas y no se nota
      const mobile = window.matchMedia('(max-width: 767.98px)').matches
      setFibers({ dpr: mobile ? 0.75 : 1 })
    }
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(decide, { timeout: 3000 })
      } else {
        timeoutId = window.setTimeout(decide, 300)
      }
    }

    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener('load', schedule)
      if (idleId) window.cancelIdleCallback(idleId)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="site-bg" aria-hidden="true">
      {fibers ? (
        <Suspense fallback={null}>
          <div className="site-bg-fibers">
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
              dpr={fibers.dpr}
            />
          </div>
        </Suspense>
      ) : null}
    </div>
  )
}
