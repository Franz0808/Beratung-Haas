import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from '@/components/Icons'

export const metadata = {
  title: 'Über mich — Haas.Beratung',
}

const pillars = [
  {
    label: 'Wissenschaftliches Fundament', text: 'Validierte Ansätze aus Verhaltenspsychologie, Systemischer Therapie und Bindungsforschung bilden die Grundlage jeder Sitzung.'
  },
  { label: 'Erfahrung', text: 'Über zehn Jahre Beratungspraxis in unterschiedlichsten Settings – von Paaren bis hin zu Führungskräften und Institutionen.' },
  { label: 'Persönliche Tiefe', text: 'Als jemand, der Beziehungen selbst von Grund auf erlernen musste, bringe ich eine Authentizität mit, die über Theorie hinausgeht.' },
]

const credentials = [
  'Gesundheitswissenschaftlerin M.Sc. (Schwerpunkt Verhaltenspsychologie)',
  'Systemischer Coach (zertifiziert)',
  'Über 10 Jahre Beratungspraxis',
  'Regelmäßige psychologische Supervision',
  'Dozentin u.a. für Karlsruher Institut für Technologie, Techniker Krankenkasse, Polizei Bayern, u.v.m.',
]

export default function UeberPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      {/* Header */}
      <section className="section-sm" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <p style={{ fontSize: 21, fontWeight: 500, color: 'var(--accent)', marginBottom: 8, letterSpacing: '-0.01em' }}>Ich weiß aus eigener Erfahrung:</p>
          <h1 className="title-section" style={{ maxWidth: 700 }}>Beziehungen kann man lernen.</h1>
        </div>
      </section>

      {/* Sektion 1: Einleitung mit persönlicher Geschichte */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 48, alignItems: 'center' }} className="two-col">
            {/* Bild links */}
            <div>
              <div style={{ position: 'relative' }}>
                <div className="img-shadow" style={{ aspectRatio: '3/2', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                    <Image
                      src="/uploads/zwei_kims.jpg"
                      alt="Kim Haas"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text rechts */}
            <div>
              <div className="label" style={{ marginBottom: 20 }}>Über mich</div>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Als ehemaliges Straßenkind habe ich Beziehungen selbst von der Pieke auf erlernen müssen. Mit schwerst belasteten Familien-Dynamiken und destruktiven Beziehungen im Gepäck habe ich einen langen Weg zurückgelegt.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Die größten Aha-Momente meines Lebens hatte ich mit der Erkenntnis, dass man Beziehungen als Handwerk erlernen kann. Und in diese Erfahrungen nehme ich euch mit.
              </p>
              <p className="body-text" style={{ marginBottom: 0 }}>
                Ich darf seit über zehn Jahren Klient:innen in verschiedenen Settings beraten. Menschen bringen ihre Schicksale mit, wünschen sich Strategien für ein gesünderes Leben oder kämpfen um ihre große Liebe. Das ist eine große Verantwortung. Deshalb arbeite ich ausschließlich mit wissenschaftlich validierten Methoden und besuche regelmäßig die psychologische Supervision.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Sektion 2: Qualifikationen & Hintergrund */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            {/* Text links */}
            <div>
              <div className="label" style={{ marginBottom: 20 }}>Qualifikationen & Hintergrund</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {credentials.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}><Check /></span>
                    <span className="body-text" style={{ fontSize: 16, lineHeight: 1.6 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bild rechts */}
            <div>
              <div className="img-shadow" style={{ height: 320, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                  <Image
                    src="/uploads/whatsapp-10.16.38.jpeg"
                    alt="Seminarvortrag beim Polizeipräsidium Garmisch-Partenkirchen"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
              <p style={{ fontSize: 15, color: 'rgba(27,61,82,0.6)', marginTop: 12, fontStyle: 'italic' }}>Seminarvortrag beim Polizeipräsidium Garmisch-Partenkirchen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Was meine Arbeit unterscheidet */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            <div>
              <div className="label" style={{ marginBottom: 16 }}>Mein Ansatz</div>
              <h2 className="title-section" style={{ marginBottom: 28 }}>Was meine Arbeit unterscheidet.</h2>
              <p style={{ fontWeight: 300, fontSize: 'clamp(15px, 1.1vw, 18px)', lineHeight: 1.75, color: 'var(--navy)', marginBottom: 24 }}>
                Ich arbeite nicht mit Standard-Coaching-Methoden. Und auch nicht mit „Kommunikationstipps". Ich arbeite mit einem klaren Blick auf das, was zwischen den Zeilen passiert.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
                {['Beziehungsmuster', 'Emotionale Dynamiken', 'Unbewusste Reaktionen'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: 'rgba(27,61,82,0.5)', flexShrink: 0 }}><Check /></span>
                    <span style={{ fontWeight: 300, fontSize: 'clamp(15px, 1.1vw, 18px)', color: 'var(--navy)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {pillars.map((p, i) => (
                <div key={i} style={{ padding: '28px 0', borderTop: '1px solid rgba(27,61,82,0.1)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 8 }}>{String(i + 1).padStart(2, '0')} {p.label}</div>
                  <p style={{ fontWeight: 300, fontSize: 'clamp(15px, 1.1vw, 18px)', color: 'var(--navy)' }}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote + CTA */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            {/* Quote */}
            <div>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 20, opacity: 0.5 }}>
                <path d="M10 8H6C6 5.79 7.79 4 10 4V2C6.69 2 4 4.69 4 8V14H10V8ZM20 8H16C16 5.79 17.79 4 20 4V2C16.69 2 14 4.69 14 8V14H20V8Z" fill="var(--accent)" />
              </svg>
              <p style={{ fontSize: 'clamp(16px, 1.15vw, 19px)', lineHeight: 1.75, fontWeight: 300, color: 'var(--navy)', marginBottom: 28 }}>
                Die Zusammenarbeit mit Kim Haas war fachlich fundiert, offen und äußerst produktiv. Im Bereich Teamentwicklung und Führungskräfte-Coaching hat uns ihre Unterstützung maßgeblich geholfen, klare Fortschritte zu erzielen und unsere Ziele effektiver zu erreichen.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                  <Image src="/uploads/Jens Potthoff.webp" alt="Jens Potthoff" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 2 }}>Jens Potthoff</p>
                  <p style={{ fontSize: 14, color: 'rgba(27,61,82,0.5)', fontWeight: 400 }}>Managing Director | TECHNIA</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 20, fontWeight: 400, color: 'var(--navy)', marginBottom: 8, lineHeight: 1.5 }}>Lern mich unverbindlich kennen.</p>
              <p className="body-text" style={{ color: 'rgba(27,61,82,0.6)', maxWidth: 360, margin: '0 auto 32px' }}>Im Erstgespräch schauen wir gemeinsam, ob und wie ich dir/euch helfen kann.</p>
              <Link href="/kontakt" className="btn-primary">Erstgespräch anfragen <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
