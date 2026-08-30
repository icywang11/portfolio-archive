import { useState } from "react"
import { hobbies, site, skills } from "@/data/site"
import { asset } from "@/lib/asset"
import { cn } from "@/lib/cn"
import { AlbumSlider } from "@/components/ui/AlbumSlider"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { Meta, Reveal } from "@/components/ui/Reveal"

export function AboutPage() {
  const [active, setActive] = useState<(typeof hobbies)[number]["id"]>("music")
  const current = hobbies.find((hobby) => hobby.id === active) ?? hobbies[0]

  return (
    <div className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>About / Editorial Profile</Meta>
          <h1 className="mt-4 font-serif text-[clamp(48px,8vw,84px)] leading-[0.9] italic">About Me</h1>
        </Reveal>

        <div className="mt-12 grid items-end gap-10 md:grid-cols-[0.42fr_0.58fr] md:gap-16">
          <Reveal>
            <img
              src={asset("/avatar.jpg")}
              alt={site.name}
              className="aspect-[3/4] w-full rounded-[16px] object-cover object-[center_18%]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="space-y-4 text-[15px]">
              <AboutRow label="Name" value={site.name} />
              <AboutRow label="Focus" value={site.focus} />
              <AboutRow label="Location" value={site.location} />
              <AboutRow label="Current" value={site.status} />
            </dl>
            <p className="mt-8 max-w-[36em] text-[16px]">{site.intro}</p>
            <p className="mt-4 max-w-[36em] text-[15px] text-mute">
              我不是只做物料的人。社区、活动和复盘要连成工作流：触达可计量，决策回得去下一场。
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] tracking-[0.14em] uppercase text-mute">
              {site.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="mt-6">
              <ArchiveLink href={asset(site.resume)} download={site.resumeFileName} cursor="SAVE">
                Download resume
              </ArchiveLink>
            </div>
          </Reveal>
        </div>

        <section className="mt-20">
          <Reveal>
            <Meta>My Approach</Meta>
            <h2 className="mt-3 font-serif text-4xl italic">先把问题看清，再把动作做成系统。</h2>
            <p className="mt-4 max-w-2xl text-[15px] text-mute">
              增长、活跃、舆情不是三场独立活动。我习惯用同一套节奏：研究社区 → 定目标 → 落地场次 → 取数迭代。
            </p>
          </Reveal>
        </section>

        <section className="mt-20">
          <Reveal>
            <Meta>Skills</Meta>
            <h2 className="mt-3 font-serif text-4xl italic">What I work with</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {skills.map((group) => (
              <Reveal key={group.group}>
                <h3 className="border-b border-ink pb-3 font-serif text-2xl italic">{group.group}</h3>
                <ul className="mt-4 space-y-2 text-[14px] text-mute">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="interests" className="mt-20 scroll-mt-24">
          <Reveal>
            <Meta>Interests</Meta>
            <h2 className="mt-3 font-serif text-4xl italic">Outside the archive</h2>
            <p className="mt-4 max-w-xl text-[15px] text-mute">音乐、摄影、旅行与阅读。点开分类看照片或书单。</p>
          </Reveal>

          <nav className="mt-10 grid grid-cols-2 border-t border-ink md:grid-cols-4" role="tablist" aria-label="爱好分类">
            {hobbies.map((hobby) => (
              <button
                key={hobby.id}
                type="button"
                role="tab"
                aria-selected={hobby.id === active}
                data-cursor="VIEW"
                onClick={() => setActive(hobby.id)}
                className={cn(
                  "border-b border-line py-4 text-left text-[11px] tracking-[0.16em] uppercase",
                  hobby.id === active ? "italic text-ink" : "text-mute",
                )}
              >
                {hobby.tab}
              </button>
            ))}
          </nav>

          <article className="pt-10">
            <h3 className="font-serif text-3xl italic">{current.title}</h3>
            <p className="mt-3 font-serif text-lg text-mute italic">{current.note}</p>
            <div className="mt-8">
              {"books" in current && current.books?.length ? (
                <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                  {current.books.map((book) => (
                    <div key={book.title} className="border-t border-line pt-4">
                      <p className="text-[11px] tracking-[0.16em] uppercase text-mute">{book.genre}</p>
                      <h4 className="mt-2 font-serif text-3xl italic">{book.title}</h4>
                      <p className="mt-2 text-[14px] text-mute">{book.author}</p>
                    </div>
                  ))}
                </div>
              ) : current.slides.length > 0 ? (
                <AlbumSlider key={current.id} slides={current.slides} label={current.title} />
              ) : null}
            </div>
          </article>

          <div className="mt-10">
            <ArchiveLink to="/internship">See internship</ArchiveLink>
          </div>
        </section>
      </div>
    </div>
  )
}

function AboutRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-6 border-b border-line pb-3">
      <dt className="text-[11px] tracking-[0.16em] uppercase text-mute">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  )
}
