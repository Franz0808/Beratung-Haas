'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, X } from './Icons'

const links = [
  { href: '/', label: 'Start' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ueber', label: 'Über mich' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
]

const leistungenSublinks = [
  { href: '/leistungen/paarberatung', label: 'Paarberatung' },
  { href: '/leistungen/einzelberatung', label: 'Einzelberatung' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [leistungenOpen, setLeistungenOpen] = useState(false)
  const leistungenRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isLeistungenActive = pathname.startsWith('/leistungen')

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Haas<span style={{ color: 'var(--accent)' }}>.</span>Beratung
          </Link>
          <div className="nav-links">
            {links.map((l) => {
              const isActive =
                l.href === '/'
                  ? pathname === '/'
                  : l.href === '/leistungen'
                  ? isLeistungenActive
                  : pathname === l.href

              if (l.href === '/leistungen') {
                return (
                  <div
                    key={l.href}
                    className="nav-dropdown-wrapper"
                    ref={leistungenRef}
                    onMouseEnter={() => setLeistungenOpen(true)}
                    onMouseLeave={() => setLeistungenOpen(false)}
                  >
                    <Link href={l.href} className={`nav-link${isActive ? ' active' : ''}`}>
                      {l.label}
                    </Link>
                    {leistungenOpen && (
                      <div className="nav-dropdown">
                        {leistungenSublinks.map((sub) => (
                          <Link key={sub.href} href={sub.href} className="nav-dropdown-item">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Menü">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(false)}
          >
            <X />
          </button>
          {links.map((l) => (
            <div key={l.href}>
              <Link href={l.href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
              {l.href === '/leistungen' && leistungenSublinks.map((sub) => (
                <Link key={sub.href} href={sub.href} className="mobile-menu-sublink" onClick={() => setMenuOpen(false)}>
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/kontakt" className="btn-accent" onClick={() => setMenuOpen(false)}>
            Erstgespräch anfragen <ArrowRight />
          </Link>
        </div>
      )}
    </>
  )
}
