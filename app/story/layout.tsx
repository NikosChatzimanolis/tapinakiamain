import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story — Ta Pinakia · Paphos',
  description: 'Born from a simple conviction: the best meals happen around shared plates, unhurried time, and people you love.',
}

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children
}
