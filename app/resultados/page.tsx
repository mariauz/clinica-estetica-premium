import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import FinalCTA from '@/components/FinalCTA'
import Reveal from '@/components/Reveal'
import SectionTitle from '@/components/SectionTitle'

export const metadata: Metadata = {
  title: 'Resultados | Clínica Luméa',
  description: 'Veja resultados visuais de procedimentos estéticos da Clínica Luméa em Taubaté-SP.',
}

const results = [
  {
    title: 'Rejuvenescimento facial',
    summary: 'Melhora global da textura, luminosidade e firmeza com acabamento natural.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/aae1c35c3b827a57092b7f75db34091045ccc0ae.jpg',
  },
  {
    title: 'Injetáveis e contorno',
    summary: 'Harmonização suave com definição elegante e sem exageros.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/89835d405583e937a37d43c262ae2010c03d0da6.jpg',
  },
  {
    title: 'Uniformização da pele',
    summary: 'Aparência mais uniforme, refinada e com viço renovado.',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b1c9fd736b66a32606dea46090723756cb0b3f8d.jpg',
  },
]

export default function ResultadosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-space">
          <div className="container-luxury">
            <SectionTitle
              eyebrow="Antes e depois"
              title="Resultados que valorizam identidade, não exageros."
              description="Cada resultado é único e personalizado. Aqui você encontra casos visuais com transformações elegantes e naturais."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {results.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="glass-card overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={`Resultado visual de ${item.title}`}
                        width={900}
                        height={650}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/88 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-black)] shadow-sm">
                        Caso real
                      </div>
                    </div>

                    <div className="p-6 md:p-7">
                      <h3 className="text-3xl text-[var(--color-black)]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-card overflow-hidden">
                  <img
                    src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c1a383360e77e17d0063fb5e61041f1fc55671e2.jpg"
                    alt="Comparativo antes e depois de rejuvenescimento facial"
                    width={1200}
                    height={780}
                    loading="lazy"
                    className="w-full h-full min-h-[320px] object-cover"
                  />
                </div>

                <div className="glass-card p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-flex w-fit rounded-full border border-[rgba(195,160,108,0.24)] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
                    Excelência visual
                  </span>
                  <h2 className="mt-5 text-4xl leading-tight text-[var(--color-black)]">
                    Resultados sutis, sofisticados e coerentes com cada rosto.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[var(--color-text)]">
                    A proposta da clínica é entregar melhoria visível com elegância,
                    preservando naturalidade, expressão e identidade individual.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    As imagens apresentadas nesta página funcionam como referência visual
                    de acabamento estético. As fotos autorais da clínica podem substituir
                    essas referências a qualquer momento.
                  </p>
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
