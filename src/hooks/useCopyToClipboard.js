import { useCallback, useEffect, useRef, useState } from 'react'

// Copia con la API moderna y, si no está disponible (contexto no seguro o
// navegador antiguo), con un <textarea> temporal.
async function writeText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // sigue con el método alternativo
    }
  }
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  document.body.removeChild(area)
  return ok
}

/**
 * Copia texto al portapapeles y marca `copied` durante `resetAfter` ms,
 * para mostrar una confirmación («Email copiado»).
 *
 * @returns {[boolean, (text: string) => Promise<boolean>]}
 */
export function useCopyToClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text) => {
      const ok = await writeText(text)
      if (ok) {
        setCopied(true)
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setCopied(false), resetAfter)
      }
      return ok
    },
    [resetAfter],
  )

  return [copied, copy]
}
