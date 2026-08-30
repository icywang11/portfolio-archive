import type { ReactNode } from "react"

export function WindowFrame({
  title = "Portfolio",
  children,
}: {
  title?: string
  children: ReactNode
}) {
  return (
    <figure className="overflow-hidden rounded-[16px] border border-line bg-paper-2">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="size-2 rounded-full bg-ink/25" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-accent" />
        <span className="ml-2 text-[11px] tracking-[0.16em] uppercase text-mute">{title}</span>
      </div>
      {children}
    </figure>
  )
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="font-serif text-4xl italic leading-none md:text-5xl">{value}</p>
      <p className="mt-2 text-[11px] tracking-[0.16em] uppercase text-mute">{label}</p>
    </div>
  )
}
