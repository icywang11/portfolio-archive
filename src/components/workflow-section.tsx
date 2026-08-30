"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { dataSkills, robotSkills, yuqingGallery } from "@/lib/content"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function WorkflowSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="skills" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">02 / AI</p>
        <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
          AI <em className="italic text-muted-foreground">工作流</em>
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-muted-foreground">
          用机器人把运营做轻，用数据把决策做实。
        </p>

        <div className="mt-12 grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="border-b border-foreground pb-3.5 font-serif text-2xl font-medium">
              搭建智能化机器人
            </h3>
            <div className="mt-1">
              {robotSkills.map((item) =>
                "gallery" in item && item.gallery ? (
                  <button
                    key={item.num}
                    type="button"
                    onClick={() => setOpen(true)}
                    className="flex w-full items-start gap-4 border-b border-foreground/15 py-4 text-left"
                  >
                    <span className="font-serif text-[13px] tracking-[0.16em] text-muted-foreground">
                      {item.num}
                    </span>
                    <span className="flex-1">
                      <strong className="block font-serif text-lg font-medium">{item.title}</strong>
                      <em className="mt-1 block text-[13px] not-italic text-muted-foreground">
                        {item.hint}
                      </em>
                    </span>
                    <ArrowUpRight className="mt-1 size-4 shrink-0" />
                  </button>
                ) : (
                  <div key={item.num} className="flex items-start gap-4 border-b border-foreground/15 py-4">
                    <span className="font-serif text-[13px] tracking-[0.16em] text-muted-foreground">
                      {item.num}
                    </span>
                    <span>
                      <strong className="block font-serif text-lg font-medium">{item.title}</strong>
                      <em className="mt-1 block text-[13px] not-italic text-muted-foreground">
                        {item.hint}
                      </em>
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="border-b border-foreground pb-3.5 font-serif text-2xl font-medium">
              数据分析
            </h3>
            <div className="mt-1">
              {dataSkills.map((item) =>
                "href" in item && item.href ? (
                  <a
                    key={item.num}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 border-b border-foreground/15 py-4"
                  >
                    <span className="font-serif text-[13px] tracking-[0.16em] text-muted-foreground">
                      {item.num}
                    </span>
                    <span className="flex-1">
                      <strong className="block font-serif text-lg font-medium">{item.title}</strong>
                      <em className="mt-1 block text-[13px] not-italic text-muted-foreground">
                        {item.hint}
                      </em>
                    </span>
                    <ArrowUpRight className="mt-1 size-4 shrink-0" />
                  </a>
                ) : (
                  <div key={item.num} className="flex items-start gap-4 border-b border-foreground/15 py-4">
                    <span className="font-serif text-[13px] tracking-[0.16em] text-muted-foreground">
                      {item.num}
                    </span>
                    <span>
                      <strong className="block font-serif text-lg font-medium">{item.title}</strong>
                      <em className="mt-1 block text-[13px] not-italic text-muted-foreground">
                        {item.hint}
                      </em>
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <p className="mt-10">
          <a
            href="#ai-works"
            className="inline-flex items-center gap-1 text-[13px] tracking-[0.08em]"
          >
            查看落地作品
            <ArrowUpRight className="size-3.5" />
          </a>
        </p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[min(880px,calc(100%-2rem))] rounded-none bg-background p-5 sm:max-w-[880px]">
          <DialogHeader>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              {yuqingGallery.kicker}
            </p>
            <DialogTitle className="font-serif text-2xl font-medium">
              {yuqingGallery.title}
            </DialogTitle>
            <DialogDescription>{yuqingGallery.caption}</DialogDescription>
          </DialogHeader>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={yuqingGallery.src} alt={yuqingGallery.caption} className="w-full" />
        </DialogContent>
      </Dialog>
    </section>
  )
}
