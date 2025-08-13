'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-900 py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 text-red-600">ShipSwift</h3>
          <p className="text-sm text-gray-600">
            Fast, reliable, and secure cargo delivery across the globe. Trusted by businesses worldwide.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-red-600 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition">Services</Link></li>
            <li><Link href="/careers" className="hover:text-red-600 transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-red-600 transition">FAQ</Link></li>
            <li><Link href="/tracking" className="hover:text-red-600 transition">Track Shipment</Link></li>
            <li><Link href="/quote" className="hover:text-red-600 transition">Get a Quote</Link></li>
            <li><Link href="/terms" className="hover:text-red-600 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Follow Us</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition">
              <Facebook className="w-5 h-5"/>
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition">
              <Twitter className="w-5 h-5"/>
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition">
              <Linkedin className="w-5 h-5"/>
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition">
              <Instagram className="w-5 h-5"/>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Contact us: <a href="mailto:support@shipswift.com" className="hover:text-red-600 transition">support@shipswift.com</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShipSwift. All rights reserved.
      </div>

      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-gradient-to-tr from-red-200 via-white to-red-100 rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tr from-red-200 via-white to-red-100 rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
    </footer>
  )
}
