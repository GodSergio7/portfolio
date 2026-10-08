import { useEffect, useState } from 'react'

/**
 * Devuelve si se cumple una media query (p. ej. '(max-width: 767.98px)')
 * y se actualiza al cambiar el tamaño de la ventana.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
