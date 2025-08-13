'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Truck, Package, Globe, Clock, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const extraRef = useRef(null)
  const ctaRef = useRef(null)
  const dotsRef = useRef(null)

  const services = [
    { icon: <Truck className="w-10 h-10 text-red-600" />, title: 'Fast Delivery', description: 'Time-sensitive shipments arrive exactly when promised. 24/7 network keeps your cargo moving.' },
    { icon: <Package className="w-10 h-10 text-red-600" />, title: 'Secure Handling', description: 'Every package is handled with precision. Full tracking from pickup to drop-off.' },
    { icon: <Globe className="w-10 h-10 text-red-600" />, title: 'Global Coverage', description: 'ShipSwift delivers worldwide. Your cargo reaches any corner of the globe safely and on time.' }
  ]

  const extraFeatures = [
    { icon: <Clock className="w-6 h-6 text-red-600" />, text: '24/7 Customer Support' },
    { icon: <ShieldCheck className="w-6 h-6 text-red-600" />, text: 'Insurance on Cargo' },
    { icon: <Package className="w-6 h-6 text-red-600" />, text: 'Flexible Pickup Options' }
  ]

  useEffect(() => {
    // Section fade-in
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )

    // Animate service cards individually
    cardsRef.current.forEach((card) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 40, scale: 0.95 }, 
        { 
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', 
          scrollTrigger: { trigger: card, start: 'top 80%' } 
        }
      )
    })

    // Animate extra features with stagger
    gsap.fromTo(extraRef.current.children, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: extraRef.current, start: 'top 85%' } }
    )

    // Animate CTA
    gsap.fromTo(ctaRef.current, 
      { opacity: 0, y: 50, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: ctaRef.current, start: 'top 90%' } }
    )

    // Animate background dots
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
      className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-white text-black overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px), radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 4px 4px'
      }}
    >
      {/* Moving subtle gradient overlay */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-100 rounded-full opacity-10 filter blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">Our Services</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
          Explore the range of services we offer, from standard delivery to premium logistics solutions designed for speed, security, and reliability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-red-50 rounded-full hover:scale-110 transition duration-300">{service.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Extra features */}
        <div ref={extraRef} className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          {extraFeatures.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 bg-red-50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              {feature.icon}
              <span className="text-gray-800 font-medium text-sm sm:text-base">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 sm:mt-12">
          <Link
            href="/quote"
            className="inline-block bg-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-base sm:text-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
