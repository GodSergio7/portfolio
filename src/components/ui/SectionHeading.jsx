import Reveal from './Reveal'

/**
 * Cabecera homogénea para todas las secciones:
 * eyebrow técnico (número + etiqueta), título grande y lead opcional.
 *
 * @param {object} props
 * @param {string} props.index  - número de sección (p. ej. "01")
 * @param {string} props.label  - etiqueta corta (p. ej. "Sobre mí")
 * @param {string} props.title  - titular de la sección
 * @param {string} [props.lead] - frase de apoyo
 */
export default function SectionHeading({ index, label, title, lead }) {
  return (
    <Reveal className="section-heading mb-5">
      <p className="eyebrow">
        {index} · {label}
      </p>
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </Reveal>
  )
}
