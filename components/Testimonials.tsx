import { testimonials } from '@/lib/data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-space">
      <div className="container-luxury">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Percepção de valor em cada detalhe da experiência."
          description="Esta seção reforça confiança, credibilidade e desejo de agendamento com linguagem sofisticada e acolhedora."
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
      </div>
    </section>
  )
}
