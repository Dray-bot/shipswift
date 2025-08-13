'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const ctaRef = useRef(null)
  const dotsRef = useRef(null)

  useEffect(() => {
    // Section fade-in
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )

    // Animate form
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: formRef.current, start: 'top 85%' } }
    )

    // Animate CTA
    gsap.fromTo(ctaRef.current, 
      { opacity: 0, y: 40, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: ctaRef.current, start: 'top 90%' } }
    )

    // Animate dots background
    gsap.to(dotsRef.current, {
      backgroundPosition: '40px 40px, 20px 20px',
      duration: 10,
      ease: 'linear',
      repeat: -1
    })
  }, [])

  return (
    <section
      ref={el => {
        sectionRef.current = el
        dotsRef.current = el
      }}
      className="relative min-h-screen px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-white text-black overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px), radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 4px 4px'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-100 rounded-full opacity-10 filter blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Contact Us</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 sm:mb-16 leading-relaxed">
          Have questions, inquiries, or need assistance? Fill out the form below and our team will respond promptly to help you with anything you need.
        </p>

        {/* Contact Form */}
        <form ref={formRef} className="w-full max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div ref={ctaRef} className="mt-2">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
