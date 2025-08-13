'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FileText, PackageCheck, SatelliteDish, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const stepsRef = useRef([])
  const iconsRef = useRef([])
  const arrowsRef = useRef([])

  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-red-600" />,
      title: 'Request a Quote',
      description:
        'Submit your details online and get a transparent, instant price with no hidden fees.',
    },
    {
      icon: <PackageCheck className="w-10 h-10 text-red-600" />,
      title: 'We Pick Up',
      description: 'Our trained team collects your cargo at your preferred location and time.',
    },
    {
      icon: <SatelliteDish className="w-10 h-10 text-red-600" />,
      title: 'Track in Real Time',
      description: 'Stay updated with live tracking and notifications throughout the journey.',
    },
    {
      icon: <Clock className="w-10 h-10 text-red-600" />,
      title: 'On-Time Delivery',
      description: 'Your shipment arrives exactly when promised, safe and secure.',
    },
  ]

  useEffect(() => {
    // Animate steps on scroll
    stepsRef.current.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
        }
      )
    })

    // Animate icons with pop-in effect
    iconsRef.current.forEach((icon, i) => {
      gsap.fromTo(
        icon,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: icon,
            start: 'top 90%',
          },
        }
      )
    })

    // Animate arrows drawing on scroll
    arrowsRef.current.forEach((arrow) => {
      if (arrow) {
        const length = arrow.getTotalLength()
        gsap.set(arrow, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(arrow, {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: arrow,
            start: 'top 95%',
          },
        })
      }
    })

    // Animate dot-pattern subtly
    gsap.to('.dot-pattern-bg', {
      backgroundPosition: '40px 40px',
      repeat: -1,
      yoyo: true,
      duration: 15,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section
      className="px-4 sm:px-6 py-16 sm:py-20 bg-white dot-pattern-bg relative overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6">
          How It Works
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-14 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
          A clear, efficient process designed for speed and reliability.
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center relative"
            >
              <div className="flex justify-center mb-5">
                <div
                  ref={(el) => (iconsRef.current[index] = el)}
                  className="p-4 bg-red-50 rounded-full"
                >
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{step.description}</p>

              {/* Horizontal arrows for desktop */}
              {index < steps.length - 1 && (
                <svg
                  className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="24"
                  viewBox="0 0 60 24"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    ref={(el) => (arrowsRef.current[index] = el)}
                    d="M0 12 L50 12 M50 12 L44 6 M50 12 L44 18"
                  />
                </svg>
              )}

              {/* Vertical arrows for small screens */}
              {index < steps.length - 1 && (
                <svg
                  className="block lg:hidden absolute left-1/2 transform -translate-x-1/2 top-full mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="40"
                  viewBox="0 0 24 40"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    ref={(el) => (arrowsRef.current[index + steps.length] = el)}
                    d="M12 0 L12 30 M12 30 L6 24 M12 30 L18 24"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
