import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { experience } from '../../data/experience'

function ExperienceItem({ item }) {
  return (
    <div
      className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}
    >
      <p className="timeline-date">
        {item.period}
        {item.current ? <span className="tag-current">Actual</span> : null}
      </p>
      <h3 className="timeline-title">{item.role}</h3>
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

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeading
        index="04"
        label="Experiencia"
        title="Mi recorrido profesional"
        lead="Prácticas y experiencia profesional en soporte técnico, equipos y redes."
      />

      <div className="row">
        <Reveal className="col-lg-8">
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
      </div>
    </Section>
  )
}
