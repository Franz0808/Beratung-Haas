'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

export interface ProcessStep {
  title: string
  desc: string
  tag?: string
}

interface ProcessNavigatorProps {
  steps: ProcessStep[]
  label?: string
  title?: string
}

type Phase = 'idle' | 'exiting' | 'pre-enter' | 'entering'

export default function ProcessNavigator({
  steps,
  label = 'Der Ablauf',
  title = 'So läuft eine Beratung ab.',
}: ProcessNavigatorProps) {
  const [active, setActive] = useState(0)
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number>(0)

  const step = steps[displayedIndex]

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleClick = useCallback((i: number) => {
    if (i === active) return

    // Cancel any in-flight animation
    if (timerRef.current) clearTimeout(timerRef.current)
    cancelAnimationFrame(rafRef.current)

    const dir = i > active ? 'forward' : 'backward'
    setDirection(dir)
    setActive(i)

    if (phase === 'idle') {
      // Normal flow: exit → swap → enter
      setPhase('exiting')
    } else {
      // Mid-animation: cancel and restart from pre-enter with new content
      setDisplayedIndex(i)
      setPhase('pre-enter')
    }
  }, [active, phase])

  // Drive the animation phases
  useEffect(() => {
    if (phase === 'exiting') {
      // Wait for exit animation to finish, then swap content
      timerRef.current = setTimeout(() => {
        setDisplayedIndex(active)
        setPhase('pre-enter')
      }, 320)
      return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    }

    if (phase === 'pre-enter') {
      // Position the new content off-screen (no transition), then animate in
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setPhase('entering')
        })
      })
      return () => cancelAnimationFrame(rafRef.current)
    }

    if (phase === 'entering') {
      timerRef.current = setTimeout(() => setPhase('idle'), 450)
      return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    }
  }, [phase, active])

  const getContentStyle = (): React.CSSProperties => {
    const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'
    const dur = '0.38s'
    const trans = `opacity ${dur} ${ease}, transform ${dur} ${ease}`

    switch (phase) {
      case 'idle':
        return { opacity: 1, transform: 'translateY(0)', transition: trans }
      case 'exiting':
        return {
          opacity: 0,
          transform: direction === 'forward' ? 'translateY(-28px)' : 'translateY(28px)',
          transition: trans,
        }
      case 'pre-enter':
        // No transition — snap to entry position off-screen
        return {
          opacity: 0,
          transform: direction === 'forward' ? 'translateY(36px)' : 'translateY(-36px)',
          transition: 'none',
        }
      case 'entering':
        return { opacity: 1, transform: 'translateY(0)', transition: trans }
    }
  }

  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            {label && (
              <div style={{ marginBottom: 12 }}>
                <div className="label" style={{ color: 'var(--navy)' }}>{label}</div>
              </div>
            )}
            <h2 className="title-section">{title}</h2>
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(27,61,82,0.4)' }}>
            {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 48, alignItems: 'start' }} className="two-col">
          <div>
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => handleClick(i)}
                style={{
                  width: '100%',
                  background: active === i ? 'rgba(27,61,82,0.04)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 20px',
                  borderLeft: active === i ? '3px solid var(--accent)' : '3px solid transparent',
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                  boxShadow: active === i ? '0 4px 12px rgba(27, 61, 82, 0.15)' : 'none',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', color: active === i ? 'var(--accent)' : 'rgba(27,61,82,0.35)', flexShrink: 0, minWidth: 24 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: active === i ? 'var(--navy)' : 'rgba(27,61,82,0.45)' }}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          <div style={{ background: 'var(--navy)', padding: '44px 48px', position: 'relative', overflow: 'hidden', display: 'grid' }}>
            {steps.map((s, i) => {
              const isDisplayed = i === displayedIndex
              return (
                <div
                  key={i}
                  style={{
                    gridArea: '1 / 1',
                    ...(isDisplayed ? getContentStyle() : { visibility: 'hidden' }),
                  }}
                >
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                    Phase {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', marginBottom: 20 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', marginBottom: 24 }}>
                    {s.desc}
                  </p>
                  {s.tag && (
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent)' }}>{s.tag}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
