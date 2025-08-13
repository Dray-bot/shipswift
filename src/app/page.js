import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
