'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { whatsappNumber } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="container-luxury grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex rounded-full border border-[rgba(195,160,108,0.25)] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-strong)]">
            Estética premium em Taubaté-SP
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[0.95] text-[var(--color-black)] md:text-7xl">
            Beleza refinada com tecnologia, exclusividade e resultado natural.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            Uma experiência de alto padrão para pacientes que valorizam sofisticação,
            cuidado personalizado e protocolos pensados nos mínimos detalhes.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#servicos" className="btn-primary">
              Conhecer protocolos
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="btn-secondary"
            >
              Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              ['+2.000', 'Atendimentos'],
              ['98%', 'Satisfação'],
              ['Premium', 'Experiência'],
            ].map(([value, label]) => (
              <div key={label} className="glass-card p-5 text-center">
                <strong className="block text-2xl font-semibold text-[var(--color-black)]">
                  {value}
                </strong>
                <span className="mt-1 block text-sm text-muted">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(195,160,108,0.22),transparent_65%)] blur-2xl" />
          <div className="glass-card overflow-hidden p-4 shadow-luxe">
            <div className="grid min-h-[520px] rounded-[2rem] bg-[linear-gradient(160deg,#f4ede4_0%,#fffdfa_52%,#ead9c6_100%)] p-8">
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-white/80 px-4 py-2 text-xs tracking-[0.2em] text-[var(--color-gold-strong)]">
                  LUXURY CARE
                </span>
                <span className="text-sm text-muted">Taubaté • SP</span>
              </div>
              <div className="mt-auto">
                <div className="gold-line mb-6" />
                <p className="max-w-md text-lg leading-8 text-[var(--color-text)]">
                  Design limpo, atmosfera elegante e presença digital de clínica
                  internacional para transmitir confiança desde o primeiro impacto.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
