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

  // Datos personales de la parte trasera de la foto (Flip Card del Hero).
  // La edad se calcula a partir de la fecha de nacimiento.
  birthDate: '2002-11-05',
  birthDateLabel: '5 de noviembre de 2002',
  motto: 'La vida es bella',

  // CV en PDF (botón «Ver CV» del Hero)
  cv: '/CV-Sergio-Vidal-Moreno.pdf',

  // Frase breve profesional (Hero)
  tagline:
    'Desarrollo interfaces web con React y JavaScript, con una base técnica en sistemas y redes.',

  // Párrafos de la sección «Sobre mí» (presentación resumida, no CV)
  about: [
    'Curso el Grado Superior en Desarrollo de Aplicaciones Web en el IES Ribera de los Molinos. Antes completé el Grado Medio en Sistemas Microinformáticos y Redes y realicé prácticas en Conecta Telecom, donde instalé equipos, configuré redes locales y atendí incidencias de usuarios. Actualmente desarrollo aplicaciones web con React en Valfiguer LLC, en remoto.',
    'Me centro en el frontend: desarrollo interfaces con React y JavaScript, y conozco también PHP, Java, Spring Boot y MySQL. Utilizo la IA como apoyo, revisando y probando siempre el código que genera.',
    'Busco un primer empleo como desarrollador web junior.',
  ],

  // Idiomas (solo los proporcionados)
  languages: [{ language: 'Español', level: 'Nativo' }],

  // Habilidades transversales, cada una con un ejemplo real
  softSkills: [
    'Atención a usuarios durante mis prácticas en Conecta Telecom, donde resolví sus incidencias.',
    'Trabajo en equipo con el equipo técnico de Conecta Telecom en proyectos internos.',
    'Aprendizaje autónomo de TypeScript, Prisma y Zod, que uso en GymManager sin haberlos visto en clase.',
  ],

  // ---------------- Contacto (datos reales) ----------------
  email: 'sergiovidalmoreno7@gmail.com',
  // WhatsApp en lugar del teléfono: así el número no aparece escrito en la web
  whatsapp: {
    display: 'Escríbeme por chat',
    href: 'https://wa.me/34665352032',
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
