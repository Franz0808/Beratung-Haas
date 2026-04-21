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
  title: 'Paarberatung Haas — Online & Offline',
  description: 'Paarberatung, Beziehungscoaching & Lebensberatung mit Kim Haas. Wissenschaftlich fundiert, persönlich, wirkungsvoll. Deutschlandweit online und vor Ort in Garmisch-Partenkirchen.',
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
