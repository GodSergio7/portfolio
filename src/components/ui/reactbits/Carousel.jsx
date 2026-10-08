/*
 * Carousel — basado en «Carousel» de React Bits (https://reactbits.dev).
 * Copyright (c) 2026 David Haz
 * Licencia: MIT + Commons Clause License Condition v1.0
 * (https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md).
 *
 * Cambios: muestra cualquier contenido (`renderItem`) en lugar de los
 * ejemplos con iconos; el ancho se adapta al contenedor (ResizeObserver)
 * en vez de un `baseWidth` fijo; giro 3D más suave; sin autoplay; modo
 * bucle (`loop`) con copias ocultas a lectores de pantalla; navegación con
 * flechas del teclado, indicadores accesibles y respeto a
 * `prefers-reduced-motion` (sin giro ni muelle).
 */
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
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

function CarouselItem({ index, itemWidth, trackItemOffset, x, transition, reduce, isActive, isClone, label, children }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset]
  const rotateY = useTransform(x, range, reduce ? [0, 0, 0] : [ROTATE, 0, -ROTATE], { clamp: false })
  const hidden = isClone || !isActive

  return (
    <motion.div
      className="carousel-item"
      style={{ width: itemWidth, rotateY }}
      transition={transition}
      role={isClone ? undefined : 'group'}
      aria-roledescription={isClone ? undefined : 'diapositiva'}
      aria-label={isClone ? undefined : label}
      aria-hidden={hidden}
      // Las copias del bucle y las tarjetas que no están a la vista no
      // reciben el foco del teclado
      inert={hidden ? true : undefined}
    >
      {children}
    </motion.div>
  )
}

export default function Carousel({ items, renderItem, getKey, getLabel, ariaLabel = 'Carrusel', loop = false }) {
  const containerRef = useRef(null)
  const [itemWidth, setItemWidth] = useState(300)
  const trackItemOffset = itemWidth + GAP

  // En bucle se añade una copia del último al principio y del primero al
  // final; al llegar a una copia se salta sin animación al original.
  const canLoop = loop && items.length > 1
  const itemsForRender = useMemo(
    () => (canLoop ? [items[items.length - 1], ...items, items[0]] : items),
    [items, canLoop],
  )

  const [position, setPosition] = useState(canLoop ? 1 : 0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
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

  const lastIndex = Math.max(itemsForRender.length - 1, 0)
  const goTo = (index) => setPosition(canLoop ? index : Math.max(0, Math.min(index, lastIndex)))

  // Índice del proyecto real que se ve (las copias cuentan como su original)
  const activeIndex = canLoop
    ? (position - 1 + items.length) % items.length
    : Math.min(position, items.length - 1)

  const handleAnimationComplete = () => {
    if (canLoop && (position === 0 || position === lastIndex)) {
      // Estamos sobre una copia: saltar al original sin animación
      const target = position === 0 ? items.length : 1
      setIsJumping(true)
      setPosition(target)
      x.set(-target * trackItemOffset)
      requestAnimationFrame(() => {
        setIsJumping(false)
        setIsAnimating(false)
      })
      return
    }
    setIsAnimating(false)
  }

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
    if (isAnimating) return
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(position + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(position - 1)
    }
  }

  const transition = reduce || isJumping ? { duration: 0 } : SPRING_OPTIONS

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
          dragConstraints={canLoop ? undefined : { left: -trackItemOffset * lastIndex, right: 0 }}
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
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => {
            const isClone = canLoop && (index === 0 || index === lastIndex)
            const realIndex = canLoop ? (index - 1 + items.length) % items.length : index
            const key = `${getKey ? getKey(item) : realIndex}${isClone ? `-copia-${index}` : ''}`
            return (
              <CarouselItem
                key={key}
                index={index}
                itemWidth={itemWidth}
                trackItemOffset={trackItemOffset}
                x={x}
                transition={transition}
                reduce={reduce}
                isActive={index === position}
                isClone={isClone}
                label={`${realIndex + 1} de ${items.length}${getLabel ? `: ${getLabel(item)}` : ''}`}
              >
                {renderItem(item, realIndex)}
              </CarouselItem>
            )
          })}
        </motion.div>
      </div>

      <div className="carousel-indicators" role="group" aria-label="Elegir proyecto">
        {items.map((item, index) => (
          <motion.button
            type="button"
            key={getKey ? getKey(item) : index}
            className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
            aria-label={`Ir al proyecto ${index + 1}${getLabel ? `: ${getLabel(item)}` : ''}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            animate={{ scale: activeIndex === index ? 1.25 : 1 }}
            onClick={() => goTo(canLoop ? index + 1 : index)}
            transition={{ duration: reduce ? 0 : 0.15 }}
          />
        ))}
      </div>
    </div>
  )
}
