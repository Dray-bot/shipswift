'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null)
  const dotsRef = useRef(null)

  const faqs = [
    {
      question: 'How can I track my shipment?',
      answer: 'You can track your shipment by entering the tracking number on our tracking page. Updates are real-time.'
    },
    {
      question: 'What are your delivery areas?',
      answer: 'We deliver nationwide and internationally. Some remote locations may take longer.'
    },
    {
      question: 'Do you provide insurance for shipments?',
      answer: 'Yes, we offer optional insurance to protect your cargo from loss or damage.'
    },
    {
      question: 'How long does it take to get a quote?',
      answer: 'Quotes are generated instantly once you submit your shipment details.'
    },
    {
      question: 'Can I cancel or change my shipment?',
      answer: 'Yes, you can modify or cancel shipments before they are picked up. Charges may apply depending on the status of the shipment.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit/debit cards, bank transfers, and selected digital wallets.'
    }
  ]

  useEffect(() => {
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
      className="min-h-screen bg-white flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.3) 1px, transparent 1px), radial-gradient(circle, rgba(209,213,219,0.3) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 4px 4px'
      }}
    >
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-3xl p-8 sm:p-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-red-600 text-xl font-bold">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-96 px-6 py-4' : 'max-h-0 px-6'
                }`}
              >
                <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-500 text-sm sm:text-base">
          Can’t find the answer you’re looking for? Contact our support team and we’ll help you out.
        </p>
      </div>
    </main>
  )
}
