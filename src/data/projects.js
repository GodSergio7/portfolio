// ============================================================
// Proyectos del portfolio, en el orden en que se muestran.
// ------------------------------------------------------------
// Formato de cada proyecto:
//   {
//     id: string único,
//     title: nombre del proyecto,
//     description: descripción breve (1–2 frases),
//     tech: [tecnologías usadas, 4–5 principales],
//     image: ruta de la captura / null,
//     repo: URL de GitHub / null,
//     demo: URL de la demo / null
//   }
//
// - Con image: null se muestra el hueco «Captura próximamente».
// - Si repo o demo es null, ese botón no se muestra.
// ============================================================

export const projects = [
  {
    id: 'todo-list',
    title: 'To-do List',
    description:
      'Aplicación de lista de tareas con calendario para organizar las tareas pendientes por fecha. En desarrollo.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/proyectos/todo-list.webp',
    repo: 'https://github.com/GodSergio7/todo-app',
    demo: 'https://todo-app-one-lilac-25.vercel.app/tareas/tareas.html',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Portfolio personal desarrollado con React y Vite. Presenta mi perfil, mis proyectos y mi trayectoria.',
    tech: ['React', 'JavaScript', 'Vite', 'Bootstrap'],
    image: '/proyectos/portfolio.webp',
    repo: 'https://github.com/GodSergio7/portfolio',
    demo: 'https://www.sergiovidal.es/',
  },
  {
    id: 'dropmaster',
    title: 'DropMaster',
    description:
      'Web informativa que explica cómo funciona el modelo de negocio del dropshipping.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/proyectos/dropmaster.webp',
    repo: 'https://github.com/GodSergio7/DropMaster',
    demo: 'https://drop-master-lac.vercel.app/',
  },
  {
    id: 'gymmanager',
    title: 'GymManager',
    description:
      'Aplicación de gestión de gimnasios desarrollada con Spec-Driven Development y tests automatizados. En desarrollo.',
    tech: ['React', 'TypeScript', 'Node.js', 'Prisma', 'Vitest'],
    image: null,
    repo: 'https://github.com/GodSergio7/GymManager',
    demo: null,
  },
]
