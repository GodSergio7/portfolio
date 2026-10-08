// ============================================================
// Experiencia profesional y prácticas (información real).
// ------------------------------------------------------------
// Cada entrada:
//   {
//     id, role, company, location?, period, current?,
//     description?, bullets?: [responsabilidades concretas]
//   }
// ============================================================

export const experience = [
  {
    id: 'valfiguer-practicas',
    role: 'Desarrollador en prácticas',
    company: 'Valfiguer LLC',
    location: 'En remoto',
    period: 'Septiembre 2026 — Actualidad',
    current: true,
    description: 'Prácticas del Grado Superior en Desarrollo de Aplicaciones Web.',
    bullets: [
      'Desarrollo de interfaces web con React y Vite, incluyendo componentes animados (React Bits).',
      'Diseño responsive y accesibilidad en escritorio y móvil.',
      'Trabajo por tareas en Projekt, con revisión de cada cambio antes de publicarlo.',
      'Despliegue en Vercel y configuración de dominio propio.',
      'Desarrollo asistido por IA (Claude Code), revisando y validando el código generado.',
    ],
  },
  {
    id: 'conecta-telecom-practicas',
    role: 'Técnico de sistemas en prácticas',
    company: 'Conecta Telecom S.L.',
    location: 'Mula, Murcia, España',
    period: '2022',
    current: false,
    description: 'Prácticas del Grado Medio en Sistemas Microinformáticos y Redes (300 horas).',
    bullets: [
      'Instalación y mantenimiento de equipos informáticos.',
      'Configuración y supervisión de redes locales.',
      'Soporte técnico básico a usuarios.',
      'Resolución de incidencias.',
      'Colaboración en proyectos internos bajo supervisión del equipo técnico.',
    ],
  },
  {
    id: 'conecta-telecom-auxiliar',
    role: 'Auxiliar técnico',
    company: 'Conecta Telecom S.L.',
    location: 'Mula, Murcia, España',
    period: 'Abril 2023',
    current: false,
    description: 'Trabajo temporal (9 días).',
    bullets: [
      'Apoyo en tareas de mantenimiento y soporte informático.',
      'Asistencia en la gestión de incidencias de usuarios.',
    ],
  },
]
