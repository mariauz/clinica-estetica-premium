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
            <div className="glass-card overflow-hidden">
              <img
                src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a1ac6bb7fc4be292585b7a6889ee12c58b007a0a.jpg"
                alt="Interior da clínica de estética — sala de tratamento e recepção"
                width={960}
                height={640}
                loading="lazy"
                className="w-full object-cover aspect-[3/2]"
              />
              <div className="p-8">
                <p className="text-lg leading-8 text-[var(--color-text)]">
                  Cada protocolo começa com uma leitura cuidadosa do rosto, da pele
                  e dos objetivos da paciente. O foco não é exagero, e sim beleza
                  equilibrada, natural e refinada.
                </p>
              </div>
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
              <div className="glass-card overflow-hidden">
                <img
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/fce78951731622879248a585bcab40c83d50bb41.jpg"
                  alt="Consulta e atendimento na clínica de estética"
                  width={640}
                  height={427}
                  loading="lazy"
                  className="w-full object-cover aspect-[3/2]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
