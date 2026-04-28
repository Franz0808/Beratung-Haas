import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beratungmithaas.de'),
  title: 'Beratung Haas',
  description: 'Paarberatung, Beziehungscoaching & Einzelberatung mit Kim Haas. Wissenschaftlich fundiert, persönlich, wirkungsvoll. Deutschlandweit online und vor Ort in Garmisch-Partenkirchen.',
  openGraph: {
    type: 'website',
    siteName: 'Beratung mit Haas',
    locale: 'de_DE',
    images: [{ url: '/uploads/DSC_8576.webp', width: 1200, height: 630, alt: 'Kim Haas – Beratung mit Haas' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/uploads/DSC_8576.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
