import { services } from '@/lib/data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Services() {
  return (
    <section id="servicos" className="section-space">
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
      </div>
    </section>
  )
}
