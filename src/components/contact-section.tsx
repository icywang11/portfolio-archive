"use client"

import { useState, type ReactNode } from "react"
import { toast } from "sonner"
import { ArrowUpRight } from "lucide-react"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const input = document.createElement("textarea")
    input.value = text
    input.style.position = "fixed"
    input.style.opacity = "0"
    document.body.appendChild(input)
    input.select()
    const ok = document.execCommand("copy")
    document.body.removeChild(input)
    return ok
  }
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <h2 className="font-serif text-6xl font-medium italic md:text-8xl">Contact</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted-foreground">
          需要合作或想看更多，直接写信。
        </p>

        <div className="mt-10">
          <CopyRow
            label={`微信 · ${site.wechat}`}
            hint="点击复制微信号"
            value={site.wechat}
            toastText="微信号已复制，请打开微信搜索添加"
          />
          <CopyRow
            label={site.email}
            hint="点击复制邮箱"
            value={site.email}
            toastText="邮箱已复制"
          />
          <a
            href={`mailto:${site.email}`}
            className="flex w-full items-start justify-between border-b border-foreground/15 py-5 text-left"
          >
            <span>
              <span className="flex items-center gap-1 font-serif text-[22px] font-medium">
                发送邮件
                <ArrowUpRight className="size-4" />
              </span>
              <span className="mt-1 block text-[11px] text-muted-foreground">打开邮件客户端</span>
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-[11px] tracking-[0.14em] uppercase">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            GitHub
            <ArrowUpRight className="size-3" />
          </a>
          <CopyTextLink value={site.wechat} toastText="微信号已复制">
            微信
          </CopyTextLink>
          <a href="#icy" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
            回到顶部
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CopyRow({
  label,
  hint,
  value,
  toastText,
}: {
  label: string
  hint: string
  value: string
  toastText: string
}) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      onClick={async () => {
        const ok = await copyText(value)
        if (ok) {
          toast.success(toastText)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        } else {
          toast.error("复制失败，请手动复制")
        }
      }}
      className={cn(
        "flex w-full flex-col items-start border-b border-foreground/15 py-5 text-left",
        copied && "italic"
      )}
    >
      <span className="font-serif text-[22px] font-medium">{label}</span>
      <span className="mt-1 text-[11px] text-muted-foreground">{copied ? "已复制" : hint}</span>
    </button>
  )
}

function CopyTextLink({
  value,
  toastText,
  children,
}: {
  value: string
  toastText: string
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={async () => {
        const ok = await copyText(value)
        toast[ok ? "success" : "error"](ok ? toastText : "复制失败，请手动复制")
      }}
      className="text-muted-foreground hover:text-foreground"
    >
      {children}
    </button>
  )
}
