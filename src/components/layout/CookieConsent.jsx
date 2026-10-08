import { useEffect, useRef, useSyncExternalStore } from 'react'
import { X } from 'lucide-react'
import { GA_ID, getConsent, setConsent, subscribeConsent } from '../../lib/analytics'
import { profile } from '../../data/profile'

// Abre la política de cookies desde cualquier sitio (p. ej. el footer)
const OPEN_EVENT = 'abrir-politica-cookies'
export const openCookiePolicy = () => window.dispatchEvent(new Event(OPEN_EVENT))

// En el HTML prerenderizado vale 'ssr': el banner no se incluye y aparece
// en cuanto React sabe si el visitante ya había elegido
function useConsent() {
  return useSyncExternalStore(subscribeConsent, getConsent, () => 'ssr')
}

const consentLabel = {
  granted: 'aceptadas',
  denied: 'rechazadas',
}

const cookies = [
  { name: '_ga', purpose: 'Distinguir a los visitantes de forma anónima', duration: '2 años' },
  {
    name: `_ga_${GA_ID.replace('G-', '')}`,
    purpose: 'Mantener el estado de la visita',
    duration: '2 años',
  },
]

function ConsentButtons({ onChoose }) {
  const choose = (value) => {
    setConsent(value)
    onChoose?.()
  }
  return (
    <div className="cookie-actions">
      <button type="button" className="cookie-btn" onClick={() => choose('denied')}>
        Rechazar
      </button>
      <button type="button" className="cookie-btn" onClick={() => choose('granted')}>
        Aceptar
      </button>
    </div>
  )
}

/**
 * Banner de cookies + política de cookies (diálogo).
 * «Aceptar» y «Rechazar» tienen el mismo peso visual, como pide la AEPD.
 */
export default function CookieConsent() {
  const consent = useConsent()
  const dialogRef = useRef(null)

  useEffect(() => {
    const open = () => dialogRef.current?.showModal()
    window.addEventListener(OPEN_EVENT, open)
    return () => window.removeEventListener(OPEN_EVENT, open)
  }, [])

  const close = () => dialogRef.current?.close()

  return (
    <>
      {consent === null ? (
        <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
          <p className="cookie-text">
            ¿Me ayudas a mejorar el portfolio? Con Google Analytics sé cuántas personas lo
            visitan y qué les interesa. Solo se activa si aceptas.{' '}
            <button type="button" className="cookie-link" onClick={openCookiePolicy}>
              Política de cookies
            </button>
          </p>
          <ConsentButtons />
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        className="cookie-dialog"
        aria-labelledby="cookie-dialog-title"
        onClick={(event) => {
          // Cierra al pulsar fuera del contenido
          if (event.target === dialogRef.current) close()
        }}
      >
        <div className="cookie-dialog-body">
          <div className="cookie-dialog-head">
            <h2 id="cookie-dialog-title">Política de cookies</h2>
            <button type="button" className="cookie-close" onClick={close} aria-label="Cerrar">
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <p>
            Esta web solo usa cookies de análisis de Google Analytics, y únicamente si las
            aceptas. Sirven para saber cuántas personas la visitan y qué secciones y enlaces
            les interesan. No se usan para publicidad.
          </p>

          <table className="cookie-table">
            <thead>
              <tr>
                <th scope="col">Cookie</th>
                <th scope="col">Finalidad</th>
                <th scope="col">Duración</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((cookie) => (
                <tr key={cookie.name}>
                  <td>
                    <code>{cookie.name}</code>
                  </td>
                  <td>{cookie.purpose}</td>
                  <td>{cookie.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            <strong>Responsable:</strong> {profile.name} ({profile.email}).{' '}
            <strong>Proveedor:</strong> Google Ireland Limited. Los datos pueden transferirse a
            Google LLC (EE. UU.) conforme al Marco de Privacidad de Datos UE-EE. UU. Más
            información en la{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              política de privacidad de Google
            </a>
            .
          </p>

          <p>
            Tu elección se guarda en este navegador, sin cookies, y puedes cambiarla cuando
            quieras.
            {consentLabel[consent] ? (
              <>
                {' '}
                Ahora mismo están <strong>{consentLabel[consent]}</strong>.
              </>
            ) : null}
          </p>

          <ConsentButtons onChoose={close} />
        </div>
      </dialog>
    </>
  )
}
