import { Compass, GraduationCap, Layers } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { profile } from '../../data/profile'

export default function About() {
  const isPlaceholder = (text) => text.trim().startsWith('[')

  return (
    <Section id="sobre-mi" variant="alt">
      <SectionHeading
        index="01"
        label="Sobre mí"
        title="Quién soy"
        lead="Un vistazo a mi perfil como desarrollador: formación, orientación y las tecnologías con las que construyo."
      />

      <div className="row g-4 g-lg-5 align-items-start">
        {/* Presentación */}
        <Reveal className="col-lg-7">
          <div className="about-intro">
            {profile.about.map((paragraph, index) => (
              <p
                key={index}
                className={
                  isPlaceholder(paragraph) ? 'placeholder-note' : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Tarjeta de perfil */}
        <Reveal className="col-lg-5" delay={120}>
          <div className="card-surface profile-card p-4 p-xl-4 h-100">
            <div className="profile-row">
              <span className="profile-icon" aria-hidden="true">
                <GraduationCap size={20} />
              </span>
              <div>
                <p className="profile-label">Formación</p>
                <p className="profile-value">{profile.formation}</p>
              </div>
            </div>

            <div className="profile-row">
              <span className="profile-icon" aria-hidden="true">
                <Compass size={20} />
              </span>
              <div>
                <p className="profile-label">Orientación profesional</p>
                <p className="profile-value">{profile.orientation}</p>
              </div>
            </div>

            <div className="profile-row">
              <span className="profile-icon" aria-hidden="true">
                <Layers size={20} />
              </span>
              <div>
                <p className="profile-label">Tecnologías principales</p>
                <div className="d-flex flex-wrap gap-2">
                  {profile.mainStack.map((tech) => (
                    <span className="chip chip--mint" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
