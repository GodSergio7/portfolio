import { Code2, Database, Server, Wrench } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { techCategories } from '../../data/technologies'

// Icono que representa cada categoría (solo en el componente:
// los datos permanecen como texto plano, fácil de ampliar).
const categoryIcons = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  tools: Wrench,
}

export default function Technologies() {
  return (
    <Section id="tecnologias">
      <SectionHeading
        index="02"
        label="Tecnologías"
        title="Mi caja de herramientas"
        lead="Tecnologías y herramientas organizadas por área. Sin niveles inventados: cada tecnología, en su contexto."
      />

      <div className="row g-4">
        {techCategories.map((category, index) => {
          const Icon = categoryIcons[category.id] ?? Code2
          return (
            <Reveal className="col-md-6 col-xl-3" delay={index * 90} key={category.id}>
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
                <div className="tech-list">
                  {category.techs.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
