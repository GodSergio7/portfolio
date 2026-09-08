import { Check, Languages, Users } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { aboutFacts, profile } from '../../data/profile'
import { factIcons } from '../ui/factIcons'

/**
 * Bloque «Idiomas» — solo los idiomas realmente proporcionados.
 */
function LanguagesBlock() {
  return (
    <div className="info-card">
      <div className="info-card-head">
        <span className="profile-icon" aria-hidden="true">
          <Languages size={20} />
        </span>
        <h3>Idiomas</h3>
      </div>
      <div className="d-flex flex-wrap align-items-center gap-2">
        {profile.languages.map((lang) => (
          <span key={lang.language} className="language-pill">
            <span className="language-name">{lang.language}</span>
            <span className="chip chip--mint">{lang.level}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * Bloque «Habilidades» (transversales) — discreto, sin robar
 * protagonismo a proyectos ni a habilidades técnicas.
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
  return (
    <Section id="sobre-mi" variant="alt">
      <SectionHeading
        index="01"
        label="Sobre mí"
        title="Quién soy"
        lead="Una presentación breve y honesta: mi formación, mi base técnica y hacia dónde quiero crecer como desarrollador."
      />

      <div className="row g-4 g-lg-5 align-items-start">
        {/* Presentación */}
        <Reveal className="col-lg-7">
          <div className="about-intro">
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {/* Tarjeta de perfil */}
        <Reveal className="col-lg-5" delay={120}>
          <div className="card-surface profile-card p-4 h-100">
            {aboutFacts.map((fact) => {
              const Icon = factIcons[fact.icon] ?? factIcons.compass
              return (
                <div className="profile-row" key={fact.id}>
                  <span className="profile-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="profile-label">{fact.label}</p>
                    <p className="profile-value mb-0">{fact.value}</p>
                    <p className="profile-sub">{fact.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>

      {/* Idiomas + habilidades transversales */}
      <div className="row g-4 mt-2">
        <Reveal className="col-md-6" delay={80}>
          <LanguagesBlock />
        </Reveal>
        <Reveal className="col-md-6" delay={160}>
          <SoftSkillsBlock />
        </Reveal>
      </div>
    </Section>
  )
}
