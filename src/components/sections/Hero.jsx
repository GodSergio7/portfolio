import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import SocialLinks from '../ui/SocialLinks'
import Button from '../ui/Button'

/**
 * Foto de perfil sobre un marco con degradado gris.
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
        <div className="row align-items-center g-4 g-lg-5">
          {/* Texto principal */}
          <div className="col-lg-6">
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
              <Button variant="primary" href="#proyectos">
                Ver proyectos
                <ArrowRight size={17} className="ms-2" aria-hidden="true" />
              </Button>
              <Button variant="secondary" href="#contacto">
                <Mail size={16} className="me-2" aria-hidden="true" />
                Contactar conmigo
              </Button>
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
          <div className="col-lg-6">
            <div className="fade-up" style={{ animationDelay: '120ms' }}>
              <ProfilePhoto />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
