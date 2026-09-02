import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import { directory, identity, site } from "@/data/site"
import { projects } from "@/data/projects"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { ProjectNav } from "@/components/ui/ProjectNav"
import { Meta, Reveal } from "@/components/ui/Reveal"

export function HomePage() {
  const reduce = useReducedMotion()

  return (
    <div>
      <section className="relative overflow-hidden px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <p className="pointer-events-none absolute top-10 right-6 font-serif text-[28vw] leading-none text-ink/[0.035] italic md:right-10">
          01
        </p>
        <div className="mx-auto grid max-w-[1180px] items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Meta>Portfolio / {site.volume}</Meta>
              <h1 className="mt-6 font-serif text-[clamp(64px,12vw,140px)] leading-[0.82] tracking-[-0.03em] italic">
                {site.name}
              </h1>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mt-7 text-[13px] tracking-[0.16em] uppercase text-mute">{site.roleLine}</p>
              <p className="mt-4 max-w-xl text-[15px] text-mute">{site.intro}</p>
              <p className="mt-6 font-serif text-2xl italic md:text-3xl">{site.headline}</p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                <ArchiveLink to="/works" cursor="ENTER" className="text-ink">
                  Enter Archive
                </ArchiveLink>
                <Link
                  to="/gaming"
                  data-cursor="PLAY"
                  className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-[12px] tracking-[0.16em] uppercase text-paper-2 transition-colors duration-300 hover:bg-transparent hover:text-ink"
                >
                  游戏行业 HR · 看游戏经历
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.aside
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4 border-t border-ink pt-6 text-[13px] md:border-t-0 md:border-l md:pt-0 md:pl-10"
          >
            {identity.map((row) => (
              <IdentityRow key={row.label} label={row.label} value={row.value} />
            ))}
          </motion.aside>
        </div>
      </section>

      <section className="blue-wash border-y border-line px-5 py-12 md:px-8 md:py-14">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Meta>For Game Industry HR</Meta>
            <h2 className="mt-3 font-serif text-3xl italic md:text-5xl">如果你是游戏行业 HR</h2>
            <p className="mt-3 max-w-xl text-[15px] text-mute">
              一键前往游戏经历。里面是我实际玩过的品类、时长、充值和成绩：王者荣耀、英雄联盟手游、QQ 飞车、地平线 5、燕云十六声、原神等。
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/gaming"
              data-cursor="PLAY"
              className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3.5 text-[12px] tracking-[0.16em] uppercase text-paper-2 transition-colors duration-300 hover:bg-transparent hover:text-ink"
            >
              一键前往游戏经历
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="beige-wash border-y border-line px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <Meta>Portfolio Directory</Meta>
            <h2 className="mt-3 font-serif text-4xl italic md:text-5xl">Index</h2>
          </Reveal>
          <div className="mt-10 border-t border-ink">
            {directory.map((item, i) => (
              <Reveal key={item.to} delay={i * 0.04}>
                <Link
                  to={item.to}
                  data-cursor="OPEN"
                  className="group grid grid-cols-[48px_1fr] items-baseline gap-4 border-b border-line py-5 md:grid-cols-[72px_1fr_auto_auto]"
                >
                  <span className="font-serif text-sm text-mute">{item.num}</span>
                  <strong className="font-serif text-[28px] font-medium transition-colors duration-300 group-hover:italic">
                    {item.title}
                  </strong>
                  <em className="col-start-2 text-[12px] not-italic tracking-[0.08em] text-mute md:col-start-auto">
                    {item.hint}
                  </em>
                  <span className="hidden text-[11px] tracking-[0.16em] uppercase text-mute group-hover:text-ink md:inline">
                    Open →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <Meta>Selected Works</Meta>
              <h2 className="mt-3 font-serif text-4xl italic md:text-5xl">Archive</h2>
            </div>
            <ArchiveLink to="/works">View all</ArchiveLink>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.04}>
                <WorkPreview project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function IdentityRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-6 border-b border-line pb-3">
      <span className="text-[11px] tracking-[0.16em] uppercase text-mute">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  )
}

function WorkPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <ProjectNav project={project} className="group block border-t border-line pt-5">
      <Meta>
        {project.num} / {project.category}
      </Meta>
      <h3 className="mt-2 font-serif text-3xl transition-all duration-300 group-hover:italic">{project.title}</h3>
      <p className="mt-2 max-w-xl text-[14px] text-mute">{project.summary}</p>
      <p className="mt-3 text-[11px] tracking-[0.16em] uppercase text-mute group-hover:text-ink">View project →</p>
    </ProjectNav>
  )
}
