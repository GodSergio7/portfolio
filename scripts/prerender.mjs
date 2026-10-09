// Prerenderizado: escribe el HTML de la página dentro de dist/index.html,
// para que buscadores y redes vean el contenido sin ejecutar JavaScript.
// Se ejecuta en `npm run build`, después de los builds de cliente y servidor.
import { readdir, readFile, rm, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const ssrDir = new URL('dist-ssr/', root)
const assetsDir = new URL('dist/assets/', root)
const indexFile = new URL('dist/index.html', root)
const sitemapFile = new URL('dist/sitemap.xml', root)

// Fecha del build (AAAA-MM-DD): última modificación en el sitemap y en los
// datos estructurados, para no tener que cambiarla a mano
const today = new Date().toISOString().slice(0, 10)

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

// Precarga de la fuente principal (Manrope latina): el navegador la pide a
// la vez que el CSS, en lugar de descubrirla al leerlo. El nombre lleva hash.
const font = (await readdir(assetsDir)).find((name) =>
  /^manrope-latin-wght-normal-.+\.woff2$/.test(name),
)
if (font) {
  preloads.push(
    `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin>`,
  )
}

await writeFile(
  indexFile,
  html
    .replace('</head>', `${preloads.join('')}</head>`)
    .replace(/"dateModified": "[\d-]+"/, `"dateModified": "${today}"`)
    .replace(marker, `<div id="root">${app}</div>`),
)

const sitemap = await readFile(sitemapFile, 'utf8')
await writeFile(sitemapFile, sitemap.replace(/<lastmod>[\d-]+<\/lastmod>/, `<lastmod>${today}</lastmod>`))

await rm(ssrDir, { recursive: true, force: true })

console.log(`Prerenderizado: dist/index.html (fecha ${today})`)
