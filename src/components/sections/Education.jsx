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
        lead="Mi formación relacionada con el desarrollo de software y el diseño de aplicaciones web."
      />

      <div className="row">
        <Reveal className="col-lg-8">
          {education.length > 0 ? (
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.id}>
                  <p className="timeline-date">{item.period}</p>
                  <h3 className="timeline-title">{item.degree}</h3>
                  <p className="timeline-org">
                    {item.school}
                    <span className="divider-dot" aria-hidden="true" />
                    <span className="font-mono text-muted" style={{ fontSize: '0.82rem' }}>
                      {item.type}
                    </span>
                  </p>
                  <p className="timeline-desc">{item.note}</p>
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
