// ============================================================
// Tecnologías y conocimientos, organizados por categoría.
// Se muestran en una rejilla de 2 × 2.
//
// kind: 'list'    → se muestra como chips de tecnologías.
//       'bullets' → se muestra como lista de frases.
// tools (opcional): chips que se muestran encima de la lista.
// ============================================================

export const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    kind: 'list',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend y bases de datos',
    kind: 'list',
    items: ['PHP', 'Java', 'Spring Boot', 'Python', 'Node.js', 'Prisma', 'MySQL'],
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    kind: 'list',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'IntelliJ IDEA', 'Antigravity'],
  },
  {
    id: 'ia-desarrollo',
    title: 'IA aplicada al desarrollo',
    kind: 'bullets',
    tools: ['Claude (Claude Code)', 'ChatGPT'],
    items: [
      'Explicar la causa de los errores antes de corregirlos.',
      'Aprender conceptos y librerías nuevas.',
      'Generar código y tests que reviso antes de usarlos.',
      'Especificar antes de programar (SDD), como en GymManager.',
    ],
  },
]
