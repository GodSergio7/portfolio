import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección que está actualmente en pantalla,
 * para iluminar el enlace correspondiente del navbar (scrollspy).
 *
 * @param {string[]} ids - ids de las secciones, en orden de página.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    let ticking = false

    const compute = () => {
      ticking = false
      // Umbral: un 35% del viewport marca la sección activa.
      const marker = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) {
          current = id
        }
      }
      setActiveId(current)
    }

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(compute)
      }
    }

    compute()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
    // ids proviene de una constante de módulo: referencia estable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return activeId
}
