'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'

export default function Terms() {
  const dotsRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    gsap.to(dotsRef.current, {
      backgroundPosition: '40px 40px, 20px 20px',
      duration: 10,
      ease: 'linear',
      repeat: -1
    })
  }, [])

  const sections = [
    { title: 'Account Registration', content: 'Users must create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.' },
    { title: 'Subscriptions & Billing', content: 'ShipSwift offers subscription-based services. Payments are processed securely. Subscriptions automatically renew unless canceled before the renewal date. All fees are non-refundable unless stated otherwise.' },
    { title: 'Service Use & Limitations', content: 'Services must be used in compliance with applicable laws. ShipSwift reserves the right to suspend or terminate accounts engaging in illegal, harmful, or fraudulent activity.' },
    { title: 'Shipment Responsibility & Insurance', content: 'Users must provide accurate shipment details. ShipSwift provides optional insurance for cargo. We are not liable for delays caused by weather, customs, or events outside our control.' },
    { title: 'Intellectual Property', content: 'All content, software, and branding on ShipSwift are the property of ShipSwift or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.' },
    { title: 'Privacy & Data Use', content: 'We collect and process user data as described in our Privacy Policy. By using our platform, you consent to this collection and processing.' },
    { title: 'Limitation of Liability', content: 'ShipSwift is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our maximum liability is limited to the fees paid for the specific service in question.' },
    { title: 'Termination', content: 'We may terminate or suspend accounts for violations of these terms. Users may also close their accounts at any time by following account settings procedures.' },
    { title: 'Modifications', content: 'ShipSwift reserves the right to modify these Terms & Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.' },
    { title: 'Governing Law', content: 'These Terms are governed by the laws of the jurisdiction in which ShipSwift operates. Any disputes will be subject to the exclusive jurisdiction of local courts.' }
  ]

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main
      ref={dotsRef}
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(209,213,219,0.3) 1px, transparent 1px), radial-gradient(circle, rgba(209,213,219,0.3) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 4px 4px'
      }}
    >
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-3xl p-8 sm:p-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-900 hover:text-red-600 transition"
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 py-2' : 'max-h-0'}`}
              >
                <p className="text-gray-700 text-sm sm:text-base">{section.content}</p>
              </div>
            </div>
          ))}
          <p className="mt-6">
            By using ShipSwift, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
    </main>
  )
}
