import { getSocialIcon } from './BrandIcons'
import Button from './Button'
import { trackProps } from '../../lib/analytics'

/**
 * Fila de enlaces sociales (GitHub, LinkedIn…) como botones de icono.
 * Solo se muestran las redes que tienen URL. `place` indica en Analytics
 * desde qué parte de la web se ha pulsado.
 */
export default function SocialLinks({ links, size = 20, place }) {
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
            {...trackProps({ evento: 'abrir_red_social', red: link.id, ubicacion: place })}
          >
            <Icon size={size} />
          </Button>
        )
      })}
    </div>
  )
}
