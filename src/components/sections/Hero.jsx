import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import SocialLinks from '../ui/SocialLinks'

/**
 * Tarjeta decorativa «sergio-vidal.js»: composición visual que
 * comunica de inmediato que esto es un portfolio de desarrollo.
 * Contiene solo datos reales del perfil.
 */
function CodeCard() {
  return (
    <div
      className="code-card"
      style={{ animationDelay: '180ms' }}
      aria-hidden="true"
    >
      <div className="code-card-header">
        <div className="code-card-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="code-card-filename">sergio-vidal.js</span>
      </div>
      <div className="code-card-body">
        <pre>
          <span className="code-line">
            <span className="code-token-com">// DAW · IES Ribera de los Molinos</span>
          </span>
          <span className="code-line">
            <span className="code-token-key">const</span>{' '}
            <span className="code-token-prop">sergioVidal</span>{' '}
            <span className="code-token-punct">= {'{'}</span>
          </span>
          <span className="code-line">
            {'  '}nombre:{' '}
            <span className="code-token-str">'Sergio Vidal Moreno'</span>,
          </span>
          <span className="code-line">
            {'  '}rol: <span className="code-token-str">'Desarrollador Web'</span>,
          </span>
          <span className="code-line">
            {'  '}estudios: [<span className="code-token-str">'S.M.R.'</span>,{' '}
            <span className="code-token-str">'D.A.W.'</span>],
          </span>
          <span className="code-line">
            {'  '}ubicacion:{' '}
            <span className="code-token-str">'Mula, Murcia'</span>,
          </span>
          <span className="code-line">
            <span className="code-token-punct">{'};'}</span>
          </span>
        </pre>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero grid-bg">
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Texto principal */}
          <div className="col-lg-7">
            <p className="hero-eyebrow fade-up m-0">hola, soy</p>
            <h1
              className="hero-name fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Sergio Vidal <span className="text-mint">Moreno</span>
            </h1>
            <p
              className="hero-role fade-up"
              style={{ animationDelay: '150ms' }}
            >
              Desarrollador Web
              <span className="hero-cursor" aria-hidden="true" />
            </p>
            <p
              className="hero-tagline fade-up"
              style={{ animationDelay: '220ms' }}
            >
              {profile.tagline}
            </p>

            <div
              className="d-flex flex-wrap align-items-center gap-3 fade-up"
              style={{ animationDelay: '300ms' }}
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
            <div className="fade-up" style={{ animationDelay: '260ms' }}>
              <CodeCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
