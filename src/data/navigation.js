// ============================================================
// Navegación principal del portfolio.
// Cada ítem enlaza con la sección que tenga ese mismo id.
// ============================================================

export const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
]

export const navIds = navItems.map((item) => item.id)
