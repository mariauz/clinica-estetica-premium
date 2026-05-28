import { whatsappNumber } from '@/lib/data'

export default function FinalCTA() {
  return (
    <section className="section-space pt-8">
      <div className="container-luxury">
        <div className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#111111_0%,#2d2722_50%,#9b7a4c_140%)] px-8 py-12 text-white shadow-luxe md:px-14 md:py-16">
          <span className="inline-block rounded-full border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/70">
            Agende sua avaliação
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl leading-tight md:text-6xl">
                Sua próxima versão começa com um cuidado à altura da sua imagem.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                Fale com a equipe, tire dúvidas e agende uma avaliação personalizada
                pelo WhatsApp com atendimento rápido e elegante.
              </p>
            </div>
            <div className="lg:text-right">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--color-black)] transition hover:-translate-y-0.5"
              >
                Falar com a clínica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
