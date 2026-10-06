/*
 * GlareHover — basado en «Glare Hover» de React Bits (https://reactbits.dev).
 * Copyright (c) 2026 David Haz
 * Licencia: MIT + Commons Clause License Condition v1.0
 * (https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md).
 *
 * Cambios: se puede renderizar como cualquier elemento (`as`, p. ej. <a>)
 * y acepta el resto de props (href, aria-label…); el tamaño, el fondo y el
 * borde los da la clase del botón en lugar de props fijas.
 */
import './GlareHover.css'

const toRgba = (color, opacity) => {
  const hex = color.replace('#', '')
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
  if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16)
    const g = parseInt(hex[1] + hex[1], 16)
    const b = parseInt(hex[2] + hex[2], 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
  return color
}

const GlareHover = ({
  as: Component = 'div',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {},
  ...rest
}) => {
  const vars = {
    '--gh-angle': `${glareAngle}deg`,
    '--gh-duration': `${transitionDuration}ms`,
    '--gh-size': `${glareSize}%`,
    '--gh-rgba': toRgba(glareColor, glareOpacity),
  }

  return (
    <Component
      className={`glare-hover ${playOnce ? 'glare-hover--play-once' : ''} ${className}`}
      style={{ ...vars, ...style }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default GlareHover
