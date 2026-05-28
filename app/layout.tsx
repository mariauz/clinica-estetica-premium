import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mariauz.github.io/clinica-estetica-premium'),
  title: 'Clínica Luméa | Estética premium em Taubaté',
  description:
    'Clínica de estética premium em Taubaté-SP com protocolos personalizados, tecnologia avançada e experiência sofisticada.',
  keywords: [
    'clínica de estética Taubaté',
    'estética premium',
    'harmonização facial Taubaté',
    'tratamentos estéticos Taubaté',
  ],
  openGraph: {
    title: 'Clínica Luméa | Estética premium em Taubaté',
    description:
      'Tecnologia, elegância e resultados naturais em uma experiência de alto padrão.',
    url: 'https://mariauz.github.io/clinica-estetica-premium',
    siteName: 'Clínica Luméa',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mariauz.github.io/clinica-estetica-premium',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
