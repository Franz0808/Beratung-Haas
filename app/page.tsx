import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'
import ReviewCarousel from '@/components/ReviewCarousel'

export const metadata: Metadata = {
  title: 'Paarberatung Haas — Online & Offline',
  description: 'Paarberatung, Beziehungscoaching & Einzelberatung mit Kim Haas. Wissenschaftlich fundiert, persönlich, wirkungsvoll. Deutschlandweit online und vor Ort in Garmisch-Partenkirchen.',
  alternates: { canonical: 'https://beratungmithaas.de/' },
  openGraph: { url: 'https://beratungmithaas.de/' },
}

const services = [
  { href: '/leistungen/paarberatung', title: 'Paarberatung', sub: 'Für Paare, Freundschaften & Familien', desc: 'Wenn ihr euch im Kreis dreht, emotional verloren habt oder das Schweigen lauter wird als jedes Gespräch.' },
  { href: '/leistungen/einzelberatung', title: 'Einzelberatung', sub: 'Für Einzelpersonen', desc: 'Wenn du in einer persönlichen Krise steckst, vor einer wichtigen Entscheidung stehst oder deine eigenen Muster verstehen willst.' },
]

const problemFragments = [
  'Gespräche, die sich im Kreis drehen.',
  'Entscheidungen, die immer wieder aufgeschoben werden.',
  'Das Gefühl, sich selbst oder einander verloren zu haben.',
  'Nicht mehr weiterzuwissen — und gleichzeitig zu spüren,\ndass sich etwas verändern muss.',
]

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ paddingTop: 72, minHeight: '90vh', display: 'flex', alignItems: 'center', background: '#fff' }}>
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center', minHeight: 'calc(90vh - 72px)', paddingTop: 80, paddingBottom: 80 }}>
            <div>

              <h1 className="title-hero" style={{ marginBottom: 28, color: 'rgb(27, 61, 82)' }}>
                Klarheit für<br />
                <span style={{ color: 'var(--accent)' }}>Beziehungen,</span><br />
                Konflikte &amp;<br />
                Wendepunkte.
              </h1>
              <p className="body-text" style={{ maxWidth: 480, marginBottom: 40 }}>
                Wenn Gespräche immer wieder eskalieren, Nähe verloren geht oder du nicht mehr weißt, was du eigentlich fühlst oder willst – braucht es manchmal einen klaren Blick von außen.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/kontakt" className="btn-accent">
                  Erstgespräch anfragen <ArrowRight />
                </Link>
                <Link href="/leistungen" className="btn-outline">
                  Alle Leistungen
                </Link>
              </div>
            </div>
            <div className="hero-img-wrap img-shadow" style={{ height: '75vh' }}>
              <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/uploads/Kim_hero_vertical.webp"
                  alt="Kim Haas – Beraterin"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% top' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }} className="two-col">
            <div>
              <div className="label" style={{ marginBottom: 24 }}>Es beginnt oft leise</div>
              <h2 className="title-section" style={{ marginBottom: 48 }}>
                Manches lässt sich nicht länger<br />
                nur mit sich selbst klären.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: 39 }}>
              {problemFragments.map((fragment, i) => (
                <p
                  key={i}
                  className="body-text"
                  style={{
                    margin: 0,
                    paddingTop: i === 0 ? 0 : 24,
                    paddingBottom: 24,
                    borderTop: i === 0 ? 'none' : '1px solid rgba(27,61,82,0.1)',
                  }}
                >
                  {fragment}
                </p>
              ))}
              <div style={{ paddingTop: 24 }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            <div className="label" style={{ marginBottom: 16 }}>Leistungen</div>
            <h2 className="title-section">So kann ich helfen</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }} className="two-col">
            {/* Image left */}
            <div className="img-shadow" style={{ position: 'relative', aspectRatio: '3/4' }}>
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <Image
                  src="/uploads/DSC_8576.webp"
                  alt="Kim Haas"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '30% 20%' }}
                />
              </div>
            </div>
            {/* Service boxes right, stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {services.map((s, i) => (
                <div key={s.href} style={{ flex: 1, padding: '48px', background: 'var(--warm)', position: 'relative' }}>
                  <div className="label" style={{ marginBottom: 12 }}>{s.sub}</div>
                  <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>{s.title}</h3>
                  <p className="body-text" style={{ marginBottom: 32 }}>{s.desc}</p>
                  <Link href={s.href} className="link-arrow" style={{ borderBottomColor: 'var(--navy)' }}>Mehr erfahren <ArrowRight /></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            <div className="label" style={{ marginBottom: 16 }}>Bewertungen</div>
            <h2 className="title-section">Was Klient:innen sagen</h2>
          </div>
          <ReviewCarousel />
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="label" style={{ marginBottom: 16 }}>Über mich</div>
              <h2 className="title-section" style={{ marginBottom: 24 }}>Du musst das nicht alleine lösen.</h2>
              <p className="body-text" style={{ marginBottom: 16 }}>
                Ich bin Gesundheitswissenschaftlerin mit Schwerpunkt Verhaltenspsychologie (M.Sc.) und Systemischer Coach. Ich arbeite mit einem klaren Blick für Dynamiken, viel Gespür für zwischenmenschliche Prozesse und einer strukturierten, wissenschaftlich fundierten Herangehensweise.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Ich begleite Einzelpersonen und Paare dabei, Beziehungsmuster zu verstehen, Konflikte anders zu führen und wieder handlungsfähig zu werden.
              </p>
              <Link href="/ueber" className="link-arrow">Mehr über mich <ArrowRight /></Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="img-shadow" style={{ aspectRatio: '3/4', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                  <Image
                    src="/uploads/Kim_wall_vertical.webp"
                    alt="Kim Haas"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
                  />
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: -24, right: -24, background: '#fff', borderLeft: '4px solid var(--accent)', padding: '24px 32px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: 'var(--navy)' }}>10+</span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--navy)' }}>Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: 'var(--warm)', position: 'relative', padding: '120px 0', overflow: 'hidden' }}>

        {/* Giant background word */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(100px, 18vw, 220px)',
          fontWeight: 700,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          color: 'rgba(27,61,82,0.04)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}>KONTAKT</div>

        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          bottom: -120,
          right: -120,
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: '1px solid rgba(217,140,43,0.15)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -80,
          right: -80,
          width: 280,
          height: 280,
          borderRadius: '50%',
          border: '1px solid rgba(217,140,43,0.1)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="label" style={{ marginBottom: 20 }}>Nächster Schritt</div>
          <h2 className="title-section" style={{ maxWidth: 700, margin: '0 auto 28px' }}>
            Wenn du merkst, dass sich{' '}
            <span style={{ color: 'var(--accent)' }}>etwas verändern</span>{' '}
            muss.
          </h2>
          <p className="body-text" style={{ maxWidth: 460, margin: '0 auto 52px' }}>
            Wir schauen gemeinsam, was bei dir oder euch gerade wirklich passiert – und ob ich dich dabei unterstützen kann.
          </p>
          <Link href="/kontakt" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'var(--navy)',
            color: '#fff',
            padding: '20px 44px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            border: '2px solid var(--navy)',
            transition: 'all 0.25s',
            textDecoration: 'none',
          }} className="cta-main-btn"> Unverbindlich Kontakt aufnehmen <ArrowRight /></Link>
        </div>
      </section>
    </main>
  )
}
