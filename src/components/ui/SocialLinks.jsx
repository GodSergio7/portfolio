import { getSocialIcon } from './BrandIcons'

/**
 * Fila de enlaces sociales (GitHub, LinkedIn…).
 *
 * - Si la red tiene URL real se muestra como enlace.
 * - Si la URL es null (aún no proporcionada) se muestra el icono
 *   atenuado con estado «pendiente»: no se inventan enlaces.
 */
export default function SocialLinks({ links, size = 20 }) {
  return (
    <div className="d-flex align-items-center gap-2">
      {links.map((link) => {
        const Icon = getSocialIcon(link.id)
        if (!Icon) return null

        const commonProps = {
          'aria-label': link.url
            ? link.label
            : `${link.label} — pendiente de añadir`,
        }

        if (!link.url) {
          return (
            <span
              key={link.id}
              className="icon-btn icon-btn--pending"
              title="Pendiente: añade tu URL en src/data/profile.js"
              {...commonProps}
            >
              <Icon size={size} />
            </span>
          )
        }

        return (
          <a
            key={link.id}
            href={link.url}
            className="icon-btn"
            title={link.label}
            {...commonProps}
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
