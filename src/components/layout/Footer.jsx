import { ArrowUp, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import SocialLinks from '../ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Identidad + copyright */}
          <div className="col-12 col-md-7 text-center text-md-start">
            <p className="footer-brand mb-1">Sergio Vidal Moreno</p>
            <p className="footer-note mb-2">
              {profile.role} · {profile.location}
            </p>
            <p className="footer-note mb-0">
              © {year} Sergio Vidal Moreno
              <span className="divider-dot" aria-hidden="true" />
              Hecho con React · Vite · Bootstrap
            </p>
          </div>

          {/* Enlaces: volver arriba, redes y email */}
          <div className="col-12 col-md-5">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-2">
              <a
                href="#inicio"
                className="icon-btn"
                aria-label="Volver arriba"
                title="Volver arriba"
              >
                <ArrowUp size={18} aria-hidden="true" />
              </a>
              <SocialLinks links={profile.social} size={18} />
              <a
                href={`mailto:${profile.email}`}
                className="icon-btn"
                aria-label={`Enviar un email a ${profile.email}`}
                title={profile.email}
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
