import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { getSocialIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'

/**
 * Fila de un canal de contacto.
 * Si el canal es enlazable (email, teléfono) se renderiza como
 * <a>; en caso contrario (ubicación, redes sin URL) como <div>.
 */
function ContactRow({ row }) {
  const Tag = row.href ? 'a' : 'div'
  const anchorProps = row.href
    ? {
        href: row.href,
        target: row.id === 'email' || row.id === 'phone' ? undefined : '_blank',
        rel:
          row.id === 'email' || row.id === 'phone'
            ? undefined
            : 'noopener noreferrer',
        'aria-label': `${row.label}: ${row.value}`,
      }
    : {}

  return (
    <Tag className="profile-row contact-row" {...anchorProps}>
      <span className="profile-icon" aria-hidden="true">
        {row.Icon ? <row.Icon size={20} /> : null}
      </span>
      <span className="flex-grow-1">
        <span className="profile-label d-block">{row.label}</span>
        <span
          className={`profile-value ${row.pending ? 'text-muted' : ''}`}
        >
          {row.value}
        </span>
      </span>
      {row.href ? (
        <ArrowUpRight
          size={18}
          className="contact-row-arrow"
          aria-hidden="true"
        />
      ) : null}
    </Tag>
  )
}

export default function Contact() {
  const rows = [
    {
      id: 'email',
      Icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      pending: false,
    },
    {
      id: 'phone',
      Icon: Phone,
      label: 'Teléfono',
      value: profile.phone.display,
      href: profile.phone.href,
      pending: false,
    },
    {
      id: 'location',
      Icon: MapPin,
      label: 'Ubicación',
      value: profile.location,
      href: null,
      pending: false,
    },
    // Redes sin URL real todavía: se muestran como pendientes.
    ...profile.social.map((link) => ({
      id: link.id,
      Icon: getSocialIcon(link.id),
      label: link.label,
      value: 'Próximamente',
      href: null,
      pending: true,
    })),
  ]

  return (
    <Section id="contacto">
      <SectionHeading
        index="06"
        label="Contacto"
        title="Hablemos"
        lead="¿Un proyecto en mente, una oportunidad profesional o simplemente quieres saludar? Cuéntamelo."
      />

      <div className="row g-4 g-lg-5">
        {/* Panel principal con acciones */}
        <Reveal className="col-lg-6">
          <div className="cta-panel h-100">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p className="mb-4">
              Si buscas un Desarrollador Web para tu equipo o tu próximo
              proyecto, escríbeme o llámame y hablamos sin compromiso.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <a href={`mailto:${profile.email}`} className="btn btn-mint">
                <Mail size={17} className="me-2" aria-hidden="true" />
                Enviar email
              </a>
              <a href={profile.phone.href} className="btn btn-outline-mint">
                <Phone size={16} className="me-2" aria-hidden="true" />
                Llamar
              </a>
            </div>
            <p className="placeholder-hint mt-4 mb-0">
              GitHub y LinkedIn se activarán cuando añadas tus perfiles en
              src/data/profile.js
            </p>
          </div>
        </Reveal>

        {/* Detalle de canales */}
        <Reveal className="col-lg-6" delay={120}>
          <div className="card-surface profile-card p-4 h-100">
            {rows.map((row) => (
              <ContactRow row={row} key={row.id} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
