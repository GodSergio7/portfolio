/**
 * Contenedor de sección: aporta el id de anclaje, el espaciado
 * vertical y la variante de fondo (normal / alternativa).
 */
export default function Section({
  id,
  variant = 'normal',
  className = '',
  children,
}) {
  const variantClass = variant === 'alt' ? 'section-alt' : ''
  return (
    <section id={id} className={`section ${variantClass} ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  )
}
