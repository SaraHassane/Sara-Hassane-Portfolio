'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'

interface FadeInViewProps {
  children: ReactNode
  threshold?: number
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  triggerOnce?: boolean
}

const getInitialTransform = (direction: FadeInViewProps['direction']): CSSProperties => {
  switch (direction) {
    case 'up':
      return { transform: 'translateY(20px)' }
    case 'down':
      return { transform: 'translateY(-20px)' }
    case 'left':
      return { transform: 'translateX(20px)' }
    case 'right':
      return { transform: 'translateX(-20px)' }
    default:
      return {}
  }
}

const FadeInView = ({
  children,
  threshold = 0.2,
  delay = 0,
  duration = 700,
  direction = 'up',
  className = '', // ✅ You can pass pointer-events-none here now
  triggerOnce = true,
}: FadeInViewProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -20% 0px',
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [threshold, triggerOnce, mounted])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        pointerEvents: className?.includes('pointer-events-none') ? 'none' : undefined,
        opacity: hasAnimated ? 1 : 0,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        ...(hasAnimated
          ? { transform: 'translate(0, 0)' }
          : getInitialTransform(direction)),
      }}
    >
      {children}
    </div>
  )
}

export default FadeInView
