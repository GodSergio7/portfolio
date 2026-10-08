import {
  siAngular,
  siBootstrap,
  siClaude,
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siIntellijidea,
  siJavascript,
  siMysql,
  siNodedotjs,
  siPhp,
  siPrisma,
  siPython,
  siReact,
  siSpringboot,
  siTypescript,
  siVite,
  siVitest,
} from 'simple-icons'

// Logos que no están en Simple Icons (las marcas pidieron retirarlos).
// Trazados de Devicon (https://devicon.dev, licencia MIT), en 128 × 128.
const devicon = {
  java: {
    viewBox: '0 0 128 128',
    hex: 'EA2D2E',
    path: 'M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z',
  },
  vscode: {
    viewBox: '0 0 128 128',
    hex: '007ACC',
    fillRule: 'evenodd',
    path: 'M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z',
  },
}

// Logos de herramientas de IA que tampoco están en Simple Icons.
// Trazados de Lobe Icons (https://lobehub.com/icons, licencia MIT), en 24 × 24.
const lobe = {
  // El logo original es un degradado de colores de Google: se usa su azul
  antigravity: {
    hex: '3186FF',
    fillRule: 'evenodd',
    path: 'M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z',
  },
  // OpenAI es negro: se verá con el color del texto (ver isTooDark)
  openai: {
    hex: '000000',
    fillRule: 'evenodd',
    path: 'M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z',
  },
}

// Logos de marca por nombre, tal como aparecen en src/data/projects.js y
// src/data/technologies.js. Si una tecnología no está aquí, se muestra
// solo el texto.
const icons = {
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  // El logo actual de Angular es casi negro: se usa su rojo clásico
  Angular: { ...siAngular, hex: 'DD0031' },
  Vite: siVite,
  Bootstrap: siBootstrap,
  PHP: siPhp,
  Java: devicon.java,
  'Spring Boot': siSpringboot,
  Python: siPython,
  'Node.js': siNodedotjs,
  Prisma: siPrisma,
  MySQL: siMysql,
  Vitest: siVitest,
  Git: siGit,
  GitHub: siGithub,
  'Visual Studio Code': devicon.vscode,
  // Simple Icons lo da en negro: se usa el rosa de la marca IntelliJ
  'IntelliJ IDEA': { ...siIntellijidea, hex: 'FE315D' },
  Antigravity: lobe.antigravity,
  'Claude (Claude Code)': siClaude,
  ChatGPT: lobe.openai,
}

// Los colores de marca muy oscuros (p. ej. Prisma o GitHub) no se verían
// sobre el fondo de la web: en ese caso se usa el color de texto.
const isTooDark = (hex) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.22
}

/**
 * Logo de una tecnología. Es decorativo: el nombre ya aparece al lado.
 * - Por defecto (chips de proyectos): monocromo en reposo y con su color
 *   de marca al pasar el ratón por la tarjeta (`--brand`, ver index.css).
 * - Con `colored` (sección Tecnologías): siempre con su color de marca.
 */
export default function TechIcon({ name, size = 14, colored = false }) {
  const icon = icons[name]
  if (!icon) return null
  const brand = isTooDark(icon.hex) ? 'var(--text)' : `#${icon.hex}`
  return (
    <svg
      className={`tech-icon ${colored ? 'tech-icon--brand' : ''}`.trim()}
      style={{ '--brand': brand }}
      width={size}
      height={size}
      viewBox={icon.viewBox ?? '0 0 24 24'}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} fillRule={icon.fillRule} clipRule={icon.fillRule} />
    </svg>
  )
}
