import Link from 'next/link'
import { RESTAURANT } from '@/lib/restaurant-info'

export function Footer() {
  return (
    <footer className="relative bg-ink bg-noise">
      <div className="relative z-10">
        {/* Wordmark */}
        <div className="text-center pt-20 pb-12">
          <p className="font-display italic text-4xl md:text-5xl text-text-warm tracking-wide">
            {RESTAURANT.nameGr}
          </p>
          <p className="font-body text-sm text-text-muted mt-3 tracking-wide">
            Small Plates. Ancient Tradition.
          </p>
        </div>

        <div className="border-t border-amber/20" />

        {/* Three columns */}
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Navigation */}
          <div>
            <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted mb-6">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/story', label: 'Our Story' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/find-us', label: 'Find Us' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-warm/70 hover:text-amber transition-colors font-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-text-warm/70 font-light">
              <p>
                {RESTAURANT.address.street}<br />
                {RESTAURANT.address.floor}<br />
                {RESTAURANT.address.city} {RESTAURANT.address.postcode}, {RESTAURANT.address.country}
              </p>
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="hover:text-amber transition-colors"
              >
                {RESTAURANT.phoneDisplay}
              </a>
              <a
                href={RESTAURANT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors"
              >
                WhatsApp Reservations
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-body tracking-[0.3em] text-[11px] uppercase text-text-muted mb-6">
              Follow Us
            </h3>
            <div className="flex flex-col gap-3 text-text-warm/70 font-light">
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @tapinakia
              </a>
              <a
                href={RESTAURANT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Ta Pinakia
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber/20" />

        {/* Bottom bar */}
        <div className="mx-auto max-w-6xl px-6 py-6 pb-20 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted font-light">
          <p>&copy; {new Date().getFullYear()} Ta Pinakia. All rights reserved.</p>
          <p>Reservations via phone or WhatsApp only</p>
        </div>
      </div>
    </footer>
  )
}
