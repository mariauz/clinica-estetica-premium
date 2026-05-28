import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import FinalCTA from '@/components/FinalCTA'
import Reveal from '@/components/Reveal'
import SectionTitle from '@/components/SectionTitle'
import { testimonials } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Depoimentos | Clínica Luméa',
  description: 'Veja o que as pacientes da Clínica Luméa dizem sobre a experiência premium em Taubaté-SP.',
}

export default function DepoimentosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-space">
          <div className="container-luxury">
            <SectionTitle
              eyebrow="Depoimentos"
              title="Percepção de valor em cada detalhe da experiência."
              description="Pacientes que vivenciaram a proposta da clínica e compartilham sua experiência com sofisticação e cuidado."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.08}>
                  <blockquote className="glass-card h-full p-8">
                    <p className="text-base leading-8 text-[var(--color-text)]">"{item.text}"</p>
                    <footer className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-gold-strong)]">
                      {item.name}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-16 glass-card p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-3 text-center">
                  {[
                    ['+2.000', 'Atendimentos realizados'],
                    ['98%', 'Índice de satisfação'],
                    ['5★', 'Avaliação média'],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <strong className="block text-5xl text-[var(--color-black)]">{value}</strong>
                      <span className="mt-2 block text-sm text-muted">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
