// Prerenderizado: escribe el HTML de la página dentro de dist/index.html,
// para que buscadores y redes vean el contenido sin ejecutar JavaScript.
// Se ejecuta en `npm run build`, después de los builds de cliente y servidor.
import { readFile, rm, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const ssrDir = new URL('dist-ssr/', root)
const indexFile = new URL('dist/index.html', root)

const { render } = await import(new URL('entry-server.js', ssrDir))

const marker = '<div id="root"></div>'
const html = await readFile(indexFile, 'utf8')
if (!html.includes(marker)) {
  throw new Error(`No se encuentra ${marker} en dist/index.html`)
}

// React pone al principio los <link rel="preload"> (p. ej. la foto del Hero,
// con fetchPriority="high"). Se pasan al <head>, que es donde deben ir y así
// no quedan dentro del contenedor al que React se engancha.
let app = render()
const preloads = []
app = app.replace(/^(?:<link [^>]*\/>)+/, (links) => {
  preloads.push(links)
  return ''
})

await writeFile(
  indexFile,
  html
    .replace('</head>', `${preloads.join('')}</head>`)
    .replace(marker, `<div id="root">${app}</div>`),
)
await rm(ssrDir, { recursive: true, force: true })

console.log('Prerenderizado: dist/index.html')
