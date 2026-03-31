import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu — Ta Pinakia · Paphos',
  description: 'Explore our menu of traditional Greek meze, small plates, signatures, and desserts. All dishes are designed to share.',
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children
}
