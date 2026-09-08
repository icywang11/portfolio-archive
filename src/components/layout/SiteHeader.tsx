import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { nav, site } from "@/data/site"
import { asset } from "@/lib/asset"
import { cn } from "@/lib/cn"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-5 md:px-8">
        <Link to="/" data-cursor="HOME" className="font-serif text-[22px] italic">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 text-[11px] tracking-[0.16em] uppercase lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-cursor="OPEN"
              className={({ isActive }) =>
                cn("text-mute transition-colors duration-300 hover:text-ink", isActive && "text-ink")
              }
            >
              {({ isActive }) => (
                <span className={cn("border-b", isActive ? "border-accent" : "border-transparent")}>{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={asset(site.resume)}
            download={site.resumeFileName}
            data-cursor="SAVE"
            className="hidden text-[11px] tracking-[0.18em] uppercase text-mute hover:text-ink md:inline"
          >
            Resume
          </a>
          <Link
            to="/works"
            data-cursor="VIEW"
            className="hidden text-[11px] tracking-[0.18em] uppercase text-mute hover:text-ink md:inline"
          >
            Archive
          </Link>
          <button
            type="button"
            className="grid size-9 place-items-center border border-ink lg:hidden"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-paper px-5 py-4 lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 font-serif text-3xl italic"
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={asset(site.resume)}
            download={site.resumeFileName}
            onClick={() => setOpen(false)}
            className="block border-b border-line py-4 font-serif text-3xl italic"
          >
            Resume
          </a>
        </nav>
      ) : null}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3 px-5 py-7 text-[11px] tracking-[0.14em] uppercase text-mute md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {site.year} {site.name}
        </p>
        <p>Portfolio Archive · Quiet Luxury</p>
      </div>
    </footer>
  )
}
