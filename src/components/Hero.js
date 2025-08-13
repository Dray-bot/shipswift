'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Lottie from 'lottie-react'

export default function Hero() {
  const textRef = useRef(null)
  const dotsRef = useRef(null)
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Fetch Lottie JSON from public folder
    fetch('/lottie/cargo-delivery.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))

    // GSAP animation for text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    )

    // Animate dots pattern subtly
    if (dotsRef.current) {
      gsap.to(dotsRef.current, {
        backgroundPosition: '20px 20px',
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: 'sine.inOut'
      })
    }
  }, [])

  return (
    <section
      ref={dotsRef}
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-12 gap-8 overflow-hidden bg-white text-black"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    >
      {/* Left Text Section with Glass Effect */}
      <div
        ref={textRef}
        className="flex-1 max-w-xl text-center md:text-left z-10 relative p-8 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Fast, Reliable, and Secure Cargo Delivery
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          ShipSwift moves your cargo with precision and speed. No delays. No excuses.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <a
            href="/quote"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow hover:bg-red-700 transition duration-200"
          >
            Get a Quote
          </a>
          <a
            href="/tracking"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow hover:bg-black transition duration-200"
          >
            Track Shipment
          </a>
        </div>
      </div>

      {/* Right Lottie Section */}
      <div className="flex-1 flex justify-center z-10">
        {animationData && (
          <Lottie animationData={animationData} loop autoplay className="w-full max-w-md" />
        )}
      </div>
    </section>
  )
}
