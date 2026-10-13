import { ArrowUp, Check, Copy, FileText, Mail, MessageCircle } from 'lucide-react'
import { profile } from '../../data/profile'
import { navGroups, navItems } from '../../data/navigation'
import Button from '../ui/Button'
import GlareHover from '../ui/reactbits/GlareHover'
import { getSocialIcon } from '../ui/BrandIcons'
import { openCookiePolicy } from './CookieConsent'
import { useHydrated } from '../../hooks/useHydrated'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { trackProps } from '../../lib/analytics'

const labelOf = (id) => navItems.find((item) => item.id === id)?.label ?? id

/**
 * Columna de enlaces con línea superior y título.
 */
function FooterColumn({ title, children }) {
  return (
    <div className="footer-col">
      {/* Párrafo y no encabezado: no son secciones de la página */}
      <p className="footer-col-title">{title}</p>
      <ul className="footer-col-links">{children}</ul>
    </div>
  )
}

/**
 * Móvil y tablet: email completo en una caja que lo copia al pulsarla
 * (`mailto:` no hace nada si el dispositivo no tiene una app de correo).
 */
function CopyEmailBox() {
  const [copied, copy] = useCopyToClipboard()
  return (
    <button
      type="button"
      className={`footer-email ${copied ? 'is-copied' : ''}`}
      onClick={() => copy(profile.email)}
      aria-label={`Copiar el email ${profile.email}`}
      {...trackProps({ evento: 'copiar_email', ubicacion: 'contacto' })}
    >
      <span className="footer-email-address">{profile.email}</span>
      <span className="footer-email-action" aria-hidden="true">
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copiado' : 'Copiar'}
      </span>
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'Email copiado al portapapeles' : ''}
      </span>
    </button>
  )
}

/**
 * Escritorio: botón de icono que copia el email, igual que los demás
 * botones de contacto (en móvil el email va completo en la caja de arriba).
 */
function CopyEmailButton() {
  const [copied, copy] = useCopyToClipboard()
  return (
    <GlareHover
      as="button"
      type="button"
      glareColor="#ffffff"
      glareOpacity={0.25}
      transitionDuration={600}
      className={`ui-btn ui-btn--icon footer-btn--desktop ${copied ? 'is-copied' : ''}`}
      onClick={() => copy(profile.email)}
      aria-label={`Copiar el email ${profile.email}`}
      title={copied ? 'Email copiado' : 'Copiar email'}
      {...trackProps({ evento: 'copiar_email', ubicacion: 'contacto' })}
    >
      {copied ? <Check size={18} aria-hidden="true" /> : <Mail size={18} aria-hidden="true" />}
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'Email copiado al portapapeles' : ''}
      </span>
    </GlareHover>
  )
}

/**
 * Botón de icono que abre un enlace de contacto en una pestaña nueva.
 */
function ContactIcon({ href, label, track, children }) {
  return (
    <Button
      variant="icon"
      href={href}
      external
      aria-label={`${label} (se abre en una pestaña nueva)`}
      title={label}
      {...trackProps(track)}
    >
      {children}
    </Button>
  )
}

/**
 * Footer, que es también la sección de contacto (id="contacto"):
 * título, texto y botones de contacto; dos columnas de enlaces (los mismos
 * grupos que el menú); el nombre en grande solo con contorno y la barra
 * inferior.
 */
export default function Footer() {
  // El HTML prerenderizado lleva el año del build (__BUILD_YEAR__, ver
  // vite.config.js); en el navegador se pasa al año actual, por si no ha
  // habido ningún despliegue desde el 1 de enero
  const hydrated = useHydrated()
  const year = hydrated ? new Date().getFullYear() : __BUILD_YEAR__

  return (
    <footer id="contacto" className="footer" aria-labelledby="contacto-title">
      <div className="container">
        <div className="footer-top">
          <div className="footer-intro">
            <h2 id="contacto-title" className="footer-title">
              Contacto
            </h2>
            <p className="footer-lead">
              Si buscas un desarrollador web junior, estos son mis datos de contacto.
            </p>
            <CopyEmailBox />

            {/* Botones de icono, como los de redes del Hero */}
            <div className="footer-actions">
              <CopyEmailButton />
              <ContactIcon
                href={profile.whatsapp.href}
                label="WhatsApp"
                track={{ evento: 'abrir_whatsapp', ubicacion: 'contacto' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
              </ContactIcon>
              {profile.social.map((link) => {
                const Icon = getSocialIcon(link.id)
                return (
                  <ContactIcon
                    key={link.id}
                    href={link.url}
                    label={link.label}
                    track={{ evento: 'abrir_red_social', red: link.id, ubicacion: 'contacto' }}
                  >
                    {Icon ? <Icon size={18} /> : null}
                  </ContactIcon>
                )
              })}
              <ContactIcon
                href={profile.cv}
                label="Ver mi CV en PDF"
                track={{ evento: 'ver_cv', ubicacion: 'contacto' }}
              >
                <FileText size={18} aria-hidden="true" />
              </ContactIcon>
            </div>
          </div>

          <nav className="footer-cols" aria-label="Enlaces del pie de página">
            {navGroups.map((group) => (
              <FooterColumn title={group.label} key={group.label}>
                {group.ids.map((id) => (
                  <li key={id}>
                    <a className="footer-col-link" href={`#${id}`}>
                      {labelOf(id)}
                    </a>
                  </li>
                ))}
              </FooterColumn>
            ))}
          </nav>
        </div>

        {/* Nombre en grande, solo con contorno y cortado por abajo. El texto
            se reparte (`textLength`) para ocupar todo el ancho sin deformarse */}
        <svg className="footer-wordmark" viewBox="0 0 1000 72" aria-hidden="true" focusable="false">
          <text x="0" y="98" textLength="1000" lengthAdjust="spacing">
            SERGIO VIDAL
          </text>
        </svg>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} {profile.name}
          </p>
          <div className="footer-legal">
            <button type="button" className="footer-link" onClick={openCookiePolicy}>
              Privacidad
            </button>
            <a className="footer-link" href="#inicio">
              Volver arriba
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
