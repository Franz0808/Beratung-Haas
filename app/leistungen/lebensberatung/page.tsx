'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'
import ProcessNavigator, { ProcessStep } from '@/components/ProcessNavigator'

const painPoints = [
  'Du weißt nicht mehr, wer du bist oder was du wirklich willst',
  'Dieselben Situationen wiederholen sich – in Beziehungen, im Job, im Leben',
  'Du analysierst viel, aber kommst innerlich nicht vom Fleck',
  'Du stehst vor einer Entscheidung und hast keine Klarheit',
  'Das Gefühl, dass etwas fehlt – aber du kannst es nicht benennen',
  'Du funktionierst nach außen, aber innen ist da ein Riss',
]

const processSteps: ProcessStep[] = [
  {
    title: 'Erstgespräch',
    desc: 'Wir lernen uns kennen. Ich höre zu und stelle Fragen, um zu verstehen, wo du gerade stehst und was dich bewegt. Kostenlos, offen und ohne Verpflichtung.',
    tag: 'Kostenlos & unverbindlich',
  },
  {
    title: 'Orientierung',
    desc: 'Wir benennen, was wirklich auf dem Spiel steht. Was ist das eigentliche Thema? Oft ist das nicht das, was zuerst genannt wird. Dieser Schritt schafft Klarheit über den Kern.',
    tag: 'Fokussiert',
  },
  {
    title: 'Muster',
    desc: 'Wir schauen auf Muster: Wie reagierst du in bestimmten Situationen? Was löst das aus? Wo kommen diese Reaktionen her? Verstehen schafft Spielraum.',
    tag: 'Tiefgreifend',
  },
  {
    title: 'Ressourcen',
    desc: 'Wir aktivieren, was bereits in dir steckt. Eigene Stärken, vergessene Fähigkeiten, neue Perspektiven. Hier entsteht Handlungsfähigkeit.',
    tag: 'Stärkend',
  },
  {
    title: 'Umsetzung',
    desc: 'Du gehst mit einem klaren Plan heraus – und ich begleite dich dabei, wenn nötig. Was ist dein nächster konkreter Schritt?',
    tag: 'Klar & konkret',
  },
]

const whoText = 'Lebensberatung richtet sich an Menschen in persönlichen Orientierungsphasen: nach Trennungen, bei beruflichen Wendepunkten, Sinnfragen oder wenn das eigene Verhalten in Beziehungen immer wieder ähnliche Ergebnisse produziert.'

const format = [
  'Online via Video – deutschlandweit',
  'Vor Ort in Garmisch-Partenkirchen',
  'Einzelsitzungen ab 60 Minuten',
  'Prozessbegleitung über mehrere Sitzungen',
]

export default function LebensberatungPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      {/* ── HEADER ── */}
      <section className="section-sm" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <Link
            href="/leistungen"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(27,61,82,0.45)', marginBottom: 20, display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            ← Alle Angebote
          </Link>
          <div style={{ marginBottom: 16 }}>
            <div className="label" style={{ color: 'var(--accent)' }}>Für Einzelpersonen</div>
          </div>
          <h1 className="title-section">Lebensberatung</h1>
        </div>
      </section>

      {/* ── INTRO SPLIT ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }} className="two-col">
            <div className="img-shadow" style={{ height: 440, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <Image
                  src="/uploads/WhatsApp Image 2026-04-16 at 10.22.35.jpeg"
                  alt="Lebensberatung"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20 }}>An wen richtet sich das?</h2>
              <p className="body-text">{whoText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <h2 className="title-section" style={{ marginBottom: 56 }}>Kommt dir das<br />bekannt vor?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginBottom: 56 }}>
            {painPoints.map((p, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '24px 48px 24px 0',
                  borderTop: '1px solid rgba(27,61,82,0.1)',
                  paddingLeft: i % 2 === 1 ? 48 : 0,
                  paddingRight: i % 2 === 1 ? 0 : 48,
                  borderLeft: i % 2 === 1 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', color: 'var(--accent)', flexShrink: 0, paddingTop: 3 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="body-text" style={{ fontSize: 15, lineHeight: 1.65 }}>{p}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(27,61,82,0.1)', paddingTop: 40 }}>
            <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flex: '1 1 420px' }}>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.65, color: 'var(--navy)', marginBottom: 10 }}>
                    Oft ist das Problem nicht das, was an der Oberfläche sichtbar ist. Was wirklich zieht, liegt tiefer.
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.65, color: 'var(--navy)', marginBottom: 10 }}>
                    Von innen lässt sich das schwer erkennen – und noch schwerer alleine verändern.
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.7, color: 'var(--navy)', fontStyle: 'italic' }}>
                    Klarheit ist möglich. Und Veränderung beginnt mit dem ersten Schritt.
                  </p>
                </div>
              </div>

              <div style={{ flexShrink: 0 }}>
                <Link href="/kontakt" className="btn-primary">
                  Erstgespräch vereinbaren <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS NAVIGATOR ── */}
      <ProcessNavigator steps={processSteps} />

      {/* ── PASST DAS ZU DIR? ── */}
      <section className="section" style={{ background: '#fff', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 80px' }}>
            <div className="label" style={{ marginBottom: 16 }}>Passt das zu dir?</div>
            <h2 className="title-section">Diese Beratung ist sinnvoll, wenn du…</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }} className="two-col">

            {/* Geeignet */}
            <div style={{ background: 'var(--warm)', padding: '56px 48px 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
                <div style={{ width: 36, height: 36, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--navy)' }}>Geeignet für dich</h3>
              </div>
              {[
                'nicht mehr weiterkommst, obwohl du viel reflektierst',
                'immer wieder in ähnliche Situationen gerätst und weißt nicht warum',
                'Klarheit willst – über dich, dein Leben oder eine Entscheidung',
                'bereit bist, ehrlich hinzuschauen',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '22px 0',
                  borderBottom: i < 3 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent)', minWidth: 24, paddingTop: 3, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: 'var(--navy)' }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Nicht geeignet */}
            <div style={{ background: 'var(--navy)', padding: '56px 48px 48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: -40, right: -20, fontSize: 220, fontWeight: 700, lineHeight: 1, color: 'rgba(255,255,255,0.03)', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>—</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48, position: 'relative' }}>
                <div style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Nicht geeignet wenn</h3>
              </div>
              {[
                'du eine akute psychische Krise hast (hier braucht es Therapie)',
                'du Sexualberatung suchst',
                'du schnelle Lösungen ohne Auseinandersetzung suchst',
                'du jemanden suchst, der dir einfach sagt, was du tun sollst',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '22px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  position: 'relative',
                }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', minWidth: 24, paddingTop: 3, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>{t}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FORMAT ── */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }} className="two-col">
            <div>
              <div style={{ marginBottom: 24 }}>
                <div className="label" style={{ color: 'var(--navy)' }}>Format & Setting</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                {format?.map((f, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    padding: '16px 24px 16px 0',
                    borderTop: '1px solid rgba(27,61,82,0.1)',
                    borderBottom: i >= (format?.length ?? 0) - 2 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                    paddingLeft: i % 2 === 1 ? 24 : 0,
                    borderLeft: i % 2 === 1 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                  }}>
                    <span style={{ width: 10, height: 10, background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--navy)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
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
