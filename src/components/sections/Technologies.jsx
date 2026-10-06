import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { techCategories } from '../../data/technologies'

function CategoryContent({ category }) {
  if (category.kind === 'bullets') {
    return (
      <>
        {category.tools?.length ? (
          <div className="tech-list mb-3">
            {category.tools.map((tool) => (
              <span className="chip chip--strong" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        ) : null}
        <ul className="tech-bullets mb-0">
          {category.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
  return (
    <div className="tech-list">
      {category.items.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default function Technologies() {
  return (
    <Section id="tecnologias">
      <SectionHeading
        title="Tecnologías y herramientas"
        lead="Tecnologías que he utilizado en mi formación y en mis proyectos."
      />

      {/* Rejilla 2 × 2: todas las tarjetas del mismo ancho */}
      <div className="row g-4">
        {techCategories.map((category, index) => (
          <Reveal className="col-md-6" delay={(index % 2) * 80} key={category.id}>
            <div className="tech-card">
              <h3 className="tech-card-title">{category.title}</h3>
              <CategoryContent category={category} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
