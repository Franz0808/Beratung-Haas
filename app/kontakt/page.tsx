import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from '@/components/Icons'

export const metadata = {
  title: 'Kontakt — Haas.Beratung',
  alternates: { canonical: 'https://beratungmithaas.de/kontakt' },
  openGraph: { url: 'https://beratungmithaas.de/kontakt' },
}

export default function KontaktPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <section className="section-sm" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 16 }}>Kontakt</div>
          <h1 className="title-section" style={{ maxWidth: 600 }}>Erstgespräch anfragen.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            {/* Left info */}
            <div>
              <div className="accent-bar" />
              <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>Unverbindlich kennenlernen.</h2>
              <p className="body-text" style={{ marginBottom: 36 }}>
                Das Erstgespräch dauert ca. 30 Minuten, ist kostenlos und findet online statt. Wir schauen gemeinsam, ob und wie ich dich unterstützen kann – ohne Druck und ohne Verpflichtung.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', marginTop: 2 }}><Mail /></span>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 4 }}>E-Mail</div>
                    <a href="mailto:info@mindset-fitness.de" className="body-text" style={{ color: 'var(--navy)', textDecoration: 'none' }}>
                      info@mindset-fitness.de
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', marginTop: 2 }}><Phone /></span>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 4 }}>Telefon</div>
                    <a href="tel:+491723148057" className="body-text" style={{ color: 'var(--navy)', textDecoration: 'none' }}>
                      +49 172 3148057
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', marginTop: 2 }}><MapPin /></span>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 4 }}>Standort</div>
                    <div className="body-text">
                      Garmisch-Partenkirchen, Bayern<br />
                      <span style={{ opacity: 0.7 }}>Online: deutschlandweit</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right CTA */}
            <div style={{ background: 'var(--warm)', padding: 48, borderLeft: '4px solid var(--accent)' }}>
              <div className="label" style={{ marginBottom: 20 }}>So geht es weiter</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20, color: 'var(--navy)' }}>
                Schreib mir einfach eine E-Mail.
              </h3>
              <p className="body-text" style={{ marginBottom: 12 }}>
                Beschreib kurz, was dich beschäftigt. Ein paar Sätze reichen. Ich melde mich in der Regel innerhalb von 48 Stunden.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Alternativ kannst du auch direkt anrufen – ich freue mich auf das Gespräch.
              </p>
              <a href="mailto:info@mindset-fitness.de?subject=Erstgespräch anfragen" className="btn-accent" style={{ marginBottom: 16 }}>
                E-Mail schreiben <ArrowRight />
              </a>
              <p style={{ fontSize: 'clamp(15px, 1.1vw, 18px)', color: 'rgba(27,61,82,0.5)', lineHeight: 1.5, marginTop: 16 }}>
                Das Erstgespräch ist kostenlos und unverbindlich. Alle Informationen werden vertraulich behandelt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
