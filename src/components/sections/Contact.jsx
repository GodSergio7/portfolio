import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from 'lucide-react'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import { getSocialIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'
import { trackProps } from '../../lib/analytics'

/**
 * Fila de un canal de contacto.
 * Los canales enlazables (WhatsApp y redes) se abren en una pestaña nueva.
 */
function ContactRow({ row }) {
  const Tag = row.href ? 'a' : 'div'
  const anchorProps = row.href
    ? {
        href: row.href,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${row.label}: ${row.value} (se abre en una pestaña nueva)`,
        ...trackProps(row.track),
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

/**
 * Fila del email: al pulsarla copia la dirección al portapapeles, porque
 * un enlace `mailto:` no hace nada si el dispositivo no tiene una app de
 * correo configurada. La confirmación se anuncia también a lectores de
 * pantalla.
 */
function EmailRow({ row }) {
  const [copied, copy] = useCopyToClipboard()

  return (
    <button
      type="button"
      className="profile-row contact-row contact-row--copy"
      onClick={() => copy(row.value)}
      aria-label={`Copiar el email ${row.value}`}
      {...trackProps({ evento: 'copiar_email', ubicacion: 'contacto' })}
    >
      <span className="profile-icon" aria-hidden="true">
        <row.Icon size={20} />
      </span>
      <span className="flex-grow-1">
        <span className="profile-label d-block">{row.label}</span>
        <span className="profile-value">{row.value}</span>
      </span>
      <span className={`contact-row-copy ${copied ? 'is-copied' : ''}`} aria-hidden="true">
        {copied ? <Check size={18} /> : <Copy size={18} />}
        <span className="contact-row-copy-text">{copied ? 'Copiado' : 'Copiar'}</span>
      </span>
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'Email copiado al portapapeles' : ''}
      </span>
    </button>
  )
}

export default function Contact() {
  const rows = [
    {
      id: 'email',
      Icon: Mail,
      label: 'Email',
      value: profile.email,
      copy: true,
      pending: false,
    },
    {
      id: 'whatsapp',
      Icon: MessageCircle,
      label: 'WhatsApp',
      value: profile.whatsapp.display,
      href: profile.whatsapp.href,
      pending: false,
      track: { evento: 'abrir_whatsapp', ubicacion: 'contacto' },
    },
    // Redes sociales reales (se abren en pestaña nueva).
    ...profile.social.map((link) => ({
      id: link.id,
      Icon: getSocialIcon(link.id),
      label: link.label,
      value: link.url ? `Mi ${link.label}` : 'Próximamente',
      href: link.url,
      pending: !link.url,
      track: { evento: 'abrir_red_social', red: link.id, ubicacion: 'contacto' },
    })),
  ]

  return (
    <Section id="contacto" variant="alt">
      <SectionHeading
        title="Contacto"
        lead="Si buscas un desarrollador web junior, estos son mis datos de contacto."
      />

      {/* Canales de contacto: rejilla 2 × 2 en escritorio */}
      <div className="card-surface profile-card contact-grid">
        {rows.map((row) =>
          row.copy ? <EmailRow row={row} key={row.id} /> : <ContactRow row={row} key={row.id} />,
        )}
      </div>
    </Section>
  )
}
