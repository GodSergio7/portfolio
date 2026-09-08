import { ArrowUpRight } from 'lucide-react'
import { getSocialIcon } from './BrandIcons'

/**
 * Fila de enlaces sociales (GitHub, LinkedIn…) con icono de marca.
 */
export default function SocialLinks({ links, size = 20 }) {
  return (
    <div className="d-flex align-items-center gap-2">
      {links.map((link) => {
        const Icon = getSocialIcon(link.id)
        if (!Icon) return null
        return (
          <a
            key={link.id}
            href={link.url}
            className="icon-btn"
            aria-label={`${link.label} (perfil pendiente de sustituir)`}
            title={`${link.label} — [PLACEHOLDER: edita src/data/profile.js]`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
