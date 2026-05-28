'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems, whatsappNumber, clinicName } from '@/lib/data'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(246,241,235,0.72)] backdrop-blur-xl">
      <div className="container-luxury flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl text-[var(--color-black)]">
          {clinicName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition hover:text-[var(--color-black)] ${
                pathname === item.href
                  ? 'font-semibold text-[var(--color-black)]'
                  : 'text-[var(--color-text)]'
              }`}
            >
              {item.label}
            </Link>
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
