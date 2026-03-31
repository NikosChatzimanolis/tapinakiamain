import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — Ta Pinakia · Paphos',
  description: 'A look inside Ta Pinakia. Food, atmosphere, live music nights, and our terrace overlooking Paphos Old Town.',
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
