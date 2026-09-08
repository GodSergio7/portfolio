// ============================================================
// Proyectos del portfolio.
// ------------------------------------------------------------
// Formato de cada proyecto:
//   {
//     id: string único,
//     featured: true | false (solo uno, tratamiento visual especial),
//     title: nombre del proyecto,
//     description: descripción breve,
//     tech: [tecnologías usadas],
//     image: ruta de la imagen / null,
//     repo: URL de GitHub / null,
//     demo: URL de la demo / null
//   }
//
// - Con image: null se muestra un hueco «Captura próximamente».
// - Con repo o demo en null se muestra «próximamente» en ese botón.
//
// TODO: los títulos y descripciones actuales son PLACEHOLDERS.
// Sustitúyelos por tus proyectos reales en este mismo fichero,
// sin necesidad de tocar ningún componente.
// ============================================================

export const projects = [
  {
    id: 'proyecto-1',
    featured: false,
    title: 'Portfolio',
    description:'Portfolio personal creado con React, Vite, Bootstrap y JavaScript.',
    tech: ['React', 'JavaScript', 'Vite', 'Bootstrap'],
    image: '/proyectos/portfolio.png',
    repo: 'https://github.com/GodSergio7/portfolio',
    demo: 'https://portfolio-olive-rho-29.vercel.app/#inicio',
  },
  {
    id: 'proyecto-2',
    featured: true,
    title: 'To-do List',
    description:
      'Lista de tareas con calendario perfecto para apuntar las tareas pendientes y no olvidarme de ninguna. Todavia en desarrollo.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/proyectos/todoapp.png',
    repo: 'https://github.com/GodSergio7/todo-app',
    demo: 'https://todo-app-one-lilac-25.vercel.app/tareas/tareas.html',
  },
  {
    id: 'proyecto-3',
    featured: false,
    title: '[Nombre del proyecto 3]',
    description:
      '[Resume el proyecto en una o dos frases: funcionalidad principal, retos y resultado.]',
    tech: ['Java', 'Spring', 'MySQL'],
    image: null,
    repo: null,
    demo: null,
  },
  {
    id: 'proyecto-4',
    featured: false,
    title: '[Nombre del proyecto 4]',
    description:
      '[Resume el proyecto en una o dos frases: funcionalidad principal, retos y resultado.]',
    tech: ['Python', 'Node.js', 'Firebase'],
    image: null,
    repo: null,
    demo: null,
  },
]
