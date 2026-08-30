import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { isExternalProject, type Project } from "@/data/projects"

export function ProjectNav({
  project,
  className,
  cursor = "VIEW",
  children,
}: {
  project: Project
  className?: string
  cursor?: string
  children: ReactNode
}) {
  if (isExternalProject(project)) {
    return (
      <a href={project.to} target="_blank" rel="noopener noreferrer" data-cursor={cursor} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={project.to} data-cursor={cursor} className={className}>
      {children}
    </Link>
  )
}
