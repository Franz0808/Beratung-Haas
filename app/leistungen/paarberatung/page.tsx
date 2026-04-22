'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'
import ProcessNavigator, { ProcessStep } from '@/components/ProcessNavigator'

const painPoints = [
  'Kleine Anlässe kippen schnell in Streit',
  'Ihr führt dieselben Gespräche immer wieder – ohne echte Veränderung',
  'Du fühlst dich nicht wirklich gehört oder verstanden',
  'Nähe, Leichtigkeit und Verbundenheit sind im Alltag verloren gegangen',
  'Du bist unsicher, ob du bleiben oder gehen sollst',
  'Du analysierst alles – und kommst trotzdem nicht weiter',
]

const processSteps: ProcessStep[] = [
  {
    title: 'Erstgespräch',
    desc: 'Wir lernen uns kennen. Ich höre zu, stelle Fragen und verschaffe mir ein Bild eurer Situation. Ohne Bewertung, ohne Druck. Es geht darum, zu verstehen, was bei euch gerade passiert.',
    tag: 'Kostenlos & unverbindlich',
  },
  {
    title: 'Analyse',
    desc: 'Gemeinsam machen wir sichtbar, was unter der Oberfläche passiert. Welche Dynamiken wiederholen sich? Was löst was aus? Hier entsteht oft das erste echte Verstehen.',
    tag: 'Wissenschaftlich fundiert',
  },
  {
    title: 'Arbeit',
    desc: 'Jetzt arbeiten wir konkret. Mit gezielten Interventionen, strukturierten Gesprächen und praktischen Übungen verändern wir die Muster, die euch bisher blockiert haben.',
    tag: 'Praxisorientiert',
  },
  {
    title: 'Integration',
    desc: 'Was in den Sitzungen entsteht, muss im Alltag verankert werden. Wir entwickeln gemeinsam Wege, wie ihr das Erarbeitete in eurem echten Leben umsetzen könnt.',
    tag: 'Nachhaltig',
  },
  {
    title: 'Abschluss',
    desc: 'Wir ziehen Bilanz. Was hat sich verändert? Was nehmt ihr mit? Und was sind eure nächsten Schritte – ob gemeinsam oder getrennt?',
    tag: 'Klar & zukunftsorientiert',
  },
]

const whoText = 'Paarberatung richtet sich an Paare, die in wiederkehrende Konflikte geraten, das Gefühl der Verbindung verloren haben oder vor einer wichtigen gemeinsamen Entscheidung stehen.'

const format = [
  'Online via Video – deutschlandweit',
  'Vor Ort in Garmisch-Partenkirchen',
  'Einzelsitzungen (60–90 Min.) oder Begleitpaket',
  'Auch als Intensiv-Session buchbar',
]

export default function PaarberatungPage() {
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
            <div className="label">Für Paare</div>
          </div>
          <h1 className="title-section">Paarberatung</h1>
        </div>
      </section>

      {/* ── INTRO SPLIT ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }} className="two-col">
            <div className="img-shadow" style={{ height: 440, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <Image
                  src="/uploads/whatsapp-10.19.16.jpeg"
                  alt="Paarberatung"
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
          {/* Headline */}
          <h2 className="title-section" style={{ marginBottom: 56 }}>Kommt dir das<br />bekannt vor?</h2>

          {/* 6-point list — 2 columns */}
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
                <span className="body-text" style={{ lineHeight: 1.65 }}>{p}</span>
              </div>
            ))}
          </div>

          {/* Lead texts + CTA */}
          <div style={{ borderTop: '1px solid rgba(27,61,82,0.1)', paddingTop: 40 }}>
            <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Insight block — anchored with accent bar */}
              <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flex: '1 1 420px' }}>
                <div>
                  <p style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.65, color: 'var(--navy)', marginBottom: 10 }}>
                    Es geht nicht nur um den Streit an sich. Oft bricht an kleinen Auslösern das auf, was sich schon lange angestaut hat. Was dahinter wirkt, lässt sich von innen oft nur schwer erkennen.
                  </p>
                  <p style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.7, color: 'var(--navy)', fontStyle: 'italic' }}>
                    So wie es gerade ist, muss es nicht bleiben.
                  </p>
                </div>
              </div>

              {/* CTA — right side */}
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

      {/* ── PASST DAS ZU EUCH? ── */}
      <section className="section" style={{ background: 'var(--warm)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 80px' }}>
            <h2 className="title-section">Passt diese Beratung zu uns?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }} className="two-col">

            {/* Geeignet */}
            <div style={{ background: '#fff', padding: '56px 48px 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
                <div style={{ width: 36, height: 36, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--navy)' }}>Geeignet für euch</h3>
              </div>
              {[
                'euch im Kreis dreht und dieselben Konflikte immer wiederkehren',
                'das Gefühl habt, einander nicht mehr wirklich zu erreichen',
                'Klarheit wollt – gemeinsam oder über eure Beziehung',
                'bereit seid, ehrlich hinzuschauen – beide',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '22px 0',
                  borderBottom: i < 3 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent)', minWidth: 24, paddingTop: 3, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontWeight: 300, fontSize: 'clamp(15px, 1.1vw, 18px)', lineHeight: 1.7, color: 'var(--navy)' }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Nicht geeignet */}
            <div style={{ background: '#e8eef2', padding: '56px 48px 48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48, position: 'relative' }}>
                <div style={{ width: 36, height: 36, border: '1px solid rgba(27,61,82,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--navy)' }}>Nicht geeignet wenn</h3>
              </div>
              {[
                'einer von euch in einer akuten psychischen Krise ist (hier braucht es Therapie)',
                'ihr Sexualberatung sucht',
                'ihr schnelle Lösungen wollt, ohne euch wirklich auseinanderzusetzen',
                'einer von euch „recht haben" will statt etwas zu verändern',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '22px 0',
                  borderBottom: i < 3 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                  position: 'relative',
                }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent)', minWidth: 24, paddingTop: 3, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontWeight: 300, fontSize: 'clamp(15px, 1.1vw, 18px)', lineHeight: 1.7, color: 'var(--navy)' }}>{t}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FORMAT ── */}
      <section className="section" style={{ background: '#fff', paddingTop: 120, paddingBottom: 120 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }} className="two-col">
            {/* Format list */}
            <div>
              <div style={{ marginBottom: 32 }}>
                <div className="label" style={{ color: 'var(--navy)' }}>Format & Setting</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {format?.map((f, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center',
                    padding: '20px 0',
                    borderTop: '1px solid rgba(27,61,82,0.1)',
                    borderBottom: i === (format?.length ?? 0) - 1 ? '1px solid rgba(27,61,82,0.1)' : 'none',
                  }}>
                    <span style={{ width: 8, height: 8, background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                    <span className="body-text">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
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
