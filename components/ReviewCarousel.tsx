'use client'

import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from '@/components/Icons'
import Link from 'next/link'

const reviews = [
  {
    name: 'Mr Edinson',
    initials: 'ME',
    stars: 5,
    text: 'Das Coaching von Frau Haas war auf höchstem Niveau. Jede Sitzung war professionell vorbereitet und voller praktisch anwendbarer Inputs – sehr wertvoll in herausfordernden Lebensphasen. Besonders beeindruckend ist die Expertise im Bereich zwischenmenschlicher Beziehungen und Konfliktlösung: klar, verständlich und direkt umsetzbar.',
  },
  {
    name: 'Christina A.',
    initials: 'CA',
    stars: 5,
    text: 'Mein größtes Problem war Overthinking und mir selbst im Weg stehen. Kim hat mir Zeit für eine Session „Gedanken aufdröseln" eingeräumt. Das Gespräch hat sicher auch seinen Teil dazu beigetragen, dass ich die Prüfung bestanden habe.',
  },
  {
    name: 'Jany Trnka',
    initials: 'JT',
    stars: 5,
    text: 'Sie kombiniert das fundierte Wissen eines Master-Abschlusses in Mental Health mit der gelebten Erfahrung einer erfolgreichen Selbstständigkeit – und das auf eine sehr freundliche und aufgeschlossene Art.',
  },
  {
    name: 'Daniel Blitzner',
    initials: 'DB',
    stars: 5,
    text: 'Kim hat bereits 2 richtig gute Vorträge bei uns in der Firma gehalten – die Leute waren begeistert. Was sie von vielen anderen Coaches unterscheidet, ist ihr wissenschaftlich fundierter Ansatz. Absolut empfehlenswert!',
  },
  {
    name: 'David Rockstroh',
    initials: 'DR',
    stars: 5,
    text: 'Wer sein Leben auf ein neues Level heben will, arbeitet mit Kim zusammen! Und damit meine ich nicht nur Sport, sondern generell!',
  },
  {
    name: 'Monika Rueß',
    initials: 'MR',
    stars: 4,
    text: 'Ich war vor Kurzem bei einem Vortrag von Kim zum Thema Happy Mindset. Eine gute Mischung aus Theorie mit wissenschaftlich basierten Fakten, praktischen Tipps und Raum für Diskussion. Professionell, authentisch und humorvoll präsentiert!',
  },
  {
    name: 'Dave Rocks',
    initials: 'DR',
    stars: 5,
    text: 'Das Training mit Kim macht Spaß und bringt mich voran. Zum Thema Motivation, Mindset generell, Zielerreichung und Lebensglück hat sie immer den passenden Tipp! Sehr zu empfehlen!',
  },
  {
    name: 'Carola Schindler',
    initials: 'CS',
    stars: 5,
    text: 'Kim schafft es einfach immer wieder, mich zu motivieren, meine Grenzen anzugehen und das mit Freude. Sie hat immer ein offenes Ohr und konstruktive Ideen für gefühlt jedes Problem. Ich kann ihre Art und Arbeit wärmstens weiterempfehlen!',
  },
]

const GOOGLE_PROFILE_URL = 'https://www.google.com/maps/place/Kim+Haas/@49.0123995,8.360371,17z/data=!3m1!4b1!4m6!3m5!1s0x479707a728150867:0xfaae792437c3fd8e!8m2!3d49.012396!4d8.3629459!16s%2Fg%2F11r9grj73c?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D'

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = reviews.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [paused, next])

  const getCardStyle = (index: number): React.CSSProperties => {
    let pos = index - current
    if (pos < -(total / 2)) pos += total
    if (pos > total / 2) pos -= total

    const isActive = pos === 0
    const isVisible = Math.abs(pos) === 1

    return {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      width: '100%',
      maxWidth: 672,
      transform: `translate(-50%, -50%) translateX(${pos * 65}%) scale(${isActive ? 1 : 0.85}) rotateY(${pos * 15}deg)`,
      opacity: isActive ? 1 : isVisible ? 0.6 : 0,
      zIndex: isActive ? 20 : isVisible ? 10 : 0,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: isActive ? 'auto' : isVisible ? 'auto' : 'none',
      cursor: isActive ? 'default' : 'pointer',
      background: '#fff',
      padding: '32px',
      border: '1px solid rgba(27,61,82,0.05)',
      boxShadow: isActive ? '0 35px 70px -15px rgba(0,0,0,0.15)' : '0 20px 40px -10px rgba(0,0,0,0.1)',
    }
  }

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Carousel viewport */}
      <div style={{ perspective: '1000px', position: 'relative', width: '100%', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
          {reviews.map((r, i) => {
            const isActive = i === current
            let pos = i - current
            if (pos < -(total / 2)) pos += total
            if (pos > total / 2) pos -= total

            return (
              <div
                key={i}
                style={getCardStyle(i)}
                onClick={() => !isActive && setCurrent(i)}
              >
                <div style={{
                  transition: 'opacity 0.4s ease',
                  opacity: isActive ? 1 : 0.4,
                }}>
                  {/* Quote icon */}
                  <div style={{ color: 'var(--accent)', marginBottom: 24 }}>
                    <Quote />
                  </div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 3, color: 'var(--accent)', marginBottom: 20 }}>
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} />
                    ))}
                  </div>
                  {/* Quote text */}
                  <p style={{
                    fontSize: 18,
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'var(--navy)',
                    margin: 0,
                    fontStyle: 'italic',
                    marginBottom: 32,
                  }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  {/* Author row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      {/* Initials avatar */}
                      <div style={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        border: '2px solid var(--accent)',
                        background: 'rgba(27,61,82,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'var(--navy)',
                        flexShrink: 0,
                      }}>
                        {r.initials}
                      </div>
                      <span style={{
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--navy)',
                      }}>
                        {r.name}
                      </span>
                    </div>
                    {/* Google label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <GoogleIcon />
                      <span style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: 'rgba(27,61,82,0.4)',
                        letterSpacing: '0.05em',
                      }}>
                        Google
                      </span>
                    </div>
                  </div>
                </div>
                {/* Frosted overlay for inactive cards */}
                {!isActive && Math.abs(pos) === 1 && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(1px)',
                    zIndex: 30,
                  }} />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 32 }}>
        <button
          onClick={prev}
          aria-label="Vorherige Bewertung"
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(27,61,82,0.2)',
            borderRadius: '50%',
            background: 'transparent',
            color: 'var(--navy)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)' }}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Nächste Bewertung"
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(27,61,82,0.2)',
            borderRadius: '50%',
            background: 'transparent',
            color: 'var(--navy)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)' }}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Google profile link */}
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            color: 'var(--navy)',
            borderBottom: '2px solid var(--accent)',
            paddingBottom: 2,
            textDecoration: 'none',
          }}
        >
          Alle Bewertungen auf Google ansehen
        </Link>
      </div>
    </div>
  )
}
