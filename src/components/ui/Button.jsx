import StarBorder from './reactbits/StarBorder'
import GlareHover from './reactbits/GlareHover'

/**
 * Botón común de la web (siempre como enlace, porque todos navegan).
 *
 * - variant="primary"   → Star Border: brillo que recorre el borde.
 * - variant="secondary" → Glare Hover con contorno.
 * - variant="ghost"     → Glare Hover pequeño (botones de las tarjetas).
 * - variant="icon"      → Glare Hover cuadrado, solo icono (requiere aria-label).
 *
 * Con `external` se abre en una pestaña nueva.
 */
export default function Button({
  variant = 'secondary',
  href,
  external = false,
  className = '',
  children,
  ...rest
}) {
  const linkProps = {
    href,
    ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    ...rest,
  }

  if (variant === 'primary') {
    return (
      <StarBorder
        as="a"
        color="#ffffff"
        speed="5s"
        thickness={1}
        className={`ui-btn-primary ${className}`.trim()}
        {...linkProps}
      >
        {children}
      </StarBorder>
    )
  }

  return (
    <GlareHover
      as="a"
      glareColor="#ffffff"
      glareOpacity={0.25}
      transitionDuration={600}
      className={`ui-btn ui-btn--${variant} ${className}`.trim()}
      {...linkProps}
    >
      {variant === 'icon' ? children : <span className="ui-btn-label">{children}</span>}
    </GlareHover>
  )
}
