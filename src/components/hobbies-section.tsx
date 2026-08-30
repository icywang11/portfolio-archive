"use client"

import { useState } from "react"
import { hobbies } from "@/lib/content"
import { AlbumSlider } from "@/components/album-slider"
import { cn } from "@/lib/utils"

export function HobbiesSection() {
  const [active, setActive] = useState<(typeof hobbies)[number]["id"]>("music")
  const current = hobbies.find((hobby) => hobby.id === active) ?? hobbies[0]

  return (
    <section id="interests" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <SectionHead num="04 / HOBBY" title="兴趣" em="爱好" lead="音乐、摄影与旅行。" />

        <nav
          className="mt-10 grid grid-cols-3 border-t border-foreground"
          role="tablist"
          aria-label="爱好分类"
        >
          {hobbies.map((hobby) => (
            <button
              key={hobby.id}
              type="button"
              role="tab"
              aria-selected={hobby.id === active}
              onClick={() => setActive(hobby.id)}
              className={cn(
                "border-b border-foreground/15 py-4 text-left text-[11px] tracking-[0.16em] uppercase",
                hobby.id === active ? "italic text-foreground" : "text-muted-foreground"
              )}
            >
              {hobby.tab}
            </button>
          ))}
        </nav>

        <article className="pt-10">
          <h3 className="font-serif text-3xl font-medium">{current.title}</h3>
          <p className="mt-3 font-serif text-lg italic text-muted-foreground">{current.lyric}</p>
          <div className="mt-8">
            <AlbumSlider slides={current.slides} label={current.title} />
          </div>
        </article>
      </div>
    </section>
  )
}

function SectionHead({
  num,
  title,
  em,
  lead,
}: {
  num: string
  title: string
  em: string
  lead: string
}) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{num}</p>
      <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
        {title} <em className="italic text-muted-foreground">{em}</em>
      </h2>
      <p className="mt-3 max-w-xl text-[15px] text-muted-foreground">{lead}</p>
    </div>
  )
}
