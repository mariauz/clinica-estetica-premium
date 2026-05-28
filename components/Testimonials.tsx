import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const testimonials = [
  {
    name: 'Mariana Alves',
    role: 'Paciente desde 2023',
    text: 'A experiência foi impecável do início ao fim. A clínica transmite confiança, cuidado e muito bom gosto.',
    avatar: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/ebfcdd16773b4004e3cb52563e422a09e3b0cc28.jpg',
  },
  {
    name: 'Patrícia Rocha',
    role: 'Paciente desde 2024',
    text: 'O resultado ficou natural e elegante, exatamente como eu queria. Atendimento extremamente premium.',
    avatar: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/1047f2aa6d090504bed623bae9db458cf5c63b31.jpg',
  },
  {
    name: 'Fernanda Castro',
    role: 'Paciente desde 2022',
    text: 'Ambiente lindo, equipe atenciosa e protocolos realmente personalizados. Foi a melhor experiência que já tive.',
    avatar: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/2ab6e0cfb71ee64249c537a7a74961e26878f3aa.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-space">
      <div className="container-luxury">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Percepção de valor em cada detalhe da experiência."
          description="Pacientes que vivenciaram a proposta da clínica e compartilham sua experiência com sofisticação e cuidado."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <blockquote className="glass-card h-full p-8 flex flex-col justify-between">
                <p className="text-base leading-8 text-[var(--color-text)]">&ldquo;{item.text}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover object-top border border-[rgba(195,160,108,0.3)]"
                  />
                  <div>
                    <strong className="block text-sm font-semibold text-[var(--color-black)]">{item.name}</strong>
                    <span className="text-xs text-muted">{item.role}</span>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 glass-card p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              {[
                ['+2.000', 'Atendimentos realizados'],
                ['98%', 'Índice de satisfação'],
                ['5★', 'Avaliação média'],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block text-5xl text-[var(--color-black)]">{value}</strong>
                  <span className="mt-2 block text-sm text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
