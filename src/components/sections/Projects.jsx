import { Suspense, lazy } from 'react'
import { ExternalLink, Image } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import { GithubIcon } from '../ui/BrandIcons'
import Button from '../ui/Button'
import TechIcon from '../ui/TechIcon'
import { projects } from '../../data/projects'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { trackProps } from '../../lib/analytics'

// Carga diferida: el carrusel (y su librería, motion) solo se descarga en móvil
const Carousel = lazy(() => import('../ui/reactbits/Carousel'))

/**
 * Zona visual del proyecto: imagen real o hueco «captura próximamente».
 */
function ProjectMedia({ project }) {
  if (project.image) {
    return (
      // Imagen adaptable: versión de 720 px para móvil y la original para
      // pantallas grandes o de alta densidad
      <img
        src={project.image}
        srcSet={`${project.image.replace('.webp', '-720.webp')} 720w, ${project.image} 1280w`}
        sizes="(min-width: 768px) 50vw, 100vw"
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
function ProjectLink({ url, label, icon, aria, type }) {
  if (!url) return null
  return (
    <Button
      variant="ghost"
      href={url}
      external
      aria-label={`${label} de ${aria} (se abre en una pestaña nueva)`}
      {...trackProps({ evento: 'abrir_proyecto', proyecto: aria, tipo: type })}
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
            type="codigo"
          />
          <ProjectLink
            url={project.demo}
            label="Demo"
            icon={linkIcons.demo}
            aria={project.title}
            type="demo"
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
        // Mientras carga el carrusel se ve la primera tarjeta, sin saltos
        <Suspense fallback={<ProjectCard project={projects[0]} />}>
          <Carousel
            items={projects}
            getKey={(project) => project.id}
            getLabel={(project) => project.title}
            ariaLabel="Proyectos"
            loop
            renderItem={(project) => <ProjectCard project={project} />}
          />
        </Suspense>
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
