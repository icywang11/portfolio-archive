import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { analyses, analysisNote } from "@/data/analysis"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { Meta, Reveal } from "@/components/ui/Reveal"
import { Stat } from "@/components/ui/WindowFrame"
import { cn } from "@/lib/cn"

export function AnalysisPage() {
  const [active, setActive] = useState<(typeof analyses)[number]["id"]>(analyses[0].id)

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (analyses.some((game) => game.id === hash)) {
      setActive(hash as (typeof analyses)[number]["id"])
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  useEffect(() => {
    const nodes = analyses
      .map((game) => document.getElementById(game.id))
      .filter((node): node is HTMLElement => Boolean(node))
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id as (typeof analyses)[number]["id"])
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.2, 0.4, 0.6] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const jumpTo = (id: (typeof analyses)[number]["id"]) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`)
  }

  return (
    <article>
      <header className="px-5 pt-14 pb-10 md:px-8 md:pt-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <Meta>Gaming / Play Analysis</Meta>
            <h1 className="mt-4 font-serif text-[clamp(48px,8vw,84px)] leading-[0.9] italic">{analysisNote.title}</h1>
            <p className="mt-3 font-serif text-2xl text-mute italic">{analysisNote.enTitle}</p>
            <p className="mt-6 max-w-[34em] text-[16px]">{analysisNote.intro}</p>
          </Reveal>
        </div>
      </header>

      <nav
        className="sticky top-16 z-30 border-y border-line bg-paper/90 backdrop-blur-md"
        aria-label="游戏目录"
      >
        <div className="mx-auto flex max-w-[1180px] gap-2 overflow-x-auto px-5 py-3 md:px-8">
          {analyses.map((game) => (
            <button
              key={game.id}
              type="button"
              data-cursor="OPEN"
              onClick={() => jumpTo(game.id)}
              className={cn(
                "shrink-0 border px-4 py-2 text-left transition-colors duration-300",
                active === game.id ? "border-ink bg-ink text-paper-2" : "border-line bg-paper-2 hover:border-ink",
              )}
            >
              <p className="text-[10px] tracking-[0.16em] uppercase opacity-70">{game.num}</p>
              <p className="font-serif text-lg italic leading-tight">{game.title}</p>
            </button>
          ))}
        </div>
      </nav>

      <div>
        {analyses.map((game) => (
          <section
            key={game.id}
            id={game.id}
            className={cn(
              "scroll-mt-36 border-b border-line px-5 py-16 md:scroll-mt-32 md:px-8 md:py-20",
              game.wash === "beige" && "beige-wash",
              game.wash === "blue" && "blue-wash",
            )}
          >
            <div className="mx-auto max-w-[1180px]">
              <Reveal>
                <Meta>
                  {game.num} / {game.genre}
                </Meta>
                <p className="mt-3 text-[12px] tracking-[0.16em] uppercase text-mute">{game.enTitle}</p>
                <h2 className="mt-2 font-serif text-[clamp(40px,7vw,72px)] leading-[0.9] italic">《{game.title}》</h2>
                <p className="mt-6 max-w-[40em] text-[16px]">{game.lead}</p>
              </Reveal>

              <div className="mt-10 grid gap-8 border-y border-line py-8 md:grid-cols-2 lg:grid-cols-4">
                {game.stats.map((stat) => (
                  <Stat key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>

              <div className="mt-12 grid gap-10 lg:grid-cols-3">
                {game.sections.map((section, index) => (
                  <Reveal key={section.heading} delay={index * 0.04}>
                    <h3 className="border-b border-ink pb-3 font-serif text-2xl italic">{section.heading}</h3>
                    <p className="mt-4 text-[15px] text-mute">{section.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <Meta>Across Three Games</Meta>
            <h2 className="mt-3 font-serif text-4xl italic md:text-5xl">{analysisNote.closeTitle}</h2>
            <p className="mt-6 max-w-[40em] text-[16px] text-mute">{analysisNote.close}</p>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-ink pt-8">
            <Link to="/gaming" className="text-[11px] tracking-[0.16em] uppercase text-mute" data-cursor="BACK">
              ← 游戏经历
            </Link>
            <ArchiveLink to="/internship" cursor="NEXT">
              Internship
            </ArchiveLink>
          </div>
        </div>
      </section>
    </article>
  )
}
