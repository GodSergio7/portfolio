import { Suspense, lazy, useEffect, useState } from 'react'
import { ArrowRight, FileText, Mail, RotateCw } from 'lucide-react'
import StrokeText from '../ui/reactbits/StrokeText'
import { profile } from '../../data/profile'
import SocialLinks from '../ui/SocialLinks'
import Button from '../ui/Button'

// Carga diferida: la tarjeta giratoria usa motion; mientras llega se
// muestra la foto normal (mismo tamaño, sin saltos)
const FlipCard = lazy(() => import('../ui/reactbits/FlipCard'))

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

// Edad a partir de la fecha de nacimiento (se actualiza sola cada año)
function ageFrom(isoDate) {
  const birth = new Date(`${isoDate}T00:00:00`)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const beforeBirthday =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  if (beforeBirthday) age -= 1
  return age
}

/**
 * Foto que gira al pulsarla (Flip Card de React Bits): por delante la
 * foto y por detrás información personal.
 */
function ProfileFlip() {
  const age = ageFrom(profile.birthDate)

  const front = (
    <>
      <img
        className="hero-flip-img"
        src={profile.photo}
        alt={`Foto de ${profile.name}`}
        width="800"
        height="1067"
        fetchPriority="high"
        draggable={false}
      />
      <span className="hero-flip-hint" aria-hidden="true">
        <RotateCw size={13} />
        Pulsa para girar
      </span>
    </>
  )

  const back = (
    <div className="hero-flip-back">
      <dl className="hero-flip-facts">
        <div>
          <dt>Nombre</dt>
          <dd>{profile.name}</dd>
        </div>
        <div>
          <dt>Edad</dt>
          <dd>{age} años</dd>
        </div>
        <div>
          <dt>Fecha de nacimiento</dt>
          <dd>{profile.birthDateLabel}</dd>
        </div>
        <div>
          <dt>De</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>
      <p className="hero-flip-motto">«{profile.motto}»</p>
    </div>
  )

  return (
    <Suspense fallback={<ProfilePhoto />}>
      <FlipCard
        className="hero-flip"
        front={front}
        back={back}
        radius={20}
        tiltMax={8}
        glare={false}
        ariaLabel={`Foto de ${profile.name}. Pulsa para ver información personal`}
      />
    </Suspense>
  )
}

// El nombre se dibuja en dos líneas fijas, como lo reparte la portada.
const nameLines = ['Sergio Vidal', 'Moreno']

// Mismo tamaño que .hero-name: clamp(44px, 5.5vw, 72px)
const nameSizeFor = (width) => Math.round(Math.min(72, Math.max(44, width * 0.055)))

function useNameSize() {
  const [size, setSize] = useState(() =>
    typeof window === 'undefined' ? 72 : nameSizeFor(window.innerWidth),
  )
  useEffect(() => {
    const onResize = () => setSize(nameSizeFor(window.innerWidth))
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return size
}

export default function Hero() {
  const nameSize = useNameSize()

  return (
    <section id="inicio" className="hero">
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Texto principal */}
          <div className="col-lg-6">
            {/* Nombre dibujado con Stroke Text (prueba). El texto real queda
                oculto visualmente para lectores de pantalla y buscadores. */}
            <h1 className="hero-name hero-name--stroke">
              <span className="visually-hidden">{profile.name}</span>
              {nameLines.map((line, index) => (
                <StrokeText
                  key={line}
                  text={line}
                  decorative
                  fontSize={nameSize}
                  fontWeight={800}
                  letterSpacing={-nameSize * 0.04}
                  strokeColor="#000000"
                  fillColor="#eef1f5"
                  strokeWidth={1.2}
                  drawDuration={1.4}
                  stagger={0.05}
                  delay={index * 0.35}
                />
              ))}
            </h1>
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

            {/* En móvil, rejilla de 2 columnas (ver .hero-actions en index.css):
                fila 1 → Ver proyectos | Contactar conmigo; fila 2 → Ver CV | redes */}
            <div
              className="hero-actions d-flex flex-wrap align-items-center gap-3 fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <Button variant="primary" href="#proyectos">
                Ver proyectos
                <ArrowRight size={17} className="ms-2" aria-hidden="true" />
              </Button>
              <Button variant="secondary" href="#contacto">
                <Mail size={16} className="me-2 hero-icon-desktop" aria-hidden="true" />
                Contactar conmigo
              </Button>
              <Button
                variant="secondary"
                href={profile.cv}
                external
                aria-label="Ver mi CV en PDF (se abre en una pestaña nueva)"
              >
                <FileText size={16} className="me-2" aria-hidden="true" />
                Ver CV
              </Button>
              <SocialLinks links={profile.social} size={19} />
            </div>
          </div>

          {/* Composición visual */}
          <div className="col-lg-6">
            <div className="fade-up" style={{ animationDelay: '120ms' }}>
              <ProfileFlip />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
