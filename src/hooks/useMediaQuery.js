import { useCallback, useSyncExternalStore } from 'react'

/**
 * Devuelve si se cumple una media query (p. ej. '(max-width: 767.98px)')
 * y se actualiza al cambiar el tamaño de la ventana.
 *
 * En el HTML prerenderizado (y al engancharse React a él) vale `false`;
 * justo después toma el valor real del dispositivo.
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
