import Image from 'next/image'
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
          <h1 className="title-section" style={{ maxWidth: 640 }}>Beratung für Paare und Einzelpersonen</h1>
          <p className="body-text" style={{ maxWidth: 640, marginTop: 20 }}>Wenn du dich in einer belastenden Situation befindest, vor einer Entscheidung stehst oder ihr als Paar in festgefahrene Muster geraten seid, schafft Beratung einen Raum für Orientierung, Verständnis und neue Perspektiven.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="two-col">
            {/* Paarberatung card */}
            <Link
              href="/leistungen/paarberatung"
              style={{ borderRight: '1px solid rgba(27,61,82,0.15)', padding: '56px 48px', display: 'block', textDecoration: 'none' }}
            >
              <div className="label" style={{ marginBottom: 16 }}>Für Paare</div>
              <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20, color: 'var(--navy)' }}>Paarberatung</h2>
              <p className="body-text" style={{ marginBottom: 12 }}>Wenn ihr feststeckt, euch im Kreis dreht oder euch emotional verloren habt, schafft Paarberatung einen Raum, um festgefahrene Muster besser zu verstehen und wieder in Verbindung zu kommen.</p>
              <div style={{ margin: '28px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Kommunikationsmuster erkennen', 'Eskalationszyklen durchbrechen', 'Emotionale Distanz überbrücken'].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ width: 3, height: 14, background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                    <span className="body-text">{p}</span>
                  </div>
                ))}
              </div>
              <span className="link-arrow">Zum Ablauf <ArrowRight /></span>
            </Link>

            {/* Einzelberatung card */}
            <Link
              href="/leistungen/einzelberatung"
              style={{ padding: '56px 48px', display: 'block', textDecoration: 'none' }}
            >
              <div className="label" style={{ marginBottom: 16 }}>Für Einzelpersonen</div>
              <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20, color: 'var(--navy)' }}>Einzelberatung</h2>
              <p className="body-text" style={{ marginBottom: 12 }}>Wenn du in einer Krise steckst, vor einer Entscheidung stehst oder deine eigenen Muster besser verstehen willst, unterstützt Einzelberatung dabei, Gedanken zu sortieren und neue Klarheit zu gewinnen.</p>
              <div style={{ margin: '28px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Orientierung in Lebenskrisen', 'Entscheidungen strukturierter treffen', 'Eigene Muster sichtbar machen'].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ width: 3, height: 14, background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                    <span className="body-text">{p}</span>
                  </div>
                ))}
              </div>
              <span className="link-arrow">Zum Ablauf <ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 64, alignItems: 'center' }} className="two-col">
            {/* Left: Image only */}
            <div style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/uploads/Kim_podcast.png"
                alt="Kim Haas"
                fill
                style={{ objectFit: 'cover', objectPosition: 'right top', borderRadius: 4 }}
              />
            </div>

            {/* Right: Quote + CTA + Disclaimer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center', textAlign: 'center' }}>
              <div style={{ paddingLeft: 0 }}>
                <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--navy)', fontWeight: 300, margin: 0, marginBottom: 10 }}>
                  „Beratung bedeutet in allererster Linie ein vertrauensvoller Raum. Hier darfst du erstmal alles mitbringen, wo du dir Gehör wünschst, ohne verurteilt zu werden."
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--accent)', margin: 0 }}>— Kim Haas</p>
              </div>
              <div>
                <Link href="/kontakt" className="btn-primary">Erstgespräch anfragen <ArrowRight /></Link>
              </div>
              <p style={{ fontWeight: 300, fontSize: 13, lineHeight: 1.85, color: 'var(--navy)', opacity: 0.6, margin: 0 }}>
                Mein Angebot ist Coaching und Beratung, keine Psychotherapie. Es ersetzt keine medizinische oder therapeutische Behandlung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
