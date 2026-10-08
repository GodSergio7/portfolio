/*
 * Carousel — basado en «Carousel» de React Bits (https://reactbits.dev).
 * Copyright (c) 2026 David Haz
 * Licencia: MIT + Commons Clause License Condition v1.0
 * (https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md).
 *
 * Cambios: muestra cualquier contenido (`renderItem`) en lugar de los
 * ejemplos con iconos; el ancho se adapta al contenedor (ResizeObserver)
 * en vez de un `baseWidth` fijo; giro 3D más suave; sin bucle ni autoplay;
 * navegación con flechas del teclado, indicadores accesibles y respeto a
 * `prefers-reduced-motion` (sin giro ni muelle).
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import './Carousel.css'

const DRAG_BUFFER = 0
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 }
const ROTATE = 35 // grados de giro de las tarjetas vecinas (original: 90)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function CarouselItem({ index, itemWidth, trackItemOffset, x, transition, reduce, isActive, label, children }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset]
  const rotateY = useTransform(x, range, reduce ? [0, 0, 0] : [ROTATE, 0, -ROTATE], { clamp: false })

  return (
    <motion.div
      className="carousel-item"
      style={{ width: itemWidth, rotateY }}
      transition={transition}
      role="group"
      aria-roledescription="diapositiva"
      aria-label={label}
      aria-hidden={!isActive}
      // Las tarjetas que no están a la vista no reciben el foco del teclado
      inert={isActive ? undefined : true}
    >
      {children}
    </motion.div>
  )
}

export default function Carousel({ items, renderItem, getKey, getLabel, ariaLabel = 'Carrusel' }) {
  const containerRef = useRef(null)
  const [itemWidth, setItemWidth] = useState(300)
  const trackItemOffset = itemWidth + GAP

  const [position, setPosition] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const x = useMotionValue(0)
  const [reduce] = useState(prefersReducedMotion)

  // Ancho de cada tarjeta = ancho del contenedor
  useLayoutEffect(() => {
    const node = containerRef.current
    if (!node) return undefined
    const measure = () => setItemWidth(node.clientWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(node)
    return () => ro.disconnect()
  }, [])

  // Si cambia el ancho, recoloca la pista sin animación
  useEffect(() => {
    x.set(-position * trackItemOffset)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackItemOffset])

  const last = Math.max(items.length - 1, 0)
  const goTo = (index) => setPosition(Math.max(0, Math.min(index, last)))

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0
    if (direction !== 0) goTo(position + direction)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(position + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(position - 1)
    }
  }

  const transition = reduce ? { duration: 0 } : SPRING_OPTIONS

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      <div ref={containerRef} className="carousel-viewport">
        <motion.div
          className="carousel-track"
          drag={isAnimating ? false : 'x'}
          dragConstraints={{ left: -trackItemOffset * last, right: 0 }}
          style={{
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={transition}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {items.map((item, index) => (
            <CarouselItem
              key={getKey ? getKey(item) : index}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={transition}
              reduce={reduce}
              isActive={index === position}
              label={`${index + 1} de ${items.length}${getLabel ? `: ${getLabel(item)}` : ''}`}
            >
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </motion.div>
      </div>

      <div className="carousel-indicators" role="group" aria-label="Elegir proyecto">
        {items.map((item, index) => (
          <motion.button
            type="button"
            key={getKey ? getKey(item) : index}
            className={`carousel-indicator ${position === index ? 'active' : 'inactive'}`}
            aria-label={`Ir al proyecto ${index + 1}${getLabel ? `: ${getLabel(item)}` : ''}`}
            aria-current={position === index ? 'true' : undefined}
            animate={{ scale: position === index ? 1.25 : 1 }}
            onClick={() => goTo(index)}
            transition={{ duration: reduce ? 0 : 0.15 }}
          />
        ))}
      </div>
    </div>
  )
}
