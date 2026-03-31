'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { RESTAURANT } from '@/lib/restaurant-info'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/story', label: 'Our Story' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/find-us', label: 'Find Us' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Pages with light (parchment) headers need dark navbar text from the start
  const isLightPage = ['/menu', '/story', '/find-us'].includes(pathname)
  const showDarkNav = scrolled || isLightPage

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-espresso/95 backdrop-blur-md border-b border-white/10'
            : isLightPage
              ? 'bg-parchment/90 backdrop-blur-md border-b border-black/5'
              : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className={`font-display italic text-xl tracking-wide transition-colors duration-500 ${
            showDarkNav && !scrolled ? 'text-espresso' : 'text-text-warm'
          }`}>
            {RESTAURANT.nameGr}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm tracking-wide transition-colors duration-300 hover:text-amber ${
                  pathname === link.href ? 'text-amber' : showDarkNav && !scrolled ? 'text-espresso' : 'text-text-warm'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-amber"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Reserve button (desktop) */}
          <Link
            href={RESTAURANT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-body tracking-wide px-5 py-2.5 border transition-all duration-500 ${
              scrolled
                ? 'bg-amber border-amber text-espresso'
                : isLightPage
                  ? 'bg-amber border-amber text-espresso hover:bg-amber-muted'
                  : 'bg-transparent border-amber/60 text-text-warm hover:bg-amber/10'
            }`}
          >
            Reserve a Table
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  showDarkNav && !scrolled ? 'bg-espresso' : 'bg-text-warm'
                } ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  showDarkNav && !scrolled ? 'bg-espresso' : 'bg-text-warm'
                } ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-espresso flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-4xl tracking-wide transition-colors ${
                      pathname === link.href ? 'text-amber' : 'text-text-warm'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href={RESTAURANT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-8 py-4 border border-amber text-amber font-body text-lg tracking-wide"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
