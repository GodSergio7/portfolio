import { ArrowUpRight, Mail } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SocialLinks from '../ui/SocialLinks'
import { getSocialIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'

const displayUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

export default function Contact() {
  const channels = [
    {
      id: 'email',
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
      placeholder: true,
    },
    ...profile.social.map((link) => ({
      id: link.id,
      label: link.label,
      value: displayUrl(link.url),
      href: link.url,
      Icon: getSocialIcon(link.id),
      placeholder: true,
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

      <div className="row g-4">
        {/* Panel CTA principal */}
        <Reveal className="col-12">
          <div className="cta-panel">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <h3>¿Tienes un proyecto en mente?</h3>
                <p>
                  Si buscas un Desarrollador Web para tu equipo o tu próximo
                  proyecto, escríbeme y hablamos.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-wrap align-items-center gap-3 justify-content-lg-end">
                  <a href={`mailto:${profile.email}`} className="btn btn-mint">
                    <Mail size={17} className="me-2" aria-hidden="true" />
                    Enviar un email
                  </a>
                  <SocialLinks links={profile.social} size={19} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Canales de contacto */}
        {channels.map((channel, index) => (
          <Reveal className="col-md-6 col-xl-4" delay={index * 90} key={channel.id}>
            <a
              className="contact-card card-surface w-100"
              href={channel.href}
              target={channel.id === 'email' ? undefined : '_blank'}
              rel={channel.id === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={`${channel.label}: ${channel.value}`}
            >
              <span className="contact-icon" aria-hidden="true">
                {channel.Icon ? <channel.Icon size={21} /> : null}
              </span>
              <span className="flex-grow-1">
                <h3>{channel.label}</h3>
                <p>{channel.value}</p>
              </span>
              <ArrowUpRight
                size={18}
                className="flex-shrink-0 text-muted"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
