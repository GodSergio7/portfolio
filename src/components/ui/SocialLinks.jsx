import { getSocialIcon } from './BrandIcons'
import Button from './Button'

/**
 * Fila de enlaces sociales (GitHub, LinkedIn…) como botones de icono.
 * Solo se muestran las redes que tienen URL.
 */
export default function SocialLinks({ links, size = 20 }) {
  return (
    <div className="d-flex align-items-center gap-2">
      {links.map((link) => {
        const Icon = getSocialIcon(link.id)
        if (!Icon || !link.url) return null

        return (
          <Button
            key={link.id}
            variant="icon"
            href={link.url}
            external
            aria-label={`${link.label} (se abre en una pestaña nueva)`}
            title={link.label}
          >
            <Icon size={size} />
          </Button>
        )
      })}
    </div>
  )
}
