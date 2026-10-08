import CardNav from '../ui/CardNav/CardNav'
import { navGroups, navIds, navItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'

const labelOf = (id) => navItems.find((item) => item.id === id)?.label ?? id

// Tarjetas del menú: dos grupos de secciones + canales de contacto.
const menuItems = [
  ...navGroups.map((group) => ({
    label: group.label,
    links: group.ids.map((id) => ({ label: labelOf(id), href: `#${id}` })),
  })),
  {
    label: 'Contacto',
    links: [
      // Copia la dirección: `mailto:` no hace nada sin una app de correo configurada
      {
        label: 'Email',
        copy: profile.email,
        copiedLabel: 'Email copiado',
        ariaLabel: `Copiar el email ${profile.email}`,
        track: { evento: 'copiar_email', ubicacion: 'menu' },
      },
      ...profile.social.map((link) => ({
        label: link.label,
        href: link.url,
        ariaLabel: `${link.label} (se abre en una pestaña nueva)`,
        external: true,
        track: { evento: 'abrir_red_social', red: link.id, ubicacion: 'menu' },
      })),
    ],
  },
]

export default function Navbar() {
  const activeId = useActiveSection(navIds)

  return (
    <CardNav
      logo={
        <span className="brand-mark" aria-hidden="true">
          SV<span className="brand-dot">.</span>
        </span>
      }
      logoLabel={`${profile.name}, ir al inicio`}
      items={menuItems}
      cta={{ label: 'Contacto', href: '#contacto' }}
      activeHref={`#${activeId}`}
    />
  )
}
