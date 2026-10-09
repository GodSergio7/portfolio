# Sergio Vidal Moreno — Portfolio

[![CI](https://github.com/GodSergio7/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/GodSergio7/portfolio/actions/workflows/ci.yml)

Portfolio personal de **Sergio Vidal Moreno**, desarrollador web frontend.

**Web:** https://www.sergiovidal.es

Una sola página con las secciones Inicio, Sobre mí, Tecnologías, Proyectos,
Trayectoria y Contacto. El HTML se **prerenderiza** en el build, para que
buscadores y redes vean el contenido sin ejecutar JavaScript.

## Stack

- **React 19** + **Vite**, en JavaScript (JSX)
- **Bootstrap 5** compilado a medida desde Sass: solo la base, la rejilla y unas pocas utilidades
- **Manrope** (variable), servida desde la propia web
- Componentes de **[React Bits](https://reactbits.dev)**, adaptados: Card Nav, Star Border, Glare Hover, Specular Button, Stroke Text, Carousel y Flip Card.
  Licencia MIT + Commons Clause; el aviso se conserva en cada archivo.
- **GSAP** (menú y nombre del Hero), **motion** (carrusel y Flip Card) y **ogl** (Specular Button)
- Iconos: **Lucide**, **Simple Icons** (CC0), **Devicon** (MIT) y **Lobe Icons** (MIT)
- **Google Analytics 4**, solo con consentimiento
- Despliegue en **Vercel**; comprobación automática con **GitHub Actions**

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (sin prerenderizado)
npm run build     # build de cliente + build de servidor + prerenderizado
npm run preview   # ver el build de producción en local
npm run lint      # revisar el código con ESLint
```

## Estructura

```
index.html                 # Página principal: SEO, Open Graph y datos estructurados
404.html                   # Página de error que sirve Vercel (sin React)
scripts/prerender.mjs      # Escribe el HTML prerenderizado en dist/index.html
public/                    # CV, imágenes, robots.txt, sitemap.xml, favicon
src/
├── main.jsx               # Arranque: hydrateRoot (producción) / createRoot (desarrollo)
├── entry-server.jsx       # Render en servidor para el prerenderizado
├── App.jsx                # Ensamblado de secciones
├── data/                  # Todo el contenido, separado de la vista
│   ├── profile.js         #   Datos personales, contacto, idiomas, habilidades, CV
│   ├── navigation.js      #   Secciones del menú
│   ├── technologies.js    #   Tecnologías por categoría
│   ├── projects.js        #   Proyectos
│   ├── experience.js      #   Experiencia
│   └── education.js       #   Formación
├── components/
│   ├── layout/            # Navbar, Footer, Section, CookieConsent
│   ├── sections/          # Hero, About, Technologies, Projects, Trajectory, Contact
│   └── ui/                # Button, TechIcon, SocialLinks, CardNav y reactbits/
├── hooks/                 # useMediaQuery, useHydrated, useActiveSection, useCopyToClipboard
├── lib/analytics.js       # Google Analytics, consentimiento y eventos
└── styles/                # index.css (tokens y estilos), bootstrap.scss, fonts.css
```

## Cómo actualizar el contenido

Casi todo se cambia editando `src/data/`.

- **Añadir un proyecto:** añadir una entrada en `src/data/projects.js` y dos capturas en `public/proyectos/`:
  - `nombre.webp`, a 1280 × 720;
  - `nombre-720.webp`, la misma captura a 720 px de ancho, para móvil.

  Las dos se sirven con `srcset`. Sin imagen (`image: null`) se muestra el hueco "Captura próximamente".
- **Añadir una tecnología:** añadir el nombre en `src/data/technologies.js` y su logo en el mapa `icons` de `src/components/ui/TechIcon.jsx`. Sin logo, se muestra solo el nombre.
- **Actualizar el CV:** sustituir `public/CV-Sergio-Vidal-Moreno.pdf`, con el mismo nombre, y cambiar el `?v=` de `profile.cv` en `src/data/profile.js`. Así ningún navegador muestra la copia antigua desde la caché.
- **Cambiar la foto del Hero:** sustituir `public/foto-perfil.webp` (800 × 1067) y `public/foto-perfil-600.webp`, a 600 px de ancho.

## Notas técnicas

### Prerenderizado

`npm run build` genera el HTML de toda la página con `renderToString` (`src/entry-server.jsx`). Después, `scripts/prerender.mjs` hace tres cosas:

- lo escribe en `dist/index.html`;
- añade la precarga de la foto y de la fuente;
- pone la fecha del build en el `sitemap.xml` y en el `dateModified` de los datos estructurados.

En el navegador, React se engancha a ese HTML con `hydrateRoot`. Para que el HTML generado y el del navegador coincidan:

- **No leas `window` ni `document` durante el render**, solo en efectos.
- `useMediaQuery` vale `false` en el HTML generado y después toma el valor real.
- Lo que solo puede existir en el navegador, como los componentes con carga diferida que se ven al cargar, se monta con `useHydrated()`. Ejemplo: la Flip Card del Hero.

### Carga por dispositivo

- **Specular Button (ogl):** solo en escritorio.
- **Carrusel:** solo en móvil.
- **Flip Card:** después de cargar la página.

Todos se cargan con `React.lazy`.

### Analytics y cookies

- Google Analytics (`G-5FZPJRRKDL`) **no se carga hasta que el visitante acepta** el banner. La elección se guarda en `localStorage` (`cookie-consent`).
- Para medir un clic, añade los atributos `data-*` con `trackProps({ evento: 'nombre', ... })` de `src/lib/analytics.js`.
- La política de cookies se abre desde el footer.

### Bootstrap a medida

`src/styles/bootstrap.scss` solo genera las clases de rejilla y utilidades que se usan. Si un componente necesita otra, hay que añadirla ahí.

### Accesibilidad

Incluye:

- enlace "Saltar al contenido";
- foco visible;
- menú usable con teclado (Escape para cerrar);
- zonas táctiles de 24 px;
- textos alternativos;
- respeto a `prefers-reduced-motion`.

Lighthouse da 100 en Accesibilidad.

### CI

`.github/workflows/ci.yml` se ejecuta en cada push y pull request a `main` y lanza:

- `npm ci`;
- `npm audit --audit-level=high`;
- `npm run lint`;
- `npm run build`.
