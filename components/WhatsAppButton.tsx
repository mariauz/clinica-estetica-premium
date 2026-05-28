import { MessageCircle } from 'lucide-react'
import { whatsappNumber } from '@/lib/data'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
