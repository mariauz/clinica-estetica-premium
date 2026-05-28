import { navItems, whatsappNumber, clinicName } from '@/lib/data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(246,241,235,0.72)] backdrop-blur-xl">
      <div className="container-luxury flex h-20 items-center justify-between">
        <a href="#" className="text-2xl text-[var(--color-black)]">
          {clinicName}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text)] transition hover:text-[var(--color-black)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          className="btn-secondary"
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  )
}
