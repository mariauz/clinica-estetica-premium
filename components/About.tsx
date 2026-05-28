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
                src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/51793dc8fe0216db25bff5cf7b965b074e3e5d21.jpg"
                alt="Sala de espera da Clínica Luméa — ambiente elegante e acolhedor"
                width={900}
                height={600}
                loading="lazy"
                className="w-full object-cover aspect-[3/2]"
              />
              <div className="p-8">
                <p className="text-lg leading-8 text-[var(--color-text)]">
                  Cada protocolo começa com uma leitura cuidadosa do rosto, da pele
                  e dos objetivos da paciente. O foco não é exagero, e sim beleza
                  equilibrada, natural e refinada.
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--color-text)]">
                  Nossa equipe combina formação técnica avançada com sensibilidade
                  estética para entregar resultados que valorizam a identidade
                  única de cada pessoa.
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
                'Equipe com formação contínua e atualizada.',
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
