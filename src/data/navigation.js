// ============================================================
// Navegación principal del portfolio.
// Cada ítem enlaza con la sección que tenga ese mismo id.
// ============================================================

export const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'contacto', label: 'Contacto' },
]

export const navIds = navItems.map((item) => item.id)

// Grupos de secciones que se muestran como tarjetas en el menú.
// La tercera tarjeta (Contacto) se construye con los datos de profile.js.
export const navGroups = [
  { label: 'Perfil', ids: ['sobre-mi', 'tecnologias'] },
  { label: 'Trabajo', ids: ['proyectos', 'trayectoria'] },
]
