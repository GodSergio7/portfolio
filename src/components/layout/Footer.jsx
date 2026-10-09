import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import { openCookiePolicy } from './CookieConsent'
import { useHydrated } from '../../hooks/useHydrated'

export default function Footer() {
  // El HTML prerenderizado lleva el año del build (__BUILD_YEAR__, ver
  // vite.config.js); en el navegador se pasa al año actual, por si no ha
  // habido ningún despliegue desde el 1 de enero
  const hydrated = useHydrated()
  const year = hydrated ? new Date().getFullYear() : __BUILD_YEAR__

  return (
    <footer className="footer">
      <div className="container d-flex align-items-center justify-content-between gap-3">
        <p className="footer-note mb-0">
          <span className="brand-mark me-2" aria-hidden="true">
            SV<span className="brand-dot">.</span>
          </span>
          © {year} {profile.name}
          <span className="footer-sep" aria-hidden="true">·</span>
          <button type="button" className="footer-link" onClick={openCookiePolicy}>
            Cookies
          </button>
        </p>
        <Button
          variant="icon"
          href="#inicio"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </Button>
      </div>
    </footer>
  )
}
