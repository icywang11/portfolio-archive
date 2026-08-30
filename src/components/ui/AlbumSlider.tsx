import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { asset } from "@/lib/asset"
import { cn } from "@/lib/cn"

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

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null)
      if (event.key === "ArrowLeft") {
        setLightbox((value) => (value === null ? value : (value - 1 + slides.length) % slides.length))
      }
      if (event.key === "ArrowRight") {
        setLightbox((value) => (value === null ? value : (value + 1) % slides.length))
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox, slides.length])

  const lightboxSlide = lightbox !== null ? slides[lightbox] : null

  return (
    <>
      <div className="relative">
        <button
          type="button"
          aria-label="上一张"
          data-cursor="PREV"
          onClick={() => goTo(Math.max(0, index - 1))}
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 text-mute transition hover:text-ink"
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
            <figure key={slide.src} className="w-[min(72vw,420px)] shrink-0 snap-center">
              <button type="button" data-cursor="VIEW" onClick={() => setLightbox(i)} className="block w-full text-left">
                <img src={asset(slide.src)} alt={slide.alt} className="aspect-[4/3] w-full object-cover" />
              </button>
              <figcaption className="mt-3 text-[12px] tracking-[0.08em] text-mute">{slide.caption}</figcaption>
            </figure>
          ))}
        </div>
        <button
          type="button"
          aria-label="下一张"
          data-cursor="NEXT"
          onClick={() => goTo(Math.min(slides.length - 1, index + 1))}
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 text-mute transition hover:text-ink"
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
              className={cn("h-1.5 w-1.5 rounded-full transition", i === index ? "bg-ink" : "bg-ink/25")}
            />
          ))}
        </div>
      </div>

      {lightboxSlide ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxSlide.caption}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="关闭"
            className="absolute top-5 right-5 text-paper"
            onClick={() => setLightbox(null)}
          >
            <X className="size-5" />
          </button>
          <div className="max-w-[920px]" onClick={(event) => event.stopPropagation()}>
            <img
              src={asset(lightboxSlide.src)}
              alt={lightboxSlide.alt}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.16em] text-paper uppercase">
              <button type="button" onClick={() => setLightbox((lightbox! - 1 + slides.length) % slides.length)}>
                上一张
              </button>
              <span>
                {lightboxSlide.caption} · {lightbox! + 1} / {slides.length}
              </span>
              <button type="button" onClick={() => setLightbox((lightbox! + 1) % slides.length)}>
                下一张
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
