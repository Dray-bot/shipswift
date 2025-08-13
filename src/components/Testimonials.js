'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'Business Owner',
      text: 'ShipSwift made our deliveries so much faster. We’ve never had such a smooth experience.',
      image: 'https://www.cov.com/-/media/bynder/bio-photos/w/wilson_sarah_1000x714_env.jpg',
    },
    {
      name: 'Justin K.',
      role: 'Logistics Manager',
      text: 'Their tracking system is top-notch. I know exactly where my shipment is at all times.',
      image: 'https://www.knobbe.com/wp-content/uploads/2023/01/Theam_Justin_HI_20220928-1024x683.jpg',
    },
    {
      name: 'Priya M.',
      role: 'E-commerce Seller',
      text: 'They are reliable and professional. My cargo always arrives on schedule.',
      image: 'https://www.adgully.com/img/800/53433_priya-monga-rc-m.jpg',
    },
    {
      name: 'Leo D.',
      role: 'Warehouse Head',
      text: 'Exceptional service. Their team always communicates proactively.',
      image: 'https://media.npr.org/assets/img/2021/04/06/charles-d.-king-photo-courtesy-of-the-collins-jackson-agency_custom-0d40a37caef8c8fc6905124642ea11431d510fe1.jpg?s=1100&c=50&f=jpeg',
    },
  ]

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            delay: idx * 0.2,
          }
        )
      }
    })

    gsap.to('.dot-pattern-bg', {
      backgroundPosition: '30px 30px',
      repeat: -1,
      yoyo: true,
      duration: 15,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 px-6 overflow-hidden dot-pattern-bg"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px),
          radial-gradient(circle, rgba(209,213,219,0.4) 1px, transparent 1px)`,
        backgroundSize: '22px 22px',
        backgroundPosition: '0 0, 6px 6px',
      }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-16">
          What Our Customers Say
        </h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="testimonial-card relative bg-red-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="absolute -top-6 -left-6 text-red-200 text-7xl select-none">“</div>
              <div className="flex justify-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-100"
                />
              </div>
              <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">{t.text}</p>
              <h3 className="font-bold text-black text-lg sm:text-xl">{t.name}</h3>
              <p className="text-red-600 text-sm sm:text-base">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="testimonial-card relative bg-red-50 p-8 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 text-center mx-4 opacity-0"
                >
                  <div className="absolute -top-6 -left-6 text-red-200 text-7xl select-none">“</div>
                  <div className="flex justify-center mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-red-100"
                    />
                  </div>
                  <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">{t.text}</p>
                  <h3 className="font-bold text-black text-lg sm:text-xl">{t.name}</h3>
                  <p className="text-red-600 text-sm sm:text-base">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Blurred SaaS gradient shapes */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-red-100 rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red-100 rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-red-50 rounded-full opacity-20 filter blur-2xl pointer-events-none"></div>
    </section>
  )
}

