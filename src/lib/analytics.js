// ============================================================
// Google Analytics 4, solo con consentimiento.
// ------------------------------------------------------------
// - El script de Google no se carga hasta que el visitante acepta
//   las cookies (banner o política de cookies). Si rechaza, no se
//   carga nada.
// - La elección se guarda en localStorage (no es una cookie).
// - Eventos: cualquier elemento con `data-evento="nombre"` envía ese
//   evento al pulsarlo; el resto de atributos `data-*` van como
//   parámetros (p. ej. data-ubicacion="hero" → { ubicacion: 'hero' }).
//   Ver `trackProps`.
// ============================================================

export const GA_ID = 'G-5FZPJRRKDL'
const STORAGE_KEY = 'cookie-consent' // 'granted' | 'denied'

let loaded = false
const listeners = new Set()

export function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function subscribeConsent(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // sin almacenamiento (modo privado estricto): vale para esta visita
  }
  if (value === 'granted') loadAnalytics()
  else disableAnalytics()
  listeners.forEach((listener) => listener())
}

function loadAnalytics() {
  window[`ga-disable-${GA_ID}`] = false
  if (loaded) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

// Al retirar el consentimiento: deja de enviar datos y borra las cookies
// de Analytics (_ga y _ga_<ID>) del dominio actual y del principal.
function disableAnalytics() {
  window[`ga-disable-${GA_ID}`] = true
  const names = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
  const host = window.location.hostname
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`]
  names.forEach((name) => {
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    })
  })
}

export function trackEvent(name, params = {}) {
  if (!loaded || window[`ga-disable-${GA_ID}`]) return
  window.gtag('event', name, params)
}

/**
 * Atributos `data-*` para medir un clic:
 * trackProps({ evento: 'ver_cv', ubicacion: 'hero' })
 * → { 'data-evento': 'ver_cv', 'data-ubicacion': 'hero' }
 */
export function trackProps(track) {
  if (!track) return {}
  return Object.fromEntries(Object.entries(track).map(([key, value]) => [`data-${key}`, value]))
}

/**
 * Se llama una vez al arrancar en el navegador: si ya había aceptado,
 * carga Analytics cuando la página termina de cargar (para no restar
 * rendimiento) y empieza a escuchar los clics con `data-evento`.
 */
export function initAnalytics() {
  if (getConsent() === 'granted') {
    if (document.readyState === 'complete') loadAnalytics()
    else window.addEventListener('load', loadAnalytics, { once: true })
  }

  document.addEventListener('click', (event) => {
    const el = event.target.closest?.('[data-evento]')
    if (!el) return
    const { evento, ...params } = el.dataset
    trackEvent(evento, params)
  })
}
