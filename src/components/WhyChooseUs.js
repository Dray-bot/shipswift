'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Truck, ShieldCheck, BadgeDollarSign } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.feature-card')

    // Animate cards on scroll
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )

    // Animate dot-pattern background subtly
    gsap.to(sectionRef.current, {
      backgroundPosition: '40px 40px',
      repeat: -1,
      yoyo: true,
      duration: 15,
      ease: 'sine.inOut',
    })
  }, [])

  const features = [
    {
      icon: <Truck className="w-10 h-10 text-red-600" />,
      title: 'Fast Delivery',
      description:
        'Time-sensitive shipments arrive exactly when promised. Our network runs 24/7 to keep your cargo moving.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      title: 'Safe & Secure',
      description:
        'Every package is handled with precision. Full tracking from pickup to drop-off for complete transparency.',
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10 text-red-600" />,
      title: 'Transparent Pricing',
      description:
        'You pay only what’s quoted. No hidden fees. No last-minute changes.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="px-6 py-20 bg-white overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        backgroundImage:
          'radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight mb-6">
          Why Choose ShipSwift
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
          We deliver more than cargo. We deliver trust, speed, and peace of mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full">{feature.icon}</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
