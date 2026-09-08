import { useEffect, useRef, useState } from 'react'

/**
 * Envuelve contenido y lo revela con una transición suave cuando
 * entra en el viewport (IntersectionObserver).
 *
 * - Sin JavaScript o sin soporte de IO: el contenido se muestra siempre.
 * - Respeta `prefers-reduced-motion` vía CSS.
 *
 * @example <Reveal className="col-md-6" delay={100}>…</Reveal>
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  delay = 0,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
