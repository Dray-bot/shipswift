'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Lottie from 'lottie-react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutUs() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const lottieRef = useRef(null)
  const [animationData, setAnimationData] = useState(null)

  // Fetch Lottie JSON
  useEffect(() => {
    fetch('/lottie/Ship.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
  }, [])

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    const textElements = textRef.current.querySelectorAll('h2, p')
    gsap.fromTo(
      textElements,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      }
    )

    if (lottieRef.current) {
      gsap.fromTo(
        lottieRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lottieRef.current,
            start: 'top 80%',
          },
        }
      )
    }

    gsap.to(sectionRef.current, {
      backgroundPosition: '40px 40px',
      repeat: -1,
      yoyo: true,
      duration: 15,
      ease: 'sine.inOut',
    })
  }, [animationData])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 text-black overflow-hidden bg-white"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2 items-center">
        
        {/* Text */}
        <div ref={textRef}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            ShipSwift delivers cargo worldwide with precision and speed. Our mission is to simplify logistics while maintaining strict safety standards and reliable timing.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our experienced team and global network ensure shipments arrive on schedule and without complications, whether across town or across continents.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Businesses and individuals trust us to move their cargo with care, efficiency, and accountability.
          </p>
        </div>

        {/* Lottie Animation */}
        <div ref={lottieRef} className="flex justify-center">
          {animationData && (
            <Lottie 
              animationData={animationData}
              loop
              className="w-full max-w-md"
            />
          )}
        </div>
      </div>
    </section>
  )
}
