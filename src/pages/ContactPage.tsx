import { useState } from "react"
import { site } from "@/data/site"
import { Meta, Reveal } from "@/components/ui/Reveal"
import { ArchiveLink } from "@/components/ui/ArchiveLink"

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export function ContactPage() {
  return (
    <div className="px-5 py-14 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>Contact / Archive</Meta>
          <h1 className="mt-4 font-serif text-[clamp(48px,9vw,92px)] leading-[0.88] italic">
            Have a project in mind?
          </h1>
          <p className="mt-6 font-serif text-3xl italic text-mute">Let&apos;s talk.</p>
          <p className="mt-5 max-w-xl text-[15px] text-mute">需要合作、想看更多案例，或直接聊社区和活动，写信即可。</p>
        </Reveal>

        <div className="mt-14 max-w-xl">
          <CopyRow label="Email" value={site.email} />
          <CopyRow label="WeChat" value={site.wechat} />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="flex items-center justify-between border-b border-line py-5"
          >
            <span className="text-[11px] tracking-[0.16em] uppercase text-mute">GitHub</span>
            <span className="font-serif text-2xl italic">icywang11</span>
          </a>
        </div>

        <Reveal className="mt-10">
          <ArchiveLink href={`mailto:${site.email}`} cursor="MAIL">
            Open mail client
          </ArchiveLink>
        </Reveal>
      </div>
    </div>
  )
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      data-cursor="COPY"
      onClick={async () => {
        const ok = await copyText(value)
        if (!ok) return
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1600)
      }}
      className={`flex w-full items-center justify-between border-b border-line py-5 text-left transition-colors duration-300 ${
        copied ? "bg-accent/50" : "hover:bg-beige/40"
      }`}
    >
      <span className="text-[11px] tracking-[0.16em] uppercase text-mute">{label}</span>
      <span className="font-serif text-2xl italic">{copied ? "Copied ✓" : value}</span>
    </button>
  )
}
