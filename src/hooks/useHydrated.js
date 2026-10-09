import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * Devuelve `false` en el HTML prerenderizado y mientras React se engancha
 * a él, y `true` justo después. Sirve para mostrar solo en el navegador
 * lo que no puede salir en el HTML generado (p. ej. componentes con carga
 * diferida, que React no sabe terminar al prerenderizar: error #419).
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
