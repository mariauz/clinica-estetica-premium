import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import FinalCTA from '@/components/FinalCTA'
import Reveal from '@/components/Reveal'
import SectionTitle from '@/components/SectionTitle'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Serviços | Clínica Luméa',
  description: 'Conheça os protocolos premium da Clínica Luméa em Taubaté-SP: rejuvenescimento, laser, corporais e injetáveis.',
}

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-space">
          <div className="container-luxury">
            <SectionTitle
              eyebrow="Serviços premium"
              title="Protocolos de alto padrão para rosto e corpo."
              description="Uma curadoria de tratamentos sofisticados para pacientes que buscam performance, segurança e acabamento natural."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.08}>
                  <article className="glass-card h-full p-7">
                    <span className="mb-4 inline-block text-xs uppercase tracking-[0.22em] text-[var(--color-gold-strong)]">
                      0{index + 1}
                    </span>
                    <h3 className="text-3xl text-[var(--color-black)]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-16 glass-card p-8 md:p-10">
                <h2 className="text-4xl text-[var(--color-black)] mb-4">Como funciona?</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { step: '01', title: 'Avaliação inicial', desc: 'Consulta individualizada para entender seu perfil, histórico e objetivos estéticos.' },
                    { step: '02', title: 'Protocolo personalizado', desc: 'Elaboramos um plano exclusivo com os tratamentos mais indicados para você.' },
                    { step: '03', title: 'Acompanhamento contínuo', desc: 'Monitoramos sua evolução e ajustamos o protocolo para resultados duradouros.' },
                  ].map((item) => (
                    <div key={item.step}>
                      <span className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-strong)]">{item.step}</span>
                      <h4 className="mt-2 text-2xl text-[var(--color-black)]">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.desc}</p>
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
