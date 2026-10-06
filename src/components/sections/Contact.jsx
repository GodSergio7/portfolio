import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { getSocialIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'

/**
 * Fila de un canal de contacto.
 * Si el canal es enlazable (email, teléfono, redes con URL) se
 * renderiza como <a>; si no (ubicación) como <div>.
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

// URL mostrada de forma legible (sin protocolo ni barra final).
const displayUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

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
    // Redes sociales reales (se abren en pestaña nueva).
    ...profile.social.map((link) => ({
      id: link.id,
      Icon: getSocialIcon(link.id),
      label: link.label,
      value: link.url ? displayUrl(link.url) : 'Próximamente',
      href: link.url,
      pending: !link.url,
    })),
  ]

  return (
    <Section id="contacto" variant="alt">
      <SectionHeading
        title="Contacto"
        lead="Si buscáis un desarrollador web junior, estos son mis datos de contacto."
      />

      {/* Canales de contacto: rejilla 2 × 2 en escritorio */}
      <Reveal>
        <div className="card-surface profile-card contact-grid">
          {rows.map((row) => (
            <ContactRow row={row} key={row.id} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
