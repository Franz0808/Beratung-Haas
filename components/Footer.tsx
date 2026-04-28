'use client'

import Link from 'next/link'

const navLinks = [
  ['/', 'Start'],
  ['/leistungen', 'Leistungen'],
  ['/ueber', 'Über mich'],
  ['/faq', 'FAQ'],
  ['/kontakt', 'Kontakt'],
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="three-col">
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
              Haas<span style={{ color: 'var(--accent)' }}>.</span>Beratung
            </div>
            <p style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: 320 }}>
              Online Paarberatung, Beziehungscoaching & Einzelberatung. Wertschätzend. Direkt. Strukturiert. Deutschlandweit.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Navigation</div>
            {navLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{ display: 'block', fontWeight: 300, fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 8, transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Kontakt</div>
            <div style={{ fontWeight: 300, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9 }}>
              <div>info@mindset-fitness.de</div>
              <div>+49 172 3148057</div>
              <div>Garmisch-Partenkirchen, Bayern</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>© 2026 Kim Haas. Alle Rechte vorbehalten.</div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>Impressum · Datenschutz</div>
        </div>
      </div>
    </footer>
  )
}
