import { Link } from "react-router-dom"
import { plays } from "@/data/play"
import { asset } from "@/lib/asset"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { Meta, Reveal } from "@/components/ui/Reveal"
import { WindowFrame } from "@/components/ui/WindowFrame"

export function PlayPage() {
  return (
    <article className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>Works / Play</Meta>
          <h1 className="mt-4 font-serif text-[clamp(48px,8vw,84px)] leading-[0.9] italic">玩法落地</h1>
          <p className="mt-3 font-serif text-2xl text-mute italic">Play, Landed</p>
          <p className="mt-6 max-w-[28em] text-[17px]">我给你看看我做的一些玩法。</p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {plays.map((play, index) => (
            <Reveal key={play.num} delay={index * 0.04}>
              <section className="grid items-start gap-10 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <Meta>
                    {play.num} / {play.enTitle}
                  </Meta>
                  <h2 className="mt-3 font-serif text-4xl italic">{play.title}</h2>
                  <p className="mt-5 text-[16px]">{play.lead}</p>
                  <p className="mt-4 text-[15px] text-mute">{play.body}</p>
                </div>
                <WindowFrame title={play.imageTitle}>
                  <img src={asset(play.image)} alt={play.title} className="w-full bg-paper-2 object-contain" />
                </WindowFrame>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-ink pt-8">
          <Link to="/works" className="text-[11px] tracking-[0.16em] uppercase text-mute" data-cursor="BACK">
            ← Works
          </Link>
          <ArchiveLink to="/internship" cursor="NEXT">
            Internship
          </ArchiveLink>
        </div>
      </div>
    </article>
  )
}
