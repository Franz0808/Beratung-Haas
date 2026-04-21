import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'

export const metadata = {
  title: 'Leistungen — Paarberatung Haas',
}

export default function LeistungenPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <section className="section-sm" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ width: 3, height: 32, background: 'var(--accent)', flexShrink: 0 }} />
            <div className="label">Angebote</div>
          </div>
          <h1 className="title-section" style={{ maxWidth: 640 }}>Zwei Formate.<br />Ein Ziel: Klarheit.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="two-col">
            {/* Paarberatung card */}
            <Link
              href="/leistungen/paarberatung"
              style={{ borderTop: '4px solid var(--navy)', borderRight: '1px solid rgba(27,61,82,0.15)', padding: '56px 48px', display: 'block', textDecoration: 'none' }}
            >
              <div className="label" style={{ marginBottom: 16 }}>Für Paare</div>
              <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20, color: 'var(--navy)' }}>Paarberatung</h2>
              <p className="body-text" style={{ fontSize: 15, marginBottom: 12 }}>Wenn ihr feststeckt, euch im Kreis dreht oder euch emotional verloren habt.</p>
              <div style={{ margin: '28px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Kommunikationsmuster erkennen', 'Eskalationszyklen durchbrechen', 'Emotionale Distanz überbrücken'].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ width: 3, height: 14, background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ fontSize: 14, fontWeight: 300, color: 'var(--navy)' }}>{p}</span>
                  </div>
                ))}
              </div>
              <span className="link-arrow">Zum Ablauf <ArrowRight /></span>
            </Link>

            {/* Lebensberatung card */}
            <Link
              href="/leistungen/lebensberatung"
              style={{ borderTop: '4px solid var(--navy)', padding: '56px 48px', display: 'block', textDecoration: 'none' }}
            >
              <div className="label" style={{ marginBottom: 16 }}>Für Einzelpersonen</div>
              <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20, color: 'var(--navy)' }}>Lebensberatung</h2>
              <p className="body-text" style={{ fontSize: 15, marginBottom: 12 }}>Wenn du in einer Krise steckst, vor einer Entscheidung stehst oder deine eigenen Muster verstehen willst.</p>
              <div style={{ margin: '28px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Orientierung in Lebenskrisen', 'Entscheidungen strukturiert treffen', 'Eigene Muster sichtbar machen'].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ width: 3, height: 14, background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ fontSize: 14, fontWeight: 300, color: 'var(--navy)' }}>{p}</span>
                  </div>
                ))}
              </div>
              <span className="link-arrow">Zum Ablauf <ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', marginBottom: 28 }}>
            Mein Angebot ist Coaching und Beratung, keine Psychotherapie. Es ersetzt keine medizinische oder therapeutische Behandlung.
          </p>
          <Link href="/kontakt" className="btn-outline-white">Erstgespräch anfragen <ArrowRight /></Link>
        </div>
      </section>
    </main>
  )
}
