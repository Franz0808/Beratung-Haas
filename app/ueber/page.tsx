import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from '@/components/Icons'

export const metadata = {
  title: 'Über mich — Haas.Beratung',
}

const pillars = [
  { label: 'Wissenschaft', text: 'Validierte Methoden aus Verhaltenspsychologie und Systemischer Beratung.' },
  { label: 'Erfahrung', text: 'Über zehn Jahre Beratungspraxis in unterschiedlichsten Settings.' },
  { label: 'Persönlichkeit', text: 'Als ehemaliges Straßenkind habe ich Beziehungen selbst von Grund auf erlernen müssen.' },
]

const credentials = [
  'Gesundheitswissenschaftlerin M.Sc. (Schwerpunkt Verhaltenspsychologie)',
  'Systemischer Coach (zertifiziert)',
  'Über 10 Jahre Beratungspraxis',
  'Regelmäßige psychologische Supervision',
  'Seminartätigkeit u.a. beim Polizeipräsidium Pforzheim',
]

export default function UeberPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      {/* Header */}
      <section className="section-sm" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 16 }}>Über mich</div>
          <p style={{ fontSize: 21, fontWeight: 500, color: 'var(--accent)', marginBottom: 8, letterSpacing: '-0.01em' }}>Ich weiß aus eigener Erfahrung:</p>
          <h1 className="title-section" style={{ maxWidth: 700 }}>Beziehungen kann man lernen.</h1>
        </div>
      </section>

      {/* Sektion 1: Einleitung mit persönlicher Geschichte */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            {/* Bild links */}
            <div>
              <div style={{ position: 'relative' }}>
                <div className="img-shadow" style={{ height: 560, position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                    <Image
                      src="/uploads/DSC_8957.JPG"
                      alt="Kim Haas"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: -20, left: -20, background: 'var(--accent)', padding: '16px 24px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--navy)' }}>Kim Haas</div>
                </div>
              </div>
            </div>

            {/* Text rechts */}
            <div>
              <div className="accent-bar" />
              <p className="body-text" style={{ marginBottom: 20 }}>
                Als ehemaliges Straßenkind habe ich Beziehungen selbst von der Pieke auf erlernen müssen. Mit schwerst belasteten Familien-Dynamiken und destruktiven Beziehungen im Gepäck habe ich einen langen Weg zurückgelegt.
              </p>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Die größten Aha-Momente meines Lebens hatte ich mit der Erkenntnis, dass man Beziehungen als Handwerk erlernen kann. Und in diese Erfahrungen nehme ich euch mit.
              </p>
              <p className="body-text" style={{ marginBottom: 48 }}>
                Ich darf seit über zehn Jahren Klient:innen in verschiedenen Settings beraten. Menschen bringen ihre Schicksale mit, wünschen sich Strategien für ein gesünderes Leben oder kämpfen um ihre große Liebe. Das ist eine große Verantwortung. Deshalb arbeite ich ausschließlich mit wissenschaftlich validierten Methoden und besuche regelmäßig die psychologische Supervision.
              </p>

              {/* Prominentes Zitat direkt am Bild */}
              <div style={{ position: 'relative', padding: '40px 0 20px 40px', borderLeft: '3px solid var(--accent)' }}>
                <p style={{ fontWeight: 300, fontSize: 20, lineHeight: 1.6, fontStyle: 'italic', marginBottom: 16, color: 'var(--navy)' }}>
                  Beratung bedeutet in allererster Linie ein vertrauensvoller Raum. Hier darfst du erstmal alles mitbringen, wo du dir Gehör wünschst, ohne verurteilt zu werden.
                </p>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)' }}>— Kim Haas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 2: Qualifikationen & Hintergrund */}
      <section className="section">
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
                    alt="Seminarvortrag beim Polizeipräsidium Pforzheim"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(27,61,82,0.6)', marginTop: 12, fontStyle: 'italic' }}>Seminarvortrag beim Polizeipräsidium Pforzheim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            <div className="label" style={{ marginBottom: 16 }}>Methodik</div>
            <h2 className="title-section" style={{ color: '#fff' }}>Die drei Säulen meiner Arbeit.</h2>
          </div>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
            {[
              { num: '01', title: 'Wissenschaftliches Fundament', text: 'Validierte Ansätze aus Verhaltenspsychologie, Systemischer Therapie und Bindungsforschung bilden die Grundlage jeder Sitzung.' },
              { num: '02', title: 'Praxiserfahrung', text: 'Über zehn Jahre Beratungspraxis in unterschiedlichsten Settings – von Paaren bis hin zu Führungskräften und Institutionen.' },
              { num: '03', title: 'Persönliche Tiefe', text: 'Als jemand, der Beziehungen selbst von Grund auf erlernen musste, bringe ich eine Authentizität mit, die über Theorie hinausgeht.' },
            ].map((p, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none', padding: '40px 36px', background: 'var(--navy)' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.4em', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>{p.num}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16, color: '#fff' }}>{p.title}</h3>
                <p style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was meine Arbeit unterscheidet */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            <div>
              <div className="label" style={{ marginBottom: 16, color: 'var(--accent)' }}>Mein Ansatz</div>
              <h2 className="title-section" style={{ marginBottom: 28 }}>Was meine Arbeit unterscheidet.</h2>
              <p style={{ fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: 'var(--navy)', marginBottom: 24 }}>
                Ich arbeite nicht mit Standard-Coaching-Methoden. Und auch nicht mit „Kommunikationstipps". Ich arbeite mit einem klaren Blick auf das, was zwischen den Zeilen passiert.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
                {['Beziehungsmuster', 'Emotionale Dynamiken', 'Unbewusste Reaktionen', 'Was zwischen den Zeilen passiert'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: 'rgba(27,61,82,0.5)', flexShrink: 0 }}><Check /></span>
                    <span style={{ fontWeight: 300, fontSize: 16, color: 'var(--navy)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {pillars.map((p, i) => (
                <div key={i} style={{ padding: '28px 0', borderTop: '1px solid rgba(27,61,82,0.1)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(27,61,82,0.4)', marginBottom: 8 }}>{String(i + 1).padStart(2, '0')} {p.label}</div>
                  <p style={{ fontWeight: 300, fontSize: 15, color: 'var(--navy)' }}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }} className="three-col">
            {[
              { src: '/uploads/whatsapp-10.11.59.jpeg', alt: 'Gruppenarbeit' },
              { src: '/uploads/DSC_8576.JPG', alt: 'Kim Haas' },
              { src: '/uploads/whatsapp-10.22.35.jpeg', alt: 'Podcast' },
            ].map((img, i) => (
              <div key={i} className="img-shadow" style={{ height: 300, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--warm)', textAlign: 'center' }}>
        <div className="container">
          <p className="body-text" style={{ maxWidth: 480, margin: '0 auto 32px' }}>Lern mich unverbindlich kennen. Im Erstgespräch schauen wir gemeinsam, ob und wie ich dir helfen kann.</p>
          <Link href="/kontakt" className="btn-primary">Erstgespräch anfragen <ArrowRight /></Link>
        </div>
      </section>
    </main>
  )
}
