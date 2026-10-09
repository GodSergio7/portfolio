import { Briefcase, GraduationCap } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
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
        {/* Sin etiqueta si el periodo ya dice «Actualidad» */}
        {item.current && !item.period.toLowerCase().includes('actualidad') ? (
          <span className="tag-current">Actual</span>
        ) : null}
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
        title="Trayectoria"
        lead="Experiencia en desarrollo web en Valfiguer y en soporte técnico en Conecta Telecom, y formación en el IES Ribera de los Molinos."
      />

      <div className="row g-4 g-lg-5">
        <div className="col-lg-6">
          <ColumnHeading icon={Briefcase} title="Experiencia" />
          <div className="timeline">
            {experience.map((item) => (
              <ExperienceItem item={item} key={item.id} />
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <ColumnHeading icon={GraduationCap} title="Formación" />
          <div className="timeline">
            {education.map((item) => (
              <EducationItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
