import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="sobre" className="section-space">
      <div className="container-luxury">
        <SectionTitle
          eyebrow="Sobre a clínica"
          title="Ciência estética com sensibilidade de marca premium."
          description="Uma clínica pensada para unir resultados consistentes, atendimento exclusivo e uma experiência visual sofisticada em cada detalhe."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card p-8 md:p-10">
              <p className="text-lg leading-8 text-[var(--color-text)]">
                Cada protocolo começa com uma leitura cuidadosa do rosto, da pele
                e dos objetivos da paciente. O foco não é exagero, e sim beleza
                equilibrada, natural e refinada.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-6">
              {[
                'Avaliação personalizada e plano individual.',
                'Ambiente acolhedor, elegante e silencioso.',
                'Tecnologias modernas e protocolos combinados.',
              ].map((item) => (
                <div key={item} className="glass-card p-6">
                  <p className="text-base leading-7 text-[var(--color-text)]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
