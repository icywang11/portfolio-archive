import { site, skills, timeline, interests } from "@/data/site"
import { Meta, Reveal } from "@/components/ui/Reveal"
import { ArchiveLink } from "@/components/ui/ArchiveLink"

export function AboutPage() {
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
              src="/avatar.jpg"
              alt={site.name}
              className="aspect-[3/4] w-full rounded-[16px] object-cover object-[center_18%]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="space-y-4 text-[15px]">
              <AboutRow label="Name" value={`${site.name} / ${site.short}`} />
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

        <section id="experience" className="mt-20 scroll-mt-24">
          <Reveal>
            <Meta>Experience</Meta>
            <h2 className="mt-3 font-serif text-4xl italic">Timeline</h2>
          </Reveal>
          <div className="mt-8 border-t border-ink">
            {timeline.map((item) => (
              <Reveal key={item.year}>
                <div className="grid gap-3 border-b border-line py-6 md:grid-cols-[120px_1fr]">
                  <p className="font-serif text-3xl italic">{item.year}</p>
                  <div>
                    <p className="font-serif text-2xl">{item.title}</p>
                    <p className="text-[12px] tracking-[0.14em] uppercase text-mute">{item.role}</p>
                    <p className="mt-2 text-[15px] text-mute">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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

        <section className="mt-20">
          <Reveal>
            <Meta>Interests</Meta>
            <h2 className="mt-3 font-serif text-4xl italic">Outside the archive</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {interests.map((item) => (
              <Reveal key={item.title}>
                <div className="border-t border-line pt-4">
                  <h3 className="font-serif text-2xl italic">{item.title}</h3>
                  <p className="mt-2 text-[14px] text-mute">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ArchiveLink to="/works">See selected works</ArchiveLink>
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
