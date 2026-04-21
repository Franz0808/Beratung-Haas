'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from './Icons'

interface Step {
  title: string
  desc: string
  tag?: string
  whoText?: string
  forWhom?: string[]
  format?: string[]
}

interface Props {
  title: string
  label: string
  img: string
  steps: Step[]
}

export default function StepNavigator({ title, label, img, steps }: Props) {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <main style={{ paddingTop: 72 }}>
      {/* Header */}
      <section className="section-sm" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <Link
            href="/leistungen"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(27,61,82,0.45)', marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            ← Alle Angebote
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 3, height: 32, background: 'var(--accent)', flexShrink: 0 }} />
            <div className="label">{label}</div>
          </div>
          <h1 className="title-section">{title}</h1>
        </div>
      </section>

      {/* Intro split */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }} className="two-col">
            <div style={{ height: 440, overflow: 'hidden', position: 'relative' }}>
              <Image src={img} alt={title} fill style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20 }}>An wen richtet sich das?</h2>
              <p className="body-text" style={{ marginBottom: 20 }}>{steps[0].whoText}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {(steps[0].forWhom || []).map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 3, height: 14, background: 'var(--accent)', flexShrink: 0, marginTop: 4, display: 'inline-block' }} />
                    <span className="body-text" style={{ fontSize: 15 }}>{p}</span>
                  </div>
                ))}
              </div>
              <Link href="/kontakt" className="btn-primary">Erstgespräch anfragen <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Step Navigator */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <div style={{ width: 3, height: 28, background: 'var(--accent)', flexShrink: 0 }} />
                <div className="label">Der Ablauf</div>
              </div>
              <h2 className="title-section">So läuft eine Beratung ab.</h2>
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
                  onClick={() => setActive(i)}
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
                    transition: 'all 0.2s',
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

            <div style={{ background: 'var(--navy)', padding: '44px 48px', minHeight: 280 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                Phase {String(active + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', marginBottom: 20 }}>
                {step.title}
              </h3>
              <p style={{ fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', marginBottom: 24 }}>
                {step.desc}
              </p>
              {step.tag && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 3, height: 12, background: 'var(--accent)', display: 'inline-block' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent)' }}>{step.tag}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="two-col">
            <div style={{ padding: '0 64px 0 0', borderRight: '1px solid rgba(27,61,82,0.12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 3, height: 24, background: 'var(--accent)', flexShrink: 0 }} />
                <div className="label">Format & Setting</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {(steps[0].format || []).map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: 16, borderBottom: i < (steps[0].format?.length ?? 0) - 1 ? '1px solid rgba(27,61,82,0.08)' : 'none' }}>
                    <span style={{ width: 3, height: 14, background: 'rgba(27,61,82,0.25)', flexShrink: 0, marginTop: 4, display: 'inline-block' }} />
                    <span className="body-text" style={{ fontSize: 15 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '0 0 0 64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 3, height: 24, background: 'var(--accent)', flexShrink: 0 }} />
                <div className="label">Nächster Schritt</div>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>Bereit für den ersten Schritt?</h3>
              <p className="body-text" style={{ marginBottom: 28 }}>Das Erstgespräch dauert ca. 30 Minuten, ist kostenlos und unverbindlich. Wir schauen gemeinsam, ob und wie ich dich unterstützen kann.</p>
              <Link href="/kontakt" className="btn-primary">Erstgespräch anfragen <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
