'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [statusIndex, setStatusIndex] = useState(1) // Current step (simulate progress)
  const dotsRef = useRef(null)

  const steps = [
    'Order Received',
    'Processed & Packed',
    'In Transit',
    'Out for Delivery',
    'Delivered'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const randomStep = Math.floor(Math.random() * steps.length)
    setStatusIndex(randomStep)
  }

  useEffect(() => {
    // Animate background dots
    gsap.to(dotsRef.current, {
      backgroundPosition: '40px 40px, 20px 20px',
      duration: 10,
      ease: 'linear',
      repeat: -1
    })
  }, [])

  return (
    <main
      ref={dotsRef}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden relative"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px), radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 4px 4px'
      }}
    >
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8 sm:p-10 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Track Your Shipment
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Enter your tracking number below and monitor your shipment in real-time.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
            className="w-full sm:flex-1 px-4 py-3 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            Track
          </button>
        </form>

        {/* Step tracker */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative flex-1">
              <div className="w-6 h-6 mb-2 rounded-full border-2 border-gray-300 flex items-center justify-center">
                {index <= statusIndex && (
                  <motion.div 
                    className="w-4 h-4 bg-red-600 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                )}
              </div>
              <span className={`text-sm sm:text-base ${index <= statusIndex ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                {step}
              </span>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute top-3.5 right-0 w-full h-0.5 bg-gray-300 sm:left-1/2 sm:right-auto sm:top-6 sm:h-0.5 sm:w-full z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
