/*
 * StarBorder — basado en «Star Border» de React Bits (https://reactbits.dev).
 * Copyright (c) 2026 David Haz
 * Licencia: MIT + Commons Clause License Condition v1.0
 * (https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md).
 *
 * Cambios: el estilo del usuario ya no pisa el padding que marca el grosor
 * del borde, los colores salen de los tokens del portfolio y la animación
 * se detiene con `prefers-reduced-motion` (en StarBorder.css).
 */
import './StarBorder.css'

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  backgroundColor,
  textColor,
  borderColor,
  children,
  style,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      {...rest}
      style={{ ...style, padding: `${thickness}px 0` }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="inner-content"
        style={{ background: backgroundColor, color: textColor, borderColor }}
      >
        {children}
      </div>
    </Component>
  )
}

export default StarBorder
