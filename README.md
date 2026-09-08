# Sergio Vidal Moreno — Portfolio

Portfolio personal de **Sergio Vidal Moreno**, Desarrollador Web (Mula, Murcia, España).
Prototipo frontend: **diseño, UX, responsive y arquitectura de componentes** (sin backend,
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
├── data/                     # ← TODO el contenido, separado de la UI
│   ├── profile.js            #   Datos personales, contacto, idiomas, habilidades
│   ├── navigation.js         #   Ítems del navbar y anclas de secciones
│   ├── technologies.js       #   Tecnologías y conocimientos por categoría
│   ├── projects.js           #   Proyectos (placeholder hasta definirlos)
│   ├── experience.js         #   Experiencia profesional / prácticas
│   └── education.js          #   Formación
├── components/
│   ├── layout/               # Navbar, Footer, Section
│   ├── sections/             # Hero, About, Technologies, Projects, Experience, Education, Contact
│   └── ui/                   # SectionHeading, Reveal, iconos y piezas reutilizables
├── hooks/
│   └── useActiveSection.js   # Scrollspy del navbar
└── styles/
    └── index.css             # Design tokens y estilos propios
```

Principios aplicados:

- **Componentes reutilizables** (`Section`, `SectionHeading`, `Reveal`, chips…).
- **Datos separados de la vista**: editar `src/data/` basta para cambiar contenidos.
- **Código limpio**: un componente por responsabilidad, nombres descriptivos.
- **Responsive desde el diseño**: grid de Bootstrap por breakpoints + utilidades CSS.

## Contenido y placeholders

El portfolio contiene **solo información real**. Lo que todavía no está disponible se
muestra con placeholders claramente identificados:

| Dato | Estado |
| --- | --- |
| Nombre, rol, ubicación, email, teléfono | ✅ Real |
| Formación (4 estudios) y experiencia (Conecta Telecom) | ✅ Real |
| Tecnologías, idiomas y habilidades | ✅ Real |
| **GitHub / LinkedIn** | ✅ Real (se abren en pestaña nueva) |
| **Proyectos** | ⏳ Pendiente: placeholders en `src/data/projects.js` |

Para personalizar o completar:

1. `src/data/profile.js` → datos personales, contacto y URLs de GitHub/LinkedIn.
2. `src/data/projects.js` → proyectos reales (imagen, tecnologías, repo y demo).

Email y teléfono son interactivos (`mailto:` y `tel:`); los enlaces sociales se
abren en una pestaña nueva (`target="_blank"`). No se inventan enlaces.

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
- Sin niveles de dominio ni porcentajes inventados.
- Animaciones solo de entrada/reveal, sutiles y desactivadas con
  `prefers-reduced-motion`.
