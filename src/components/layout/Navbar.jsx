import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, navIds } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(navIds)

  // El navbar se «compacta» visualmente al hacer scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setExpanded(false)

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-portfolio ${
        scrolled || expanded ? 'scrolled' : ''
      }`}
      aria-label="Navegación principal"
    >
      <div className="container">
        <a
          className="navbar-brand py-2"
          href="#inicio"
          onClick={closeMenu}
          aria-label={`${profile.name}, ir al inicio`}
        >
          <span className="brand-mark" aria-hidden="true">
            SV<span className="brand-dot">.</span>
          </span>
          <span className="d-none d-sm-inline">{profile.shortName}</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={expanded}
          aria-controls="menu-principal"
          aria-label={expanded ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>

        <div
          className={`navbar-collapse collapse ${expanded ? 'show' : ''}`}
          id="menu-principal"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <li className="nav-item" key={item.id}>
                  <a
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
