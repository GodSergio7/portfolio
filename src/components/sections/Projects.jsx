import { ExternalLink, Image } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import { GithubIcon } from '../ui/BrandIcons'
import Button from '../ui/Button'
import TechIcon from '../ui/TechIcon'
import Carousel from '../ui/reactbits/Carousel'
import { projects } from '../../data/projects'
import { useMediaQuery } from '../../hooks/useMediaQuery'

/**
 * Zona visual del proyecto: imagen real o hueco «captura próximamente».
 */
function ProjectMedia({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Captura del proyecto ${project.title}`}
        loading="lazy"
        draggable={false} // para que arrastrar en el carrusel no arrastre la imagen
      />
    )
  }
  return (
    <div className="project-placeholder">
      <Image size={26} strokeWidth={1.5} aria-hidden="true" />
      <span>Captura próximamente</span>
    </div>
  )
}

/**
 * Enlace (repo / demo). Si el proyecto no tiene esa URL, no se muestra.
 */
function ProjectLink({ url, label, icon, aria }) {
  if (!url) return null
  return (
    <Button
      variant="ghost"
      href={url}
      external
      aria-label={`${label} de ${aria} (se abre en una pestaña nueva)`}
    >
      {icon}
      {label}
    </Button>
  )
}

const linkIcons = {
  repo: <GithubIcon size={15} />,
  demo: <ExternalLink size={15} aria-hidden="true" />,
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <ProjectMedia project={project} />
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span className="chip" key={tech}>
              <TechIcon name={tech} size={13} />
              {tech}
            </span>
          ))}
        </div>
        <div className="d-flex flex-wrap align-items-center gap-2 mt-1">
          <ProjectLink
            url={project.repo}
            label="Código"
            icon={linkIcons.repo}
            aria={project.title}
          />
          <ProjectLink
            url={project.demo}
            label="Demo"
            icon={linkIcons.demo}
            aria={project.title}
          />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  // Móvil: carrusel lateral; tablet y escritorio: rejilla 2 × 2
  const isMobile = useMediaQuery('(max-width: 767.98px)')

  return (
    <Section id="proyectos" variant="alt">
      <SectionHeading
        title="Proyectos"
        lead="Proyectos que he desarrollado, con enlace al código y a la demo cuando está disponible."
      />

      {isMobile ? (
        <Carousel
          items={projects}
          getKey={(project) => project.id}
          getLabel={(project) => project.title}
          ariaLabel="Proyectos"
          loop
          renderItem={(project) => <ProjectCard project={project} />}
        />
      ) : (
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
