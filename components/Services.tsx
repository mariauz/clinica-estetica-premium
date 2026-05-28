import { services } from '@/lib/data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Services() {
  const serviceImages = [
    'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/1cb19dab17b8bebaab7235eeb7fa1f56324b85bc.jpg',
    'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/88b505e7fd25fba9c1cdc7caa4a2dd12009e4b92.jpg',
    'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/9638bd8c2ed311e4df74e7cd08a8966b1345e48c.jpg',
    'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/fce78951731622879248a585bcab40c83d50bb41.jpg',
  ]

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
              <article className="glass-card h-full overflow-hidden">
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  width={480}
                  height={320}
                  loading="lazy"
                  className="w-full object-cover aspect-[3/2]"
                />
                <div className="p-7">
                  <span className="mb-4 inline-block text-xs uppercase tracking-[0.22em] text-[var(--color-gold-strong)]">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl text-[var(--color-black)]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
