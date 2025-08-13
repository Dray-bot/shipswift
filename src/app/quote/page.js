'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Quote() {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(false)
  const dotsRef = useRef(null)

  const fetchQuote = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://dummyjson.com/quotes/random')
      const data = await res.json()
      setQuote(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()

    // Animate dots background
    gsap.to(dotsRef.current, {
      backgroundPosition: '40px 40px, 20px 20px',
      backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px), radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)`,
      backgroundSize: '20px 20px',
      duration: 10,
      ease: 'linear',
      repeat: -1
    })
  }, [])

  return (
    <main
      ref={dotsRef}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px), radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 4px 4px'
      }}
    >
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 sm:p-10 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get a Quote
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Click the button below to get a random inspirational quote.
        </p>

        <div className="mb-6">
          {quote ? (
            <p className="text-gray-800 text-lg sm:text-xl md:text-2xl font-medium italic">
              &quot;{quote.quote}&quot;
            </p>
          ) : (
            <p className="text-gray-400 text-lg">Loading quote...</p>
          )}
        </div>

        <button
          onClick={fetchQuote}
          disabled={loading}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Fetching...' : 'Get New Quote'}
        </button>
      </div>
    </main>
  )
}
