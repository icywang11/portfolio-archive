import { internships } from "@/data/site"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { Meta, Reveal } from "@/components/ui/Reveal"
import { Stat } from "@/components/ui/WindowFrame"

export function InternshipPage() {
  return (
    <article className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>Internship / Record</Meta>
          <h1 className="mt-4 font-serif text-[clamp(48px,8vw,84px)] leading-[0.9] italic">Internship</h1>
          <p className="mt-5 max-w-2xl text-[15px] text-mute">
            两段实习：网易海外运营，得物全球化运营。先写现在这段，再写上一段。
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {internships.map((item) => (
            <Reveal key={item.company}>
              <section>
                <div className="grid gap-4 border-t border-ink pt-8 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-mute">{item.role}</p>
                    <h2 className="mt-2 font-serif text-5xl italic md:text-6xl">{item.company}</h2>
                  </div>
                  <p className="font-serif text-2xl italic text-mute">{item.dates}</p>
                </div>
                <p className="mt-6 max-w-2xl text-[15px] text-mute">{item.summary}</p>
                <div className="mt-10 grid gap-8 border-y border-line py-8 md:grid-cols-2 lg:grid-cols-4">
                  {item.stats.map((stat) => (
                    <Stat key={stat.label} value={stat.value} label={stat.label} />
                  ))}
                </div>
                <ul className="mt-8 space-y-3 text-[15px] text-mute">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="border-l border-line pl-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <ArchiveLink to="/works">See selected works</ArchiveLink>
        </div>
      </div>
    </article>
  )
}
