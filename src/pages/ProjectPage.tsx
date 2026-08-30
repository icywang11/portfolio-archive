import { Link, Navigate, useParams } from "react-router-dom"
import { getNextProject, getProject, projectLinks, projectRedirects } from "@/data/projects"
import { ArchiveLink } from "@/components/ui/ArchiveLink"
import { Meta, Reveal } from "@/components/ui/Reveal"
import { Stat } from "@/components/ui/WindowFrame"

export function ProjectPage() {
  const { slug } = useParams()
  if (!slug) return <Navigate to="/works" replace />

  const alias = projectRedirects[slug]
  if (alias) return <Navigate to={alias} replace />

  const project = getProject(slug)
  if (!project) return <Navigate to="/works" replace />
  if (project.to !== `/works/${project.slug}`) {
    return <Navigate to={project.to} replace />
  }

  const next = getNextProject(project.slug)
  const extras = projectLinks[project.slug]

  return (
    <article className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Meta>
            Project {project.num} / {project.category}
          </Meta>
          <h1 className="mt-4 font-serif text-[clamp(44px,7vw,80px)] leading-[0.9] italic">{project.title}</h1>
          <p className="mt-3 font-serif text-2xl text-mute italic">{project.enTitle}</p>
          <p className="mt-4 text-[12px] tracking-[0.14em] uppercase text-mute">
            {project.year} / {project.role}
          </p>
        </Reveal>

        {project.stats.length > 0 ? (
          <div className="mt-12 grid gap-8 border-y border-ink py-8 md:grid-cols-2 lg:grid-cols-4">
            {project.stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        ) : (
          <div className="mt-10 border-t border-ink" />
        )}

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <CaseBlock kicker="Overview" title="项目背景" body={project.overview} />
          <CaseBlock kicker="Challenge" title="遇到的问题" body={project.challenge} />
          <CaseBlock kicker="Approach" title="我怎么做" body={project.approach} />
          <Reveal>
            <Meta>Execution</Meta>
            <h2 className="mt-3 font-serif text-3xl italic">具体执行</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-mute">
              {project.execution.map((item) => (
                <li key={item} className="border-l border-line pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <CaseBlock kicker="Result" title="结果" body={project.result} />
          <CaseBlock kicker="Reflection" title="复盘" body={project.reflection} />
        </div>

        {extras?.length ? (
          <Reveal className="mt-12 border-t border-line pt-8">
            <Meta>{project.linksLabel ?? "Links"}</Meta>
            <div className="mt-4 flex flex-col gap-3">
              {extras.map((item) => (
                <ArchiveLink key={item.href} href={item.href} cursor="OPEN">
                  {item.label}
                </ArchiveLink>
              ))}
            </div>
          </Reveal>
        ) : project.href ? (
          <Reveal className="mt-12">
            <ArchiveLink href={project.href} cursor="OPEN">
              {project.hrefLabel ?? "Open live work"}
            </ArchiveLink>
          </Reveal>
        ) : null}

        <div className="mt-20 flex items-center justify-between border-t border-ink pt-8">
          <Link to="/works" className="text-[11px] tracking-[0.16em] uppercase text-mute" data-cursor="BACK">
            ← Index
          </Link>
          <ArchiveLink to={next.to} cursor="NEXT">
            Next · {next.title}
          </ArchiveLink>
        </div>
      </div>
    </article>
  )
}

function CaseBlock({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <Reveal>
      <Meta>{kicker}</Meta>
      <h2 className="mt-3 font-serif text-3xl italic">{title}</h2>
      <p className="mt-4 text-[15px] text-mute">{body}</p>
    </Reveal>
  )
}
