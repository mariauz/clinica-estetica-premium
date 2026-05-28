import { cases } from '@/lib/data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function BeforeAfter() {
  return (
    <section id="resultados" className="section-space">
      <div className="container-luxury">
        <SectionTitle
          eyebrow="Antes e depois"
          title="Resultados que valorizam identidade, não exageros."
          description="Casos reais com transformações elegantes e naturais. Cada resultado é único e personalizado."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-card overflow-hidden p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex aspect-[4/5] items-end rounded-[1.5rem] bg-[linear-gradient(180deg,#efe6dc_0%,#dbcab8_100%)] p-4">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs tracking-[0.2em] text-[var(--color-black)]">ANTES</span>
                  </div>
                  <div className="flex aspect-[4/5] items-end rounded-[1.5rem] bg-[linear-gradient(180deg,#fffdfa_0%,#ead8c4_100%)] p-4">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs tracking-[0.2em] text-[var(--color-black)]">DEPOIS</span>
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-3xl text-[var(--color-black)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 glass-card overflow-hidden">
            <img
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/4f12dfc0fea210a1ba862699f29b6052f0a1faad.jpg"
              alt="Exemplo de resultado antes e depois de tratamento estético"
              width={1200}
              height={600}
              loading="lazy"
              className="w-full object-cover max-h-[400px]"
            />
            <div className="p-6 text-center">
              <p className="text-sm text-muted max-w-2xl mx-auto">
                Fotos com autorização das pacientes. Os resultados individuais podem variar conforme o protocolo e perfil de cada pessoa.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
