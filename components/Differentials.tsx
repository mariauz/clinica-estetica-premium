import { differentials } from '@/lib/data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-space">
      <div className="container-luxury">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Muito além do procedimento: experiência, curadoria e posicionamento."
          description="A proposta da marca é transmitir excelência clínica com estética visual madura, elegante e aspiracional."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item} delay={index * 0.07}>
              <div className="glass-card p-6">
                <div className="mb-4 h-10 w-10 rounded-full bg-[rgba(195,160,108,0.12)]" />
                <p className="text-base leading-7 text-[var(--color-text)]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
