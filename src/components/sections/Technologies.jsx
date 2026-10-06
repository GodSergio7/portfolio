import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import { techCategories } from '../../data/technologies'

/**
 * Nombres repartidos en columnas regulares que ocupan todo el ancho,
 * para que el bloque quede equilibrado a izquierda y derecha.
 */
function InlineList({ items }) {
  return (
    <ul className="tech-grid">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function CategoryContent({ category }) {
  if (category.kind === 'bullets') {
    return (
      <>
        {category.tools?.length ? <InlineList items={category.tools} /> : null}
        <ul className="tech-bullets">
          {category.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
  return <InlineList items={category.items} />
}

export default function Technologies() {
  return (
    <Section id="tecnologias">
      <SectionHeading
        title="Tecnologías y herramientas"
        lead="Tecnologías que he utilizado en mi formación y en mis proyectos."
      />

      {/* Filas: categoría a la izquierda, contenido a la derecha */}
      <dl className="tech-rows">
          {techCategories.map((category) => (
            <div className="tech-row" key={category.id}>
              <dt className="tech-row-title">{category.title}</dt>
              <dd className="tech-row-content">
                <CategoryContent category={category} />
              </dd>
            </div>
          ))}
      </dl>
    </Section>
  )
}
