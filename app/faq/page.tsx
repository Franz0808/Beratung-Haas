import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata = {
  title: 'FAQ — Haas.Beratung',
  alternates: { canonical: 'https://beratungmithaas.de/faq' },
  openGraph: { url: 'https://beratungmithaas.de/faq' },
}

export default function FAQPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <section className="section-sm" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 16 }}>Häufige Fragen</div>
          <h1 className="title-section" style={{ maxWidth: 640 }}>Was Menschen vor dem ersten Schritt bewegt.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <FAQAccordion />
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--warm)', textAlign: 'center' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 16 }}>Noch Fragen?</div>
          <h2 className="title-section" style={{ marginBottom: 24 }}>Einfach fragen.</h2>
          <p style={{ fontWeight: 300, fontSize: 16, color: 'var(--mid)', maxWidth: 440, margin: '0 auto 36px' }}>Im Erstgespräch kannst du alle deine Fragen mitbringen – kostenlos und unverbindlich.</p>
          <Link href="/kontakt" className="btn-accent">Erstgespräch anfragen <ArrowRight /></Link>
        </div>
      </section>
    </main>
  )
}
