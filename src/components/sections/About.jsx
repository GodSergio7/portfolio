import { Check, Users } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { profile } from '../../data/profile'

/**
 * Bloque «Habilidades» (transversales), cada una con un ejemplo real.
 */
function SoftSkillsBlock() {
  return (
    <div className="info-card">
      <div className="info-card-head">
        <span className="profile-icon" aria-hidden="true">
          <Users size={20} />
        </span>
        <h3>Habilidades</h3>
      </div>
      <ul className="tech-bullets mb-0">
        {profile.softSkills.map((skill) => (
          <li key={skill}>
            <Check size={15} aria-hidden="true" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  const languages = profile.languages
    .map((lang) => `${lang.language} (${lang.level.toLowerCase()})`)
    .join(', ')

  return (
    <Section id="sobre-mi" variant="alt">
      <SectionHeading
        title="Perfil profesional"
        lead="Formación, enfoque y forma de trabajar."
      />

      <div className="row g-4 g-lg-5 align-items-start">
        {/* Presentación + datos básicos */}
        <Reveal className="col-lg-6">
          <div className="about-intro">
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <p className="about-meta">
            {profile.location}
            <span className="divider-dot" aria-hidden="true" />
            Idiomas: {languages}
          </p>
        </Reveal>

        {/* Habilidades transversales */}
        <Reveal className="col-lg-6" delay={120}>
          <SoftSkillsBlock />
        </Reveal>
      </div>
    </Section>
  )
}
