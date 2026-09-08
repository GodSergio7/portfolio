import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeading
        index="04"
        label="Experiencia"
        title="Mi recorrido profesional"
        lead="Empleo y prácticas. La línea de tiempo se completa editando src/data/experience.js."
      />

      <div className="row">
        <Reveal className="col-lg-8">
          {experience.length > 0 ? (
            <div className="timeline">
              {experience.map((item) => (
                <div
                  className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}
                  key={item.id}
                >
                  <p className="timeline-date">
                    {item.period}
                    {item.current ? (
                      <span className="tag-current">Actual</span>
                    ) : null}
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
                  <p className="timeline-desc">{item.description}</p>
                </div>
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
