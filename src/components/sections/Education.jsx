import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { education } from '../../data/education'

export default function Education() {
  return (
    <Section id="formacion" variant="alt">
      <SectionHeading
        index="05"
        label="Formación"
        title="Estudios y aprendizaje"
        lead="Mi formación reglada, de la ESO al Grado Superior en Desarrollo de Aplicaciones Web."
      />

      <div className="row">
        <Reveal className="col-lg-8">
          {education.length > 0 ? (
            <div className="timeline">
              {education.map((item) => (
                <div
                  className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}
                  key={item.id}
                >
                  <p className="timeline-date">
                    {item.period}
                    {item.current &&
                    !item.period.toLowerCase().includes('actualidad') ? (
                      <span className="tag-current">Actual</span>
                    ) : null}
                  </p>
                  <h3 className="timeline-title">{item.degree}</h3>
                  <p className="timeline-org">{item.school}</p>
                  {item.note ? (
                    <p className="timeline-desc">{item.note}</p>
                  ) : null}
                </div>
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
