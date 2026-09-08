# Sergio Vidal Moreno — Portfolio (prototipo)

Primer prototipo del portfolio personal de **Sergio Vidal Moreno**, Desarrollador Web.
Foco de esta iteración: **diseño, UX, responsive y arquitectura frontend** (sin backend,
base de datos ni autenticación).

## Stack

- **React 19** + **Vite**
- **JavaScript** (JSX)
- **Bootstrap 5** (grid, utilidades y base responsive)
- **Lucide React** para iconos
- **Git** para control de versiones

Identidad visual construida sobre `#B8F7E4` (menta) y `#25272C` (tinta oscura).

## Estructura

```
src/
├── main.jsx                  # Punto de entrada (importa Bootstrap + estilos)
├── App.jsx                   # Ensamblado de secciones
├── data/                     # ← TODO el contenido editable, separado de la UI
│   ├── profile.js            #   Nombre, tagline, email, GitHub/LinkedIn
│   ├── navigation.js         #   Ítems del navbar y anclas de secciones
│   ├── technologies.js       #   Tecnologías por categoría
│   ├── projects.js           #   Proyectos (imagen, tech, repo, demo)
│   ├── experience.js         #   Experiencia profesional / prácticas
│   └── education.js          #   Formación
├── components/
│   ├── layout/               # Navbar, Footer, Section
│   ├── sections/             # Hero, About, Technologies, Projects, Experience, Education, Contact
│   └── ui/                   # SectionHeading, Reveal, chips, iconos reutilizables
├── hooks/
│   └── useActiveSection.js   # Scrollspy del navbar
└── styles/
    └── index.css             # Design tokens y estilos propios
```

Principios aplicados:

- **Componentes reutilizables** (`Section`, `SectionHeading`, `Reveal`, chips…).
- **Datos separados de la vista**: para añadir un proyecto o una tecnología solo se
  edita el fichero correspondiente de `src/data/`, sin tocar componentes.
- **Código limpio**: un componente por responsabilidad, nombres descriptivos.
- **Responsive desde el diseño**: grid de Bootstrap por breakpoints + utilidades CSS.

## Placeholders

No se ha inventado ningún dato personal. Los contenidos pendientes están **marcados
entre corchetes** y/o con comentarios `TODO` en `src/data/`. Para personalizar:

1. `src/data/profile.js` → nombre, frase, email y URLs de GitHub/LinkedIn reales.
2. `src/data/projects.js` → tus proyectos reales (título, descripción, tech,
   imagen, repo y demo).
3. `src/data/experience.js` y `src/data/education.js` → experiencia y formación.

En la interfaz, lo pendiente se identifica como: texto entre corchetes, huecos de
«captura próximamente», botones «próximamente» y etiquetas de placeholder en los
enlaces sociales.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (Vite)
npm run build     # compilación de producción
npm run preview   # previsualizar la compilación
```

## Notas de diseño

- Dos iconos (`GitHub`, `LinkedIn`) son SVG inline: `lucide-react` **v1 eliminó los
  iconos de marca** de su catálogo. El resto de iconos son de Lucide.
- Animaciones solo de entrada/reveal, sutiles y desactivadas con
  `prefers-reduced-motion`.
