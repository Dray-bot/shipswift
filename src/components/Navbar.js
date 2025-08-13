'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/tracking', label: 'Tracking' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/${scrolled ? '95' : '0'} backdrop-blur border-b border-black/5 shadow-sm`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#E50914] text-white grid place-items-center font-bold">
              S
            </div>
            <span
              className={`text-lg font-bold tracking-tight ${
                scrolled ? 'text-[#E50914]' : 'text-white'
              }`}
            >
              ShipSwift
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-[#E50914]'
                    : scrolled
                    ? 'text-black hover:text-[#b40810]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/quote"
              className={`ml-2 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 ${
                scrolled
                  ? 'bg-[#E50914] text-white hover:bg-[#b40810]'
                  : 'bg-white text-[#E50914] hover:bg-gray-200'
              }`}
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden relative w-12 h-12 flex flex-col justify-center items-center group"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-7 h-0.5 rounded-full transition-all duration-300 ease-in-out origin-left ${
                open ? 'rotate-45 translate-y-1.5 bg-[#E50914]' : scrolled ? 'bg-black' : 'bg-white'
              }`}
            />
            <span
              className={`block w-7 h-0.5 my-1 rounded-full transition-all duration-300 ease-in-out ${
                open ? 'opacity-0' : scrolled ? 'bg-black' : 'bg-white'
              }`}
            />
            <span
              className={`block w-7 h-0.5 rounded-full transition-all duration-300 ease-in-out origin-left ${
                open ? '-rotate-45 -translate-y-1.5 bg-[#E50914]' : scrolled ? 'bg-black' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`space-y-1 px-4 pb-4 pt-2 ${
            scrolled
              ? 'bg-white/95 backdrop-blur border-t border-black/5'
              : 'bg-[#E50914]/95 backdrop-blur'
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 text-base font-medium ${
                pathname === item.href
                  ? 'text-[#E50914]'
                  : scrolled
                  ? 'text-[#E50914]'
                  : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/quote"
            className={`block rounded-lg px-3 py-2 text-base font-semibold transition duration-200 ${
              scrolled
                ? 'bg-[#E50914] text-white hover:bg-[#b40810]'
                : 'bg-white text-[#E50914] hover:bg-gray-200'
            }`}
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  )
}
