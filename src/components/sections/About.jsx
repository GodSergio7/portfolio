import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile'

/**
 * Bloque «Habilidades» (transversales), cada una con un ejemplo real.
 */
function SoftSkillsBlock() {
  return (
    <div className="info-card">
      <div className="info-card-head">
        <h3>Habilidades</h3>
      </div>
      <ul className="tech-bullets mb-0">
        {profile.softSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  const languages = profile.languages
    .map((lang) => `${lang.language} (${lang.level})`)
    .join(', ')

  return (
    <Section id="sobre-mi" variant="alt">
      <SectionHeading
        title="Sobre mí"
        lead="Formación, enfoque y forma de trabajar."
      />

      <div className="row g-4 g-lg-5 align-items-start">
        {/* Presentación + datos básicos */}
        <div className="col-lg-6">
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
        </div>

        {/* Habilidades transversales */}
        <div className="col-lg-6">
          <SoftSkillsBlock />
        </div>
      </div>
    </Section>
  )
}
