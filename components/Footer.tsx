import { clinicName, contact, whatsappNumber } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="pb-10 pt-16">
      <div className="container-luxury">
        <div className="gold-line mb-10" />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-3xl text-[var(--color-black)]">{clinicName}</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Estética premium com posicionamento sofisticado, atendimento exclusivo
              e presença digital de alto padrão.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-strong)]">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text)]">
              <li>{contact.phoneDisplay}</li>
              <li>{contact.email}</li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  Atendimento via WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-strong)]">
              Localização
            </h4>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              {contact.address}
            </p>
            <p className="mt-2 text-sm leading-7 text-muted">Taubaté - SP</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
