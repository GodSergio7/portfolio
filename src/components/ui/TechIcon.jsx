import {
  siBootstrap,
  siCss,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siPrisma,
  siReact,
  siTypescript,
  siVite,
  siVitest,
} from 'simple-icons'

// Logos de marca (Simple Icons, CC0). Solo se importan los usados en
// src/data/projects.js; si una tecnología no está aquí, se muestra solo el texto.
const icons = {
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  Vite: siVite,
  Bootstrap: siBootstrap,
  'Node.js': siNodedotjs,
  Prisma: siPrisma,
  Vitest: siVitest,
}

// Los colores de marca muy oscuros (p. ej. Prisma) no se verían sobre el
// fondo de la web: en ese caso se usa el color de texto.
const isTooDark = (hex) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.22
}

/**
 * Logo de una tecnología: monocromo (color del texto) en reposo y con su
 * color de marca al pasar el ratón por la tarjeta (`--brand`, ver index.css).
 * Es decorativo: el nombre ya aparece escrito al lado.
 */
export default function TechIcon({ name, size = 14 }) {
  const icon = icons[name]
  if (!icon) return null
  const brand = isTooDark(icon.hex) ? 'var(--text)' : `#${icon.hex}`
  return (
    <svg
      className="tech-icon"
      style={{ '--brand': brand }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  )
}
