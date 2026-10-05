import { Briefcase, GraduationCap } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { experience } from '../../data/experience'
import { education } from '../../data/education'

/**
 * Cabecera de cada columna (Experiencia / Formación).
 */
function ColumnHeading({ icon: Icon, title }) {
  return (
    <div className="trajectory-heading">
      <span className="profile-icon" aria-hidden="true">
        <Icon size={20} />
      </span>
      <h3>{title}</h3>
    </div>
  )
}

function ExperienceItem({ item }) {
  return (
    <div
      className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}
    >
      <p className="timeline-date">
        {item.period}
        {item.current ? <span className="tag-current">Actual</span> : null}
      </p>
      <h4 className="timeline-title">{item.role}</h4>
      <p className="timeline-org">
        {item.company}
        {item.location ? (
          <>
            <span className="divider-dot" aria-hidden="true" />
            {item.location}
          </>
        ) : null}
      </p>
      {item.description ? (
        <p className="timeline-desc">{item.description}</p>
      ) : null}
      {item.bullets?.length ? (
        <ul className="timeline-bullets">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function EducationItem({ item }) {
  return (
    <div
      className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}
    >
      <p className="timeline-date">
        {item.period}
        {item.current && !item.period.toLowerCase().includes('actualidad') ? (
          <span className="tag-current">Actual</span>
        ) : null}
      </p>
      <h4 className="timeline-title">{item.degree}</h4>
      <p className="timeline-org">{item.school}</p>
      {item.note ? <p className="timeline-desc">{item.note}</p> : null}
    </div>
  )
}

/**
 * Trayectoria: experiencia y formación lado a lado
 * (se apilan en una sola columna en móvil y tablet).
 */
export default function Trajectory() {
  return (
    <Section id="trayectoria">
      <SectionHeading
        index="04"
        label="Trayectoria"
        title="Experiencia y formación"
        lead="Prácticas en Conecta Telecom y formación en el IES Ribera de los Molinos, desde Sistemas Microinformáticos y Redes hasta Desarrollo de Aplicaciones Web."
      />

      <div className="row g-5">
        <Reveal className="col-lg-6">
          <ColumnHeading icon={Briefcase} title="Experiencia" />
          {experience.length > 0 ? (
            <div className="timeline">
              {experience.map((item) => (
                <ExperienceItem item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <p className="text-muted mb-0">
              Próximamente se mostrará aquí mi experiencia profesional y mis
              prácticas.
            </p>
          )}
        </Reveal>

        <Reveal className="col-lg-6" delay={120}>
          <ColumnHeading icon={GraduationCap} title="Formación" />
          {education.length > 0 ? (
            <div className="timeline">
              {education.map((item) => (
                <EducationItem item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <p className="text-muted mb-0">
              Próximamente se mostrará aquí mi formación.
            </p>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
