import { gameDepths, games } from "@/data/games"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { Meta, Reveal } from "@/components/ui/Reveal"

export function GamingPage() {
  return (
    <article className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>Gaming / Play History</Meta>
          <h1 id="gaming" className="mt-4 font-serif text-[clamp(48px,8vw,84px)] leading-[0.9] italic">
            游戏经历
          </h1>
        </Reveal>

        <div className="mt-16 space-y-16">
          {gameDepths.map((depth) => {
            const items = games.filter((game) => game.depth === depth)
            return (
              <section key={depth}>
                <Reveal>
                  <Meta>{depth === "深度体验" ? "Deep Play" : "Also Played"}</Meta>
                  <h2 className="mt-3 font-serif text-4xl italic">{depth}</h2>
                </Reveal>

                <div className="mt-6 hidden border-t border-ink md:block">
                  <div className="grid grid-cols-[140px_1fr] gap-8 border-b border-line py-3 text-[11px] tracking-[0.16em] uppercase text-mute lg:grid-cols-[160px_140px_1fr]">
                    <span>游戏类型</span>
                    <span className="hidden lg:block">体验维度</span>
                    <span>游戏及成就</span>
                  </div>
                  {items.map((game, index) => (
                    <Reveal key={game.title} delay={index * 0.03}>
                      <article className="grid grid-cols-[140px_1fr] items-start gap-8 border-b border-line py-8 lg:grid-cols-[160px_140px_1fr]">
                        <p className="pt-2 text-[11px] tracking-[0.16em] uppercase text-mute">{game.type}</p>
                        <p className="hidden pt-2 text-[13px] text-mute lg:block">{game.depth}</p>
                        <div>
                          <h3 className="font-serif text-3xl italic md:text-4xl">《{game.title}》</h3>
                          <p className="mt-3 max-w-2xl text-[15px] text-mute">{game.body}</p>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 border-t border-ink md:hidden">
                  {items.map((game, index) => (
                    <Reveal key={game.title} delay={index * 0.03}>
                      <article className="border-b border-line py-7">
                        <p className="text-[11px] tracking-[0.16em] uppercase text-mute">
                          {game.type} · {game.depth}
                        </p>
                        <h3 className="mt-2 font-serif text-3xl italic">《{game.title}》</h3>
                        <p className="mt-3 text-[15px] text-mute">{game.body}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-16 flex flex-wrap gap-8">
          <ArchiveLink to="/internship">See internship</ArchiveLink>
          <ArchiveLink to="/">Back to index</ArchiveLink>
        </div>
      </div>
    </article>
  )
}
