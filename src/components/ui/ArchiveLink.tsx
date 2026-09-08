import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/cn"

type Props = {
  to?: string
  href?: string
  download?: string | boolean
  sameTab?: boolean
  children: ReactNode
  className?: string
  cursor?: string
}

export function ArchiveLink({ to, href, download, sameTab, children, className, cursor = "OPEN" }: Props) {
  const classes = cn(
    "group inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase transition-colors duration-300 hover:text-ink",
    className,
  )

  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  )

  if (to) {
    return (
      <Link to={to} data-cursor={cursor} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <a
      href={href}
      download={download}
      target={download || sameTab ? undefined : "_blank"}
      rel={download || sameTab ? undefined : "noopener noreferrer"}
      data-cursor={cursor}
      className={classes}
    >
      {inner}
    </a>
  )
}
