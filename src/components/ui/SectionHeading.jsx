/**
 * Cabecera homogénea para todas las secciones: título y lead opcional.
 *
 * @param {object} props
 * @param {string} props.title  - titular de la sección
 * @param {string} [props.lead] - frase de apoyo
 */
export default function SectionHeading({ title, lead }) {
  return (
    <div className="section-heading mb-5">
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  )
}
