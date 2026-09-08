import { ExternalLink, Image, Star } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { GithubIcon } from '../ui/BrandIcons'
import { projects } from '../../data/projects'

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
 * Enlace (repo / demo). Si la URL no existe aún, muestra
 * «próximamente» como estado claro de placeholder.
 */
function ProjectLink({ url, label, icon, aria }) {
  if (!url) {
    return (
      <span className="project-link-pending" title={`[PLACEHOLDER] ${aria}`}>
        {icon}
        {label} próximamente
      </span>
    )
  }
  return (
    <a
      className="btn btn-ghost btn-sm"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} de ${aria}`}
    >
      {icon}
      {label}
    </a>
  )
}

const linkIcons = {
  repo: <GithubIcon size={15} />,
  demo: <ExternalLink size={15} aria-hidden="true" />,
}

function FeaturedProject({ project }) {
  return (
    <Reveal className="col-12">
      <article className="project-card project-card--featured">
        <div className="row g-0 flex-grow-1">
          {/* Imagen / captura */}
          <div className="col-lg-6 project-media featured-media">
            <ProjectMedia project={project} />
          </div>

          {/* Contenido */}
          <div className="col-lg-6 d-flex flex-column">
            <div className="featured-body d-flex flex-column gap-3 flex-grow-1">
              <span className="featured-badge">
                <Star size={13} aria-hidden="true" />
                Proyecto destacado
              </span>
              <h3 className="featured-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2 mt-auto">
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
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal className="col-md-6" delay={(index % 2) * 110}>
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
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.find((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <Section id="proyectos" variant="alt">
      <SectionHeading
        index="03"
        label="Proyectos"
        title="Proyectos"
        lead="Aquí vivirán mis proyectos: cada uno con captura, descripción, tecnologías, código y demo. De momento, los huecos marcan lo que está por venir."
      />

      <div className="row g-4">
        {featured ? <FeaturedProject project={featured} /> : null}

        {rest.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            key={project.id}
          />
        ))}
      </div>
    </Section>
  )
}
