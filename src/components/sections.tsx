import { ArrowUpRight } from "lucide-react"
import {
  authors,
  books,
  gameGroups,
  indexItems,
  internships,
  site,
  works,
} from "@/lib/content"

export function Hero() {
  return (
    <section id="icy" className="flex min-h-[100svh] items-center px-6 pt-16">
      <div className="mx-auto w-full max-w-[1040px]">
        <p className="text-[11px] tracking-[0.42em] uppercase text-muted-foreground">
          {site.kicker}
        </p>
        <h1 className="mt-7 font-serif text-[clamp(72px,16vw,168px)] font-medium italic leading-[0.86] tracking-[-0.03em]">
          {site.name}
        </h1>
        <p className="mt-7 text-[13px] tracking-[0.12em] text-muted-foreground">{site.role}</p>
        <p className="mt-2 text-[13px] tracking-[0.12em] text-muted-foreground">{site.orgs}</p>
        <a
          href="#intro"
          className="mt-12 inline-block text-[12px] tracking-[0.28em] uppercase"
        >
          Index
        </a>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="intro" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <div className="grid items-end gap-10 md:grid-cols-[280px_1fr] md:gap-14">
          <div className="aspect-[3/4] overflow-hidden bg-[#ece6db]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.jpg"
              alt={site.name}
              className="h-full w-full object-cover object-[center_20%]"
            />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">About</p>
            <h2 className="mt-3 font-serif text-[clamp(40px,6vw,64px)] font-medium italic leading-none">
              {site.name}
            </h2>
            <p className="mt-5 max-w-[34em] text-[15px]">{site.intro}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
              {site.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <nav className="mt-16 border-t border-foreground" aria-label="目录">
          {indexItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="grid grid-cols-[48px_1fr] items-baseline gap-x-4 border-b border-foreground/15 py-[22px] md:grid-cols-[64px_1fr_auto]"
            >
              <span className="font-serif text-[13px] tracking-[0.16em] text-muted-foreground">
                {item.num}
              </span>
              <strong className="font-serif text-[28px] font-medium">{item.title}</strong>
              <em className="col-start-2 mt-1 text-[12px] not-italic tracking-[0.08em] text-muted-foreground md:col-start-auto md:mt-0">
                {item.hint}
              </em>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

export function Internship() {
  return (
    <section id="internship" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">01 / INTERN</p>
        <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
          实习 <em className="italic text-muted-foreground">经历</em>
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-muted-foreground">
          海外运营、社区基建与数据复盘。
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          {internships.map((job) => (
            <article key={job.company}>
              <p className="text-[11px] tracking-[0.2em] text-muted-foreground">{job.num}</p>
              <p className="mt-2 text-[13px] text-muted-foreground">{job.date}</p>
              <p className="mt-2 font-serif text-[32px] font-medium tracking-[0.04em]">
                {job.company}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-medium">{job.role}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground">{job.summary}</p>
              <ul className="mt-4 space-y-2 text-[14px]">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="border-l border-foreground/20 pl-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Works() {
  return (
    <section id="ai-works" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">02 / AI</p>
        <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
          AI <em className="italic text-muted-foreground">工作流</em>
        </h2>
        <p className="mt-3 text-[15px] text-muted-foreground">
          落地
          <span className="mx-1 font-serif text-[1.7em] italic leading-none text-foreground">4</span>
          件作品，均可进入实操。
        </p>

        <div className="mt-10">
          {works.map((work) => (
            <a
              key={work.num}
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[40px_1fr_auto] items-start gap-4 border-b border-foreground/15 py-6 md:grid-cols-[56px_1fr_auto]"
            >
              <span className="font-serif text-[13px] tracking-[0.16em] text-muted-foreground">
                {work.num}
              </span>
              <span>
                <strong className="block font-serif text-2xl font-medium group-hover:italic">
                  {work.title}
                </strong>
                <em className="mt-2 block max-w-[46em] text-[14px] not-italic leading-7 text-muted-foreground">
                  {work.description}
                </em>
              </span>
              <ArrowUpRight className="mt-2 size-4 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gaming() {
  return (
    <section id="gaming" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">03 / GAME</p>
        <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
          游戏 <em className="italic text-muted-foreground">经历</em>
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-muted-foreground">
          深度体验与长期投入的游戏记录。
        </p>

        <div className="mt-12 space-y-10">
          {gameGroups.map((group) => (
            <div key={group.type}>
              <div className="flex items-baseline justify-between border-b border-foreground/15 pb-3">
                <span className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
                  {group.dim}
                </span>
                <span className="font-serif text-lg">{group.type}</span>
              </div>
              <div className="grid md:grid-cols-2">
                {group.games.map((game) => (
                  <article key={game.title} className="border-b border-foreground/15 py-5 md:pr-8">
                    <h3 className="font-serif text-2xl font-medium">{game.title}</h3>
                    <p className="mt-2 text-[14px] leading-7 text-muted-foreground">{game.body}</p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.08em] text-muted-foreground">
                      {game.badges.map((badge) => (
                        <span key={badge}>{badge}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Reading() {
  const loop = [...authors, ...authors]

  return (
    <section id="writing" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1040px]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">05 / READING</p>
        <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
          哲学 <em className="italic text-muted-foreground">经济</em>
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-muted-foreground">
          一边读人怎么活，一边读事怎么做成。
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="border-b border-foreground pb-3 font-serif text-2xl font-medium">哲学</h3>
            <ul className="mt-5 space-y-5 text-[15px]">
              {books.philosophy.map((book) => (
                <li key={book.title}>
                  <strong>{book.title}</strong> — {book.author}。{book.note}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="border-b border-foreground pb-3 font-serif text-2xl font-medium">经济</h3>
            <ul className="mt-5 space-y-5 text-[15px]">
              {books.economy.map((book) => (
                <li key={book.title}>
                  <strong>{book.title}</strong> — {book.author}。{book.note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden" aria-label="常读作者">
        <div className="author-track flex w-max gap-10">
          {loop.map((author, i) => (
            <figure key={`${author.name}-${i}`} className="w-20 shrink-0 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={author.src}
                alt=""
                className="mx-auto h-20 w-20 rounded-full object-cover grayscale"
              />
              <figcaption className="mt-2 text-[12px]">{author.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
