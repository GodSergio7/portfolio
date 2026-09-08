import { Check, Code2, ListChecks, Network, Sparkles, Wrench } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { techCategories } from '../../data/technologies'

// Icono que representa cada categoría (solo en el componente:
// los datos permanecen como texto plano, fácil de ampliar).
const categoryIcons = {
  'desarrollo-web': Code2,
  herramientas: Wrench,
  'sistemas-redes': Network,
  'ia-desarrollo': Sparkles,
  productividad: ListChecks,
}

// Anchos por categoría para equilibrar la parrilla responsive:
// la categoría grande (Desarrollo Web) ocupa más espacio.
const categoryWidths = {
  'desarrollo-web': 'col-12 col-lg-7',
  herramientas: 'col-12 col-md-6 col-lg-5',
  'sistemas-redes': 'col-12 col-md-6 col-lg-3',
  'ia-desarrollo': 'col-12 col-md-6 col-lg-6',
  productividad: 'col-12 col-md-6 col-lg-3',
}

function CategoryContent({ category }) {
  if (category.kind === 'bullets') {
    return (
      <ul className="tech-bullets mb-0">
        {category.items.map((item) => (
          <li key={item}>
            <Check size={15} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
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
        index="02"
        label="Tecnologías"
        title="Mi caja de herramientas"
        lead="Las tecnologías y áreas con las que trabajo y aprendo, organizadas por categoría. Sin porcentajes ni niveles de dominio inventados."
      />

      <div className="row g-4">
        {techCategories.map((category, index) => {
          const Icon = categoryIcons[category.id] ?? Code2
          const width = categoryWidths[category.id] ?? 'col-md-6'
          return (
            <Reveal className={width} delay={(index % 3) * 80} key={category.id}>
              <div className="tech-card">
                <div className="tech-card-head">
                  <span className="tech-card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="tech-card-title">{category.title}</h3>
                    <p className="tech-card-count mb-0">{category.caption}</p>
                  </div>
                </div>
                <CategoryContent category={category} />
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
