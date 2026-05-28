type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="mb-4 inline-block rounded-full border border-[rgba(195,160,108,0.25)] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold-strong)]">
        {eyebrow}
      </span>
      <h2 className="text-4xl leading-tight text-[var(--color-black)] md:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted md:text-lg">
        {description}
      </p>
    </div>
  )
}
