import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import FinalCTA from '@/components/FinalCTA'
import Reveal from '@/components/Reveal'
import SectionTitle from '@/components/SectionTitle'
import { differentials } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Diferenciais | Clínica Luméa',
  description: 'Descubra o que torna a Clínica Luméa única: experiência, curadoria e posicionamento premium em Taubaté-SP.',
}

export default function DiferenciaisPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-space">
          <div className="container-luxury">
            <SectionTitle
              eyebrow="Diferenciais"
              title="Muito além do procedimento: experiência, curadoria e posicionamento."
              description="A proposta da marca é transmitir excelência clínica com estética visual madura, elegante e aspiracional."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {differentials.map((item, index) => (
                <Reveal key={item} delay={index * 0.07}>
                  <div className="glass-card p-6">
                    <div className="mb-4 h-10 w-10 rounded-full bg-[rgba(195,160,108,0.12)]" />
                    <p className="text-base leading-7 text-[var(--color-text)]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-16 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#f4ede4,#fffdfa)] p-8 md:p-12 border border-white/50">
                <h2 className="text-4xl text-[var(--color-black)] mb-4">Nossa missão</h2>
                <p className="text-lg leading-8 text-[var(--color-text)] max-w-3xl">
                  Entregar resultados que respeitem a identidade de cada paciente, com
                  uma experiência que vai muito além do procedimento — do ambiente ao
                  atendimento, do protocolo ao acompanhamento.
                </p>
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
