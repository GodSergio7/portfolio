// ============================================================
// Datos personales del portfolio.
// ------------------------------------------------------------
// IMPORTANTE: solo se incluye información real proporcionada.
// Lo pendiente (los proyectos) permanece como placeholder para
// rellenarlo cuando esté disponible.
// ============================================================

export const profile = {
  name: 'Sergio Vidal Moreno',
  shortName: 'Sergio Vidal',
  role: 'Desarrollador Web',
  location: 'Mula, Murcia, España',

  // Formación actual (Grado Superior)
  formation: 'Desarrollo de Aplicaciones Web',

  // Frase breve profesional (Hero)
  tagline:
    'Desarrollador web en formación, especializado en el desarrollo de aplicaciones web y con experiencia trabajando con tecnologías frontend, backend y bases de datos.',

  // Párrafos de la sección «Sobre mí» (presentación resumida, no CV)
  about: [
    'Soy Sergio Vidal Moreno, Desarrollador Web en formación. Actualmente curso el Grado Superior en Desarrollo de Aplicaciones Web y cuento con formación previa en Sistemas Microinformáticos y Redes, además de experiencia práctica en soporte técnico, instalación de equipos y configuración de redes locales.',
    'Mi objetivo profesional está orientado al desarrollo web. Me interesan las tecnologías modernas y, de forma especial, el uso de herramientas de IA aplicadas al desarrollo como apoyo al aprendizaje, la resolución de problemas y la productividad.',
  ],

  // Valor que aparece en el perfil como «Orientación profesional»
  orientation: 'Desarrollo web',

  // Idiomas (solo los proporcionados)
  languages: [{ language: 'Español', level: 'Nativo' }],

  // Habilidades transversales
  softSkills: [
    'Trabajo en equipo y colaboración',
    'Aprendizaje rápido y adaptación a nuevas tecnologías',
    'Organización y gestión del tiempo',
    'Comunicación efectiva con usuarios y compañeros',
  ],

  // ---------------- Contacto (datos reales) ----------------
  email: 'sergiovidalmoreno7@gmail.com',
  phone: {
    display: '+34 665 35 20 32',
    href: 'tel:+34665352032',
  },

  // Redes sociales reales. Se abren en una pestaña nueva.
  social: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/GodSergio7' },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sergio-vidal-moreno-5462b8364/',
    },
  ],
}

// Datos resumidos que aparecen en la tarjeta de «Sobre mí».
// Solo hechos reales: formación, experiencia y orientación.
export const aboutFacts = [
  {
    id: 'formacion',
    icon: 'graduation',
    label: 'Formación',
    value: profile.formation,
    sub: 'Grado Superior · IES Ribera de los Molinos',
  },
  {
    id: 'experiencia',
    icon: 'briefcase',
    label: 'Experiencia',
    value: 'Prácticas y auxiliar técnico',
    sub: 'Soporte técnico, equipos y redes — Conecta Telecom S.L.',
  },
  {
    id: 'orientacion',
    icon: 'compass',
    label: 'Orientación profesional',
    value: profile.orientation,
    sub: 'Frontend, backend y bases de datos',
  },
]
