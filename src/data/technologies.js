// ============================================================
// Tecnologías y conocimientos, organizados por categoría.
// ------------------------------------------------------------
// Solo aparecen las tecnologías proporcionadas por Sergio.
// NO se muestran niveles de dominio ni porcentajes.
//
// kind: 'list'    → se muestra como chips de tecnologías.
//       'bullets' → se muestra como lista de conocimientos.
// tools (opcional): chips que se muestran encima de la lista.
//
// Para añadir o quitar tecnología solo se edita este fichero.
// ============================================================

export const techCategories = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    caption: 'Frontend, backend y bases de datos',
    kind: 'list',
    items: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'PHP',
      'MySQL',
      'Python',
      'Java',
      'Spring Boot',
      'React',
      'Angular',
    ],
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    caption: 'Entorno de trabajo',
    kind: 'list',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'IntelliJ IDEA', 'Antigravity'],
  },
  {
    id: 'sistemas-redes',
    title: 'Sistemas y Redes',
    caption: 'Conocimiento complementario',
    kind: 'bullets',
    items: [
      'Instalación y mantenimiento de equipos',
      'Configuración de redes locales',
      'Soporte técnico a usuarios',
    ],
  },
  {
    id: 'ia-desarrollo',
    title: 'IA aplicada al desarrollo',
    caption: 'Cómo la uso al programar',
    kind: 'bullets',
    tools: ['Claude (Claude Code)', 'ChatGPT'],
    items: [
      'Le pido que me explique la causa de un error antes de aplicar ningún arreglo.',
      'La uso para entender conceptos y librerías mientras las pruebo en mis proyectos.',
      'Genero componentes, funciones y tests que después reviso y ajusto, como los tests con Vitest de GymManager.',
      'Escribo la especificación antes de programar (Spec-Driven Development), como en GymManager.',
    ],
  },
  {
    id: 'productividad',
    title: 'Productividad y organización',
    caption: 'Gestión de tareas y comunicación',
    kind: 'list',
    items: ['Notion', 'Trello', 'Slack'],
  },
]
