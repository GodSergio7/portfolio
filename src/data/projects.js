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
    id: 'proyecto-destacado',
    featured: false,
    title: '[Nombre del proyecto destacado]',
    description:
      '[Cuenta qué hace este proyecto, qué problema resuelve y qué aprendiste construyéndolo. El proyecto destacado recibe un tratamiento visual mayor: descríbelo con un poco más de detalle.]',
    tech: ['React', 'JavaScript', 'Vite', 'Bootstrap'],
    image: null,
    repo: null,
    demo: null,
  },
  {
    id: 'proyecto-2',
    featured: true,
    title: 'To-do List',
    description:
      'Lista de tareas con calendario perfecto para apuntar las tareas pendientes y no olvidarme de ninguna. Todavia en desarrollo.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/public/proyectos/todoapp.png',
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
