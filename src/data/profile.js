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

  // Foto de perfil (sin fondo) usada en el Hero
  photo: '/foto-perfil.webp',

  // Frase breve profesional (Hero)
  tagline:
    'Desarrollador web orientado al frontend con React. Formado en Sistemas Microinformáticos y Redes y en Desarrollo de Aplicaciones Web, y con un uso metódico de la IA: especificación, código y tests.',

  // Párrafos de la sección «Sobre mí» (presentación resumida, no CV)
  about: [
    'Curso el Grado Superior en Desarrollo de Aplicaciones Web en el IES Ribera de los Molinos. Antes completé el Grado Medio en Sistemas Microinformáticos y Redes y realicé prácticas en Conecta Telecom, donde instalé equipos, configuré redes locales y atendí incidencias de usuarios.',
    'Me centro en el frontend: desarrollo interfaces con React y JavaScript, y conozco también PHP, Java, Spring Boot y MySQL. Trabajo con Claude y ChatGPT siguiendo un proceso definido: especifico primero lo que voy a construir, reviso el código generado y lo valido con tests.',
    'Busco un primer empleo como desarrollador web junior.',
  ],

  // Idiomas (solo los proporcionados)
  languages: [{ language: 'Español', level: 'Nativo' }],

  // Habilidades transversales, cada una con un ejemplo real
  softSkills: [
    {
      title: 'Atención a usuarios',
      text: 'atendí y resolví incidencias de usuarios durante mis prácticas en Conecta Telecom.',
    },
    {
      title: 'Trabajo en equipo',
      text: 'colaboré con el equipo técnico de Conecta Telecom en proyectos internos.',
    },
    {
      title: 'Aprendizaje autónomo',
      text: 'estoy desarrollando GymManager con tecnologías que no he visto en clase (TypeScript, Prisma, Zod).',
    },
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
