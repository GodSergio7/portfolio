/*
 * CardNav — basado en el componente «Card Nav» de React Bits
 * (https://reactbits.dev), adaptado para este portfolio.
 *
 * Copyright (c) 2026 David Haz
 * Licencia: MIT + Commons Clause License Condition v1.0
 * (https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md).
 *
 * Cambios respecto al original: logo como nodo React en lugar de imagen,
 * botón de llamada a la acción configurable (enlace con Specular Button),
 * icono de Lucide, enlaces que copian un texto (`copy`, para el email),
 * botón real (<button>) para abrir/cerrar, cierre con Escape y al pulsar
 * un enlace, enlace activo marcado y respeto a `prefers-reduced-motion`.
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import SpecularButton from '../reactbits/SpecularButton'
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard'
import './CardNav.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const CardNav = ({
  logo,
  logoHref = '#inicio',
  logoLabel = 'Inicio',
  items,
  cta,
  activeHref,
  className = '',
  ease = 'power3.out',
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef(null)
  const cardsRef = useRef([])
  const tlRef = useRef(null)

  // Enlaces de tipo «copiar» (email): qué texto se acaba de copiar
  const [copied, copy] = useCopyToClipboard()
  const [lastCopied, setLastCopied] = useState(null)
  const copiedText = copied ? lastCopied : null
  const copyText = (text) => {
    setLastCopied(text)
    copy(text)
  }

  const calculateHeight = () => {
    const navEl = navRef.current
    if (!navEl) return 260

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content')
      if (contentEl) {
        const wasVisible = contentEl.style.visibility
        const wasPointerEvents = contentEl.style.pointerEvents
        const wasPosition = contentEl.style.position
        const wasHeight = contentEl.style.height

        contentEl.style.visibility = 'visible'
        contentEl.style.pointerEvents = 'auto'
        contentEl.style.position = 'static'
        contentEl.style.height = 'auto'

        contentEl.offsetHeight

        const topBar = 60
        const padding = 16
        const contentHeight = contentEl.scrollHeight

        contentEl.style.visibility = wasVisible
        contentEl.style.pointerEvents = wasPointerEvents
        contentEl.style.position = wasPosition
        contentEl.style.height = wasHeight

        return topBar + contentHeight + padding
      }
    }
    return 260
  }

  const createTimeline = () => {
    const navEl = navRef.current
    if (!navEl) return null

    // Sin movimiento si el usuario lo ha pedido en su sistema
    const duration = prefersReducedMotion() ? 0 : 0.4

    gsap.set(navEl, { height: 60, overflow: 'hidden' })
    gsap.set(cardsRef.current, { y: prefersReducedMotion() ? 0 : 50, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    tl.to(navEl, {
      height: calculateHeight,
      duration,
      ease,
    })

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration, ease, stagger: duration ? 0.08 : 0 },
      duration ? '-=0.1' : '>',
    )

    return tl
  }

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl

    return () => {
      tl?.kill()
      tlRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return

      if (isExpanded) {
        const newHeight = calculateHeight()
        gsap.set(navRef.current, { height: newHeight })

        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          newTl.progress(1)
          tlRef.current = newTl
        }
      } else {
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          tlRef.current = newTl
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  const openMenu = () => {
    const tl = tlRef.current
    if (!tl) return
    setIsHamburgerOpen(true)
    setIsExpanded(true)
    tl.play(0)
  }

  // Cierre propio (no se invierte la apertura): las tarjetas se ocultan
  // rápido y la barra se recoge con un rebote elástico.
  const closeMenu = () => {
    const tl = tlRef.current
    if (!tl || !isExpanded) return
    setIsHamburgerOpen(false)

    const reduce = prefersReducedMotion()
    gsap
      .timeline({
        onComplete: () => {
          tl.pause(0) // deja la apertura lista para la próxima vez
          setIsExpanded(false)
        },
      })
      .to(cardsRef.current, {
        y: reduce ? 0 : 20,
        opacity: 0,
        duration: reduce ? 0 : 0.15,
        ease: 'power2.in',
      })
      .to(
        navRef.current,
        { height: 60, duration: reduce ? 0 : 0.45, ease: 'elastic.out(1,0.8)' },
        reduce ? '>' : '-=0.05',
      )
  }

  const toggleMenu = () => (isExpanded ? closeMenu() : openMenu())

  // Escape cierra el menú
  useEffect(() => {
    if (!isExpanded) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el
  }

  return (
    <div className={`card-nav-container ${className}`}>
      {/* Mismo ancho que el contenido de la página (container de Bootstrap) */}
      <div className="container">
        <nav
          ref={navRef}
          className={`card-nav ${isExpanded ? 'open' : ''}`}
          aria-label="Navegación principal"
        >
          <div className="card-nav-top">
            <button
              type="button"
              className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={isExpanded ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isExpanded}
              aria-controls="card-nav-content"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>

            <a
              className="logo-container"
              href={logoHref}
              aria-label={logoLabel}
              onClick={closeMenu}
            >
              {logo}
            </a>

            {cta ? (
              <SpecularButton
                href={cta.href}
                onClick={closeMenu}
                className="card-nav-cta-button"
                size="sm"
                radius={8}
                tintOpacity={0}
                textColor="#eef1f5"
                lineColor="#ffffff"
                baseColor="#eef1f5"
                proximity={180}
              >
                {cta.label}
              </SpecularButton>
            ) : null}
          </div>

          <div
            className="card-nav-content"
            id="card-nav-content"
            aria-hidden={!isExpanded}
          >
            {(items || []).slice(0, 3).map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="nav-card"
                ref={setCardRef(idx)}
              >
                <div className="nav-card-label">{item.label}</div>
                <div className="nav-card-links">
                  {item.links?.map((lnk, i) => {
                    // Enlace que copia un texto (p. ej. el email) en vez de navegar.
                    // No cierra el menú, para que se vea la confirmación.
                    if (lnk.copy) {
                      const isCopied = copiedText === lnk.copy
                      return (
                        <button
                          key={`${lnk.label}-${i}`}
                          type="button"
                          className={`nav-card-link nav-card-link--button ${isCopied ? 'is-active' : ''}`}
                          aria-label={lnk.ariaLabel}
                          onClick={() => copyText(lnk.copy)}
                        >
                          {isCopied ? (
                            <Check className="nav-card-link-icon" size={16} aria-hidden="true" />
                          ) : (
                            <Copy className="nav-card-link-icon" size={16} aria-hidden="true" />
                          )}
                          {isCopied ? lnk.copiedLabel || 'Copiado' : lnk.label}
                          <span className="visually-hidden" aria-live="polite">
                            {isCopied ? `${lnk.copiedLabel || 'Copiado'} al portapapeles` : ''}
                          </span>
                        </button>
                      )
                    }

                    const isActive = activeHref && lnk.href === activeHref
                    return (
                      <a
                        key={`${lnk.label}-${i}`}
                        className={`nav-card-link ${isActive ? 'is-active' : ''}`}
                        href={lnk.href}
                        aria-label={lnk.ariaLabel}
                        aria-current={isActive ? 'true' : undefined}
                        target={lnk.external ? '_blank' : undefined}
                        rel={lnk.external ? 'noopener noreferrer' : undefined}
                        onClick={closeMenu}
                      >
                        <ArrowUpRight
                          className="nav-card-link-icon"
                          size={16}
                          aria-hidden="true"
                        />
                        {lnk.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default CardNav
