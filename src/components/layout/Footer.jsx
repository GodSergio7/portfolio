import { ArrowUp, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { getSocialIcon } from '../ui/BrandIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Identidad + copyright */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="footer-brand mb-1">Sergio Vidal Moreno</p>
            <p className="footer-note mb-0">
              © {year} Sergio Vidal Moreno
              <span className="divider-dot" aria-hidden="true" />
              Construido con React · Vite · Bootstrap
            </p>
          </div>

          {/* Enlaces sociales + email + volver arriba */}
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-2">
              <a
                href="#inicio"
                className="icon-btn"
                aria-label="Volver arriba"
                title="Volver arriba"
              >
                <ArrowUp size={18} aria-hidden="true" />
              </a>
              <span
                className="d-none d-sm-block footer-sep"
                aria-hidden="true"
              >
                |
              </span>
              {profile.social.map((link) => {
                const Icon = getSocialIcon(link.id)
                if (!Icon) return null
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    className="icon-btn"
                    aria-label={`${link.label} (perfil pendiente de sustituir)`}
                    title={`${link.label} — [PLACEHOLDER: edita src/data/profile.js]`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
              <a
                href={`mailto:${profile.email}`}
                className="icon-btn"
                aria-label={`Enviar un email (${profile.email})`}
                title={`Email — [PLACEHOLDER: edita src/data/profile.js]`}
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
