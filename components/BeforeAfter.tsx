import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const cases = [
  {
    title: 'Rejuvenescimento facial',
    summary: 'Melhora de textura, luminosidade e firmeza com aparência natural.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/aae1c35c3b827a57092b7f75db34091045ccc0ae.jpg',
  },
  {
    title: 'Injetáveis e contorno',
    summary: 'Resultado suave, harmonioso e completamente natural.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/89835d405583e937a37d43c262ae2010c03d0da6.jpg',
  },
  {
    title: 'Harmonização facial',
    summary: 'Equilíbrio entre volumes, proporções e identidade da paciente.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b1c9fd736b66a32606dea46090723756cb0b3f8d.jpg',
  },
]

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
              <article className="glass-card overflow-hidden">
                <img
                  src={item.image}
                  alt={`Resultado antes e depois — ${item.title}`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="p-6">
                  <h3 className="text-3xl text-[var(--color-black)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 glass-card p-6 text-center">
            <p className="text-sm text-muted max-w-2xl mx-auto">
              Imagens meramente ilustrativas. Fotos reais das pacientes da clínica serão inseridas aqui com autorização, mantendo o visual limpo e sofisticado da marca.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
