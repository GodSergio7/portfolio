// ============================================================
// Tecnologías y conocimientos, organizados por categoría.
// ------------------------------------------------------------
// Solo aparecen las tecnologías proporcionadas por Sergio.
// NO se muestran niveles de dominio ni porcentajes.
//
// kind: 'list'    → se muestra como chips de tecnologías.
//       'bullets' → se muestra como lista de conocimientos.
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
    caption: 'IA generativa como apoyo al desarrollo',
    kind: 'bullets',
    items: [
      'Uso de IA generativa como asistencia en programación',
      'Resolución de problemas mediante IA',
      'Generación y optimización de código',
      'Apoyo al aprendizaje técnico',
      'Mejora de productividad',
      'Integración de herramientas de IA en flujos de trabajo',
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
