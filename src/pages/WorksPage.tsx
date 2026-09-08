import { useState } from "react"
import { isExternalProject, projects } from "@/data/projects"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { ProjectNav } from "@/components/ui/ProjectNav"
import { Meta, Reveal } from "@/components/ui/Reveal"

export function WorksPage() {
  const [active, setActive] = useState(projects[0].slug)
  const current = projects.find((project) => project.slug === active) ?? projects[0]

  return (
    <div className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>Works / Index</Meta>
          <h1 className="mt-4 font-serif text-[clamp(48px,8vw,84px)] leading-[0.9] italic">Selected Works</h1>
          <p className="mt-5 max-w-2xl text-[15px] text-mute">四条线索：社区运营、AI 工具、玩法落地、舆情处理。</p>
        </Reveal>

        <div className="mt-12 hidden gap-14 lg:grid lg:grid-cols-[0.38fr_0.62fr]">
          <div className="border-t border-ink">
            {projects.map((project) => (
              <button
                key={project.slug}
                type="button"
                data-cursor="VIEW"
                onMouseEnter={() => setActive(project.slug)}
                onFocus={() => setActive(project.slug)}
                onClick={() => setActive(project.slug)}
                className={`flex w-full items-baseline justify-between border-b border-line py-5 text-left transition-colors duration-300 ${
                  project.slug === active ? "bg-accent/40" : "hover:bg-beige/50"
                }`}
              >
                <span className="w-12 font-serif text-sm text-mute">{project.num}</span>
                <span className="flex-1 font-serif text-2xl">{project.title}</span>
              </button>
            ))}
          </div>

          <Reveal>
            <div className="flex flex-wrap gap-2 text-[11px] tracking-[0.14em] uppercase text-mute">
              <span>{current.year}</span>
              <span>/</span>
              <span>{current.role}</span>
              <span>/</span>
              <span>{current.category}</span>
            </div>
            <h2 className="mt-4 font-serif text-4xl italic">{current.enTitle}</h2>
            <p className="mt-3 max-w-xl text-[15px] text-mute">{current.summary}</p>
            {isExternalProject(current) ? (
              <ArchiveLink href={current.to} cursor="OPEN" className="mt-6 text-ink">
                View project
              </ArchiveLink>
            ) : (
              <ArchiveLink to={current.to} cursor="VIEW" className="mt-6 text-ink">
                View project
              </ArchiveLink>
            )}
          </Reveal>
        </div>

        <div className="mt-10 space-y-10 lg:hidden">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectNav project={project} className="group block border-t border-ink pt-6">
                <Meta>
                  {project.num} / {project.category}
                </Meta>
                <h2 className="mt-4 font-serif text-3xl">{project.title}</h2>
                <p className="mt-2 text-[14px] text-mute">{project.summary}</p>
                <p className="mt-3 text-[11px] tracking-[0.16em] uppercase">View →</p>
              </ProjectNav>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
