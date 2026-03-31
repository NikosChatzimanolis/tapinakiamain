import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Us — Ta Pinakia · Paphos',
  description: 'Kennedy Square 6, 1st Floor, Paphos 8047, Cyprus. Reservations by phone or WhatsApp: +357 26 818818.',
}

export default function FindUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
