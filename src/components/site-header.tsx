"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { site, nav } from "@/lib/content"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [active, setActive] = useState("icy")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const ids = ["icy", ...nav.map((item) => item.href.slice(1))]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.25, 0.5] }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-foreground/15 bg-[color-mix(in_srgb,var(--paper)_92%,white)] backdrop-blur-md"
          : "border-transparent bg-[color-mix(in_srgb,var(--paper)_78%,white)] backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1040px] items-center justify-between px-6">
        <a
          href="#icy"
          className="font-serif text-[22px] font-medium tracking-[0.08em] text-foreground"
        >
          {site.name}
        </a>

        <nav
          aria-label="导航"
          className="hidden items-center gap-6 text-[11px] tracking-[0.16em] uppercase lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-muted-foreground transition-colors hover:text-foreground",
                active === item.href.slice(1) && "italic text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none border border-foreground lg:hidden"
                  aria-label="打开菜单"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(320px,86vw)] rounded-none bg-background p-0"
            >
              <SheetHeader className="border-b border-foreground/15 px-6 py-5">
                <SheetTitle className="font-serif text-xl font-medium italic">
                  Index
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-6 py-4" aria-label="移动导航">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "border-b border-foreground/10 py-4 font-serif text-2xl font-medium",
                      active === item.href.slice(1)
                        ? "italic text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[11px] tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? window.scrollY / height : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-px origin-left bg-foreground"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
