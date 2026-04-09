import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const body = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Ta Pinakia — Mezedopoleio · Paphos, Cyprus',
  description: 'Traditional Greek meze dining in the heart of Paphos Old Town. Small plates, shared tradition. Reservations recommended: +357 26 818818',
  keywords: ['Ta Pinakia', 'Paphos restaurant', 'Greek meze', 'mezedopoleio Paphos', 'Kennedy Square dining', 'Cyprus traditional food'],
  openGraph: {
    title: 'Ta Pinakia — Mezedopoleio · Paphos',
    description: 'Small plates. Big tradition. Traditional Greek dining in Paphos Old Town.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Ta Pinakia',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
