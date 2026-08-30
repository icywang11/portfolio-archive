"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export type Slide = {
  src: string
  alt: string
  caption: string
}

export function AlbumSlider({ slides, label }: { slides: readonly Slide[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const goTo = useCallback((i: number) => {
    const track = trackRef.current
    const slide = track?.children[i] as HTMLElement | undefined
    if (!track || !slide) return
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const x = track.scrollLeft
      let best = 0
      let dist = Infinity
      Array.from(track.children).forEach((child, i) => {
        const d = Math.abs((child as HTMLElement).offsetLeft - x)
        if (d < dist) {
          dist = d
          best = i
        }
      })
      setIndex(best)
    }
    track.addEventListener("scroll", onScroll, { passive: true })
    return () => track.removeEventListener("scroll", onScroll)
  }, [])

  const lightboxSlide = lightbox !== null ? slides[lightbox] : null

  return (
    <>
      <div className="relative">
        <button
          type="button"
          aria-label="上一张"
          onClick={() => goTo(Math.max(0, index - 1))}
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 text-3xl leading-none text-foreground/70 transition hover:text-foreground"
        >
          <ChevronLeft className="size-7" />
        </button>
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label={label}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-10 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <figure
              key={slide.src}
              className="w-[min(72vw,420px)] shrink-0 snap-center"
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="block w-full text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </button>
              <figcaption className="mt-3 text-[12px] tracking-[0.08em] text-muted-foreground">
                {slide.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <button
          type="button"
          aria-label="下一张"
          onClick={() => goTo(Math.min(slides.length - 1, index + 1))}
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 text-3xl leading-none text-foreground/70 transition hover:text-foreground"
        >
          <ChevronRight className="size-7" />
        </button>
        <div className="mt-3 flex justify-center gap-2" role="tablist" aria-label="相册页码">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`第 ${i + 1} 张`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition",
                i === index ? "bg-foreground" : "bg-foreground/25"
              )}
            />
          ))}
        </div>
      </div>

      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent
          className="max-w-[min(920px,calc(100%-2rem))] rounded-none bg-background p-4 sm:max-w-[920px]"
          showCloseButton
        >
          <DialogHeader>
            <DialogTitle className="font-serif text-xl font-medium italic">
              {lightboxSlide?.caption}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {lightboxSlide?.alt}
            </DialogDescription>
          </DialogHeader>
          {lightboxSlide ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={lightboxSlide.src}
              alt={lightboxSlide.alt}
              className="max-h-[70vh] w-full object-contain"
            />
          ) : null}
          {lightbox !== null && slides.length > 1 ? (
            <div className="flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
              <button
                type="button"
                onClick={() => setLightbox((lightbox - 1 + slides.length) % slides.length)}
              >
                上一张
              </button>
              <span>
                {lightbox + 1} / {slides.length}
              </span>
              <button
                type="button"
                onClick={() => setLightbox((lightbox + 1) % slides.length)}
              >
                下一张
              </button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
