import { useEffect, useState } from 'react'
import { Code2, Menu, X } from 'lucide-react'
import { navItems, navIds } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import SocialLinks from '../ui/SocialLinks'

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
        <a className="navbar-brand py-2" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark">
            <Code2 size={17} strokeWidth={2.4} aria-hidden="true" />
          </span>
          <span className="d-none d-sm-inline">{profile.shortName}</span>
          <span className="d-sm-none">SV</span>
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
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a className="btn btn-mint btn-sm w-100 w-lg-auto" href="#contacto" onClick={closeMenu}>
                Hablemos
              </a>
            </li>
            {/*
              Redes sociales en el navbar: solo se muestran en
              pantallas anchas (≥1200 px), donde hay espacio real
              sin romper la estructura del menú.
            */}
            <li className="nav-item d-none d-xl-flex align-items-center ms-xl-3 mt-3 mt-xl-0">
              <SocialLinks links={profile.social} size={17} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
