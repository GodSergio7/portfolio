import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import SocialLinks from '../ui/SocialLinks'

/**
 * Foto de perfil sobre un fondo con el degradado menta de la web.
 * La imagen no tiene fondo (PNG/WebP transparente), así que se
 * integra con el marco en lugar de verse como un recorte.
 */
function ProfilePhoto() {
  return (
    <figure className="hero-photo">
      <img
        src={profile.photo}
        alt={`Foto de ${profile.name}`}
        width="800"
        height="1067"
        fetchPriority="high"
      />
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Texto principal */}
          <div className="col-lg-7">
            <h1 className="hero-name fade-up">{profile.name}</h1>
            <p
              className="hero-role fade-up"
              style={{ animationDelay: '80ms' }}
            >
              {profile.role}
            </p>
            <p
              className="hero-tagline fade-up"
              style={{ animationDelay: '160ms' }}
            >
              {profile.tagline}
            </p>

            <div
              className="d-flex flex-wrap align-items-center gap-3 fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <a href="#proyectos" className="btn btn-mint">
                Ver proyectos
                <ArrowRight size={17} className="ms-2" aria-hidden="true" />
              </a>
              <a href="#contacto" className="btn btn-outline-mint">
                <Mail size={16} className="me-2" aria-hidden="true" />
                Contactar conmigo
              </a>
              <span
                className="d-none d-md-inline-block footer-sep mx-1"
                aria-hidden="true"
              >
                |
              </span>
              <SocialLinks links={profile.social} size={19} />
            </div>
          </div>

          {/* Composición visual */}
          <div className="col-lg-5">
            <div className="fade-up" style={{ animationDelay: '120ms' }}>
              <ProfilePhoto />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
