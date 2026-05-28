import Script from 'next/script'
import About from '@/components/About'
import BeforeAfter from '@/components/BeforeAfter'
import Differentials from '@/components/Differentials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhatsAppButton from '@/components/WhatsAppButton'
import { clinicName, contact } from '@/lib/data'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: clinicName,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Taubaté',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    telephone: contact.phoneDisplay,
    areaServed: 'Taubaté e região',
    url: 'https://mariauz.github.io/clinica-estetica-premium',
  }

  return (
    <>
      <Script
        id="clinic-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <BeforeAfter />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
