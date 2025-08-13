'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function CallToAction() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-tr from-red-500 via-white to-red-100 backdrop-blur-md text-gray-900 py-24 px-6 text-center overflow-hidden shadow-xl"
      style={{
        border: '1px solid rgba(255,0,0,0.1)'
      }}
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-red-500 via-white to-red-100 rounded-full opacity-30 filter blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tr from-red-600 via-white to-red-50 rounded-full opacity-30 filter blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Ship With Confidence?
        </h2>
        <p className="text-lg sm:text-xl text-gray-700/90 mb-12 leading-relaxed">
          Get a free quote today or track your shipment in real time with full transparency and reliability.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            href="/quote"
            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 hover:bg-red-500 transition-transform duration-300"
          >
            Get a Quote
          </Link>
          <Link
            href="/tracking"
            className="px-8 py-4 bg-white text-red-600 font-semibold rounded-2xl shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-300"
          >
            Track Shipment
          </Link>
        </div>
      </div>
    </section>
  )
}
